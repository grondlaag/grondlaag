import { z } from 'astro:content';

export const datedCollectionSchema = z.object({
	title: z.string(),
	description: z.string(),
	date: z.coerce.date(),
	tags: z.array(z.string()).optional(),
});

export const catalogueCollectionSchema = z.object({
	title: z.string(),
	description: z.string(),
	date: z.coerce.date().optional(),
	order: z.number().optional(),
	accent: z.boolean().optional(),
	category: z.string().optional(),
	tags: z.array(z.string()).optional(),
	status: z.string().optional(),
	price: z.string().optional(),
	duur: z.string().optional(),
	cta_label: z.string().optional(),
	cta_link: z.string().optional(),
	pdf: z.string().optional(),
	featured: z.boolean().optional(),
});
