import { glob } from 'astro/loaders';
import { defineCollection } from 'astro:content';
import { datedCollectionSchema, catalogueCollectionSchema } from './content/config';

const advies = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/advies' }),
	schema: catalogueCollectionSchema,
});

const posts = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/artikels' }),
	schema: datedCollectionSchema,
});

const allaambak = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/allaambak' }),
	schema: catalogueCollectionSchema,
});

const opleidingen = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/opleidingen' }),
	schema: catalogueCollectionSchema,
});

export const collections = {
	advies,
	posts,
	allaambak,
	opleidingen,
};
