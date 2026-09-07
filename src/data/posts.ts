export interface Post {
  id: number;
  title: string;
  body: string;
  createdAt: Date;
}

export const mockedPosts: Post[] = [
  {
    id: 1,
    title: "Getting started with Hono",
    body: "Hono is a small, simple, and ultrafast web framework for the Edge.",
    createdAt: new Date("2026-01-10"),
  },
  {
    id: 2,
    title: "Why TypeScript matters",
    body: "Static typing catches bugs before they reach production.",
    createdAt: new Date("2026-02-15"),
  },
  {
    id: 3,
    title: "Deploying to the edge",
    body: "Edge functions bring your code closer to your users for lower latency.",
    createdAt: new Date("2026-03-01"),
  },
];
