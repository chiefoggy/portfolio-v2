import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsData() {
    // Create folder if it doesn't exist
    if (!fs.existsSync(postsDirectory)) {
        return [];
    }

    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName) => {
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, '');

        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        // Extract first image from content if not in frontmatter
        let image = matterResult.data.image;
        if (!image) {
            const imageMatch = matterResult.content.match(/!\[.*?\]\((.*?)\)/);
            if (imageMatch) {
                image = imageMatch[1];
            }
        }

        // Combine the data with the id
        return {
            id,
            ...matterResult.data,
            image,
        };
    });

    // Sort posts by date
    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}

export function getAllPostIds() {
    if (!fs.existsSync(postsDirectory)) {
        return [];
    }
    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames.map((fileName) => {
        return {
            params: {
                slug: fileName.replace(/\.md$/, ''),
            },
        };
    });
}

export async function getPostData(id) {
    const fullPath = path.join(postsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Custom plugin to extract width from alt text (e.g. "Alt Text | 600")
    function imageMetadataPlugin() {
        return (tree) => {
            function visit(node) {
                if (node.type === 'image') {
                    const alt = node.alt || '';
                    const match = alt.match(/^(.*)\|\s*(\d+)\s*$/);
                    if (match) {
                        node.alt = match[1].trim();
                        // Inject width into HTML properties
                        node.data = node.data || {};
                        node.data.hProperties = node.data.hProperties || {};
                        node.data.hProperties.width = match[2];
                    }
                }
                if (node.children) {
                    node.children.forEach(visit);
                }
            }
            visit(tree);
        };
    }

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
        .use(imageMetadataPlugin)
        .use(html)
        .process(matterResult.content);
    const contentHtml = processedContent.toString();

    // Combine the data with the id and contentHtml
    return {
        id,
        contentHtml,
        ...matterResult.data,
    };
}
