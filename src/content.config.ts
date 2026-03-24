import { glob } from 'astro/loaders';
import { defineCollection } from 'astro:content';
import { baseCollectionSchema } from './content/config';

const posts = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
	schema: baseCollectionSchema,
});

const tools = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/tools' }),
	schema: baseCollectionSchema,
});

const opleidingen = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/opleidingen' }),
	schema: baseCollectionSchema,
});

export const collections = {
	posts,
	tools,
	opleidingen,
};
