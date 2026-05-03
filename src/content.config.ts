import { glob } from 'astro/loaders';
import { defineCollection } from 'astro:content';
import { datedCollectionSchema, catalogueCollectionSchema, pageCollectionSchema } from './content/config';

const advies = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/advies' }),
	schema: catalogueCollectionSchema,
});

const posts = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/notities' }),
	schema: datedCollectionSchema,
});

const alaambak = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/alaambak' }),
	schema: catalogueCollectionSchema,
});

const opleidingen = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/opleidingen' }),
	schema: catalogueCollectionSchema,
});

const paginas = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/paginas' }),
	schema: pageCollectionSchema,
});

export const collections = {
	advies,
	posts,
	alaambak,
	opleidingen,
	paginas,
};
