import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { compileMDX } from 'next-mdx-remote/rsc';
import { MDXComponents } from '@/components/mdx/MDXComponents';

const root = process.cwd();
const contentDir = path.join(root, 'src', 'content', 'blog');

export type MDXFrontmatter = {
    title: string;
    excerpt: string;
    date: string;
    author: string;
    coverImage?: string;
    tags?: string[];
    slug: string;
};

export type BlogPost = {
    meta: MDXFrontmatter;
    content: React.ReactElement;
};

export async function getPostBySlug(slug: string): Promise<BlogPost | undefined> {
    const realSlug = slug.replace(/\.mdx$/, '');
    const filePath = path.join(contentDir, `${realSlug}.mdx`);

    try {
        const fileContent = fs.readFileSync(filePath, 'utf8');

        const { content, frontmatter } = await compileMDX<Omit<MDXFrontmatter, 'slug'>>({
            source: fileContent,
            options: {
                parseFrontmatter: true,
            },
            components: MDXComponents,
        });

        return {
            meta: { ...frontmatter, slug: realSlug },
            content,
        };
    } catch (error) {
        console.error(`Error reading file ${filePath}:`, error);
        return undefined;
    }
}

export async function getAllPosts(): Promise<MDXFrontmatter[]> {
    if (!fs.existsSync(contentDir)) {
        return [];
    }
    const files = fs.readdirSync(contentDir);
    const posts = await Promise.all(
        files.map(async (file) => {
            if (!file.endsWith('.mdx')) return null;
            const realSlug = file.replace(/\.mdx$/, '');
            const filePath = path.join(contentDir, file);
            const fileContent = fs.readFileSync(filePath, 'utf8');
            const { data } = matter(fileContent);
            return {
                title: data.title,
                excerpt: data.excerpt,
                date: data.date,
                author: data.author,
                coverImage: data.coverImage,
                tags: data.tags,
                slug: realSlug,
            } as MDXFrontmatter;
        })
    );
    return posts
        .filter((post): post is MDXFrontmatter => post !== null)
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
