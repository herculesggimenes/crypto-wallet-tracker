import { createRouter } from "./context";
import { z } from "zod";

export const positionRouter = createRouter()
  .query("createPosition", {
    input: z
      .object({
        text: z.string().nullish(),
      })
      .nullish(),
    resolve({ input }) {
      return {
        greeting: `Hello ${input?.text ?? "world"}`,
      };
    },
  })
  .query("getAll", {
    async resolve({ ctx }) {
      return await ctx.prisma.position.findMany();
    },
  });
