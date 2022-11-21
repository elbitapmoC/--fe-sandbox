## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

# The Challenge...

### Instructions

We're exploring different ways of innovating in the space of development, workflow and integration.
Your requirements are to build an application that shows an overview of the active branches on a GitHub repository.

Design concept [https://www.figma.com/file/2igSAZhrkvnMUbUEgapIv5/Front-end-hiring-process-v2?node-id=26%3A720]

#### Screen 1:

- Users should input a GitHub repository URL and hit submit.

#### Screen 2:

- User is taken to a new screen with some basic repository information and the list of active branches that can be moved around on 3 columns.
  - We call this the repository kanban.
  - By default branches should be in the first column: “In Progress”.
  - Users should be able to move branches to the next column called “Ready for Review”
  - Users should be able to move them to the final column, “Ready to Merge”.
    - (State of the kanban should only be persisted locally in the browser.)
