import { serve } from "@hono/node-server";
import { Hono } from "hono";

const containerId = crypto.randomUUID();

const app = new Hono();
app.get("/", (c) => c.text(`I am example app!\n${containerId}`));

serve({ fetch: app.fetch, port: 3000 }, ({ port }) => {
  console.log(`server listening on http://localhost:${port}`);
});
