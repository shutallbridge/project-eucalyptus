import { defineCollection, z } from "astro:content";
import { content as contentSchema } from "@/utils/content";

const walkCollection = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    cardDescription: z.string(),
    tags: z.array(z.string()),
    area: z.string(),
    image: z.string(),
    imageAlt: z.string(),

    // specs
    difficulty: z.enum(["Easy", "Moderate", "Hard"]),
    duration: z.string(),
    distance: z.string(),
    isAccessible: z.boolean(),
    hasAlerts: z.boolean(),

    // overview
    overview: z.string(),

    // timeline
    timeline: z.array(z.object({ title: z.string(), time: z.string() })),

    // map
    mapUrl: z.string(),

    // visitor info
    visitorInfo: z.array(
      z.object({ title: z.string(), icon: z.string(), content: contentSchema }),
    ),
  }),
});

export const collections = {
  walks: walkCollection,
};
