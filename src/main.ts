import { serve } from "@hono/node-server";
import { Hono } from "hono";

const containerId = crypto.randomUUID();

const app = new Hono();
app.get("/", (c) => c.text(`I am example app!\n${containerId}`));

const server = serve({ fetch: app.fetch, port: 3000 });

process.on("SIGTERM", function onSigterm() {
  server.close(() => process.exit());
});
