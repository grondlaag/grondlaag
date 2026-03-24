import { z } from 'astro:content';

export const baseCollectionSchema = z.object({
	title: z.string(),
	description: z.string(),
	date: z.coerce.date(),
	tags: z.array(z.string()).optional(),
});
