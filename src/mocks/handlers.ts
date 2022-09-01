import { rest } from "msw";

export const handlers = [
  rest.get("*", (req, res, ctx) => {
    return res(
      ctx.delay(1000),
      ctx.status(200),
      ctx.body(`${req.method} ${req.url}: ${new Date().toISOString()}`)
    );
  }),
  rest.post("*", (req, res, ctx) => {
    return res(
      ctx.delay(1000),
      ctx.status(200),
      ctx.body(`${req.method} ${req.url}: ${new Date().toISOString()}`)
    );
  }),
];
