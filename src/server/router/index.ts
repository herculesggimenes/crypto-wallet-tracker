// src/server/router/index.ts
import { createRouter } from "./context";
import superjson from "superjson";

import { positionRouter } from "./position";
import { currencyRouter } from "./currency";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("position.",positionRouter)
  .merge("currency.", currencyRouter)
  ;

// export type definition of API
export type AppRouter = typeof appRouter;
