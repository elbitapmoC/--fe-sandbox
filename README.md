# The Challenge...


We're exploring different ways of innovating in the space of development, workflow and integration.
Your requirements are to build an application that shows an overview of the active branches on a GitHub repository.

#### Screen 1:

- Users should input a GitHub repository URL and hit submit.

![image 2](https://user-images.githubusercontent.com/11306948/203875146-b3d3a246-490d-4646-934e-3c2ae23c33bd.jpg)


#### Screen 2:

- User is taken to a new screen with some basic repository information and the list of active branches that can be moved around on 3 columns.
  - We call this the repository kanban.
  - By default branches should be in the first column: “In Progress”.
  - Users should be able to move branches to the next column called “Ready for Review”
  - Users should be able to move them to the final column, “Ready to Merge”.
    - (State of the kanban should only be persisted locally in the browser.)
![image 1](https://user-images.githubusercontent.com/11306948/203875158-b25cabdd-3802-4819-83db-c49646f7a34d.jpg)


## Getting Started

First, run the development server:

```bash
# 1 - first install any packages needed to run the app.
npm i 

# 2 - run the app via:
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/index.tsx`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
