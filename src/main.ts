import { serve } from "@hono/node-server";
import { Hono } from "hono";

const containerId = crypto.randomUUID();

const app = new Hono();
app.get("/", (c) => c.text(`Heloo I am example app 🥺\n${containerId}\nenv: ${JSON.stringify(process.env, null, 2)}`));

const server = serve({ fetch: app.fetch, port: 3000 });

process.on("SIGTERM", () => {
  server.close(() => process.exit());
});
