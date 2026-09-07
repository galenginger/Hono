import { Hono } from "hono";

const posts = new Hono();

posts.get("/", (c) => c.json("Get all posts"));
posts.get("/:id", (c) => c.json(`Get post with ID: ${c.req.param("id")}`));
posts.post("/", (c) => c.json("Create a new post"));
posts.put("/:id", (c) => c.json(`Update post with ID: ${c.req.param("id")}`));
posts.delete("/:id", (c) => c.json(`Delete post with ID: ${c.req.param("id")}`));

export default posts;