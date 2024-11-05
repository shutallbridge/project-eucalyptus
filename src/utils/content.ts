import { z } from "astro:content";

const paragraphContentItem = z.object({
  type: z.enum(["paragraph"]),
  content: z.string(),
});

const listContentItem = z.object({
  type: z.enum(["list"]),
  content: z.array(z.string()),
});

export const contentItem = z.discriminatedUnion("type", [
  paragraphContentItem,
  listContentItem,
]);

export const content = z.array(contentItem);
