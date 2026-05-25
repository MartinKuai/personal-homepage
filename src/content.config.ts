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
    summary: z.string(),
    status: z.string().default('进行中'),
    started: z.string().optional(),
    updated: z.string().optional(),
    role: z.string().optional(),
    stack: z.array(z.string()).optional(),
    tags: z.array(z.string()).optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(true),
    placeholder: z.boolean().default(true),
    order: z.number().default(99),
  }),
});

const timeline = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    period: z.string().optional(),
    order: z.number().default(0),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().default(false),
    placeholder: z.boolean().default(false),
  }),
});

export const collections = { writing, projects, timeline };
