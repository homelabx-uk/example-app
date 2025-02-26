import { serve } from "@hono/node-server";
import { Hono } from "hono";

const app = new Hono();
app.get("/", (c) => c.text("I am example app!"));

serve({ fetch: app.fetch, port: 3000 }, ({ port }) => {
  console.log(`server listening on http://localhost:${port}`);
});
