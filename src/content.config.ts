import { defineCollection, z } from 'astro:content';

const writing = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date().optional(),
    status: z.enum(['draft', 'published']).default('draft'),
    category: z.string().optional(),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    status: z.enum(['draft', 'published']).default('draft'),
    category: z.string().optional(),
  }),
});

export const collections = { writing, projects };
