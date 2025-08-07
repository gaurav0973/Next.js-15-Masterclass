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

Example:
   - users
        - [id]
            - page.tsx
Now how to capture the dynamic part of the URL (e.g., `id`):

- Method: Using object destructuring in the component props:
```tsx
const UserPage = ({ params }: {params : {id: string}}) => {
  const { id } = params;
  return <div>User ID: {id}</div>;
};
export default UserPage;
```


## 07-Catch-All Routes
- [Catch-All Routes](https://nextjs.org/docs/app/api-reference/file-conventions/dynamic-routes#catch-all-segments)
- Example:
   - products
        - [...slug]
            - page.tsx
- Inside the `app` directory, create a new folder named `products`.
- Inside the `products` folder, create a folder named `[...slug]`.
- Inside the `[...slug]` folder, create a `page.tsx` file that will render information based on the dynamic segments from the URL.
- Inside `page.tsx`, display the entire `slug` array, showing each segment of the URL dynamically.


## 08-Not Found Page
- [Not Found Page](https://nextjs.org/docs/app/api-reference/file-conventions/not-found)
- [Blog](https://victoreke.com/blog/how-to-create-a-custom-404-error-page-in-nextjs-13)


## 09-Redirects
## 10-Layouts
- [Layouts](https://www.builder.io/blog/layouts-in-nextjs-14-visual)
- why to use layouts?
    - Layouts are used to share common UI elements across multiple pages, such as headers, footers, and sidebars.
    - They help in maintaining a consistent look and feel throughout the application.

## 11-Loading
## 12-Error Handling
## 13-Template
- [Template](https://www.builder.io/blog/nextjs-14-layouts-templates)
- why do even need templates when I have layouts ?
    - a template is fully remounted every time a user navigates to a new page
    - a layout will not remount when navigating to a new page, it will only update the content inside it.
- Example:
    - /dashboard
        - layout.tsx
        - template.tsx
        - page.tsx
        - /settings
            - page.tsx
    - In this example, the `template.tsx` will be remounted every time the user navigates to a new page within the `/dashboard` route, while the `layout.tsx` will remain mounted.

Note📝:A single route can effectively contain both a layout and a template, with the layout serving as an outer shell that encases the template within it.
