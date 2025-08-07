# Next.js 15 Concepts

## 0-Introduction
 ### special files 
    - page.tsx 
    - layout.tsx
    - error.tsx
    - not-found.tsx
    - loading.tsx
    - template.tsx

## 01-Basic Routing
App
- page.tsx      -------------> Home Page
- layout.tsx    -------------> Layout for the app
- /about        ------------> About Page
    - page.tsx
- /contact      ------------> Contact Page
    - page.tsx

## 02-Nested Routing
App
- /dashboard    ------------> Dashboard Page
    - page.tsx
    - layout.tsx
    - /settings    ------------> Settings Page
        - page.tsx
    - /profile     ------------> Profile Page
        - page.tsx

📝Note 
- private page 
    - _folderName
        - page.tsx
        - layout.tsx

- Route Groups
    - (folderName)
        - page.tsx
        - layout.tsx
    - This is used to group routes without affecting the URL structure.
    - Example: 
        - /dashboard
            - (admin)
                - page.tsx
            - (user)
                - page.tsx




## 03-Linking
 - [Link Component but not the anchor tag](https://nextjs.org/docs/pages/api-reference/components/link)

## 04-useRouter
 - [useRouter Hook](https://nextjs.org/docs/pages/api-reference/functions/use-router)

📝Note : [Both are used for navigation then what makes them different?](https://javascript.plainenglish.io/day-20-mastering-navigation-in-next-js-with-next-link-and-userouter-c1b36f2ab045)
- use Link for visible navigation (buttons, menus, links).
- Use router.push() or router.replace() for action-based navigation (after submit, redirect, etc.).


## 05-Skipping Routes
- [Skipping Routes](https://nextjs.org/docs/pages/api-reference/functions/skip-routes)

## 06-Dynamic Routing
- [Dynamic Routing](https://nextjs.org/docs/pages/building-your-application/routing/dynamic-routes)
- [Incremental Static Regeneration](https://nextjs.org/docs/app/guides/incremental-static-regeneration)

