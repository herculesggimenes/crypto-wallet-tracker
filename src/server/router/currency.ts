import { createRouter } from "./context";
import { z } from "zod";

export const currencyRouter = createRouter()
  .mutation("create", {
    input: z
      .object({
        code: z.string()      }),
    async resolve({ input, ctx }){
      return await ctx.prisma.currency.create(
        {
          data: {
            code: input.code
          }
        }
      )
    },
  })
  .query("getAll", {
    async resolve({ ctx }) {
      return await ctx.prisma.currency.findMany();
    },
  });
