import { Hono } from "hono";
import { prisma } from "../db.js";

const posts = new Hono();

posts.get("/", async (c) => {
  const allPosts = await prisma.post.findMany();
  return c.json(allPosts);
});

posts.get("/:id", async (c) => {
  const id = Number(c.req.param("id"));
  const post = await prisma.post.findUnique({ where: { id } });
  if (!post) return c.json({ error: "Post not found" }, 404);
  return c.json(post);
});

posts.post("/", async (c) => {
  const { title, body } = await c.req.json();
  const post = await prisma.post.create({ data: { title, body } });
  return c.json(post, 201);
});

posts.put("/:id", async (c) => {
  const id = Number(c.req.param("id"));
  const { title, body } = await c.req.json();
  const post = await prisma.post.update({
    where: { id },
    data: { title, body },
  });
  return c.json(post);
});

posts.delete("/:id", async (c) => {
  const id = Number(c.req.param("id"));
  await prisma.post.delete({ where: { id } });
  return c.json({ success: true });
});

export default posts;
