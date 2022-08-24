// src/server/router/index.ts
import { createRouter } from "./context";
import superjson from "superjson";

import { exampleRouter } from "./example";
import { positionRouter } from "./position";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("example.", exampleRouter)
  .merge("position.",positionRouter)
  ;

// export type definition of API
export type AppRouter = typeof appRouter;
