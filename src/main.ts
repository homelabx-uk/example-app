import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { gitSha } from "@/version";

const containerId = crypto.randomUUID();

const app = new Hono();
app.get("/", (c) =>
  c.text(`${process.env.GREETING} ${process.env.GREETEE}. I am example app 🥺\n${containerId}\ngitSha: ${gitSha}`),
);

const server = serve({ fetch: app.fetch, port: 3000 });

process.on("SIGTERM", () => {
  server.close(() => process.exit());
});
