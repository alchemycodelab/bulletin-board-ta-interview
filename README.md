# Alchemy Bulletin Board

## Demo

[Link to Demo](https://alchemy-web-bulletin.netlify.app/)

## Getting Started

Use the [original web template](https://github.com/alchemycodelab/web-template) to get started.

### Learning Objectives

-   Add data to a Supabase database using the Javascript library
-   Load data from a Supabase database using the Javascript library
-   Register new users on Supabase using the Javascript library
-   Authenticate existing users on Supabase using the Javascript library
-   Enable row-level-security and add policies to a Supabase database
-   Manage protected and unprotected pages by checking if a user is logged in
-   Use `location` object to redirect users

### Description

You are creating an online bulletin board with authentication. Don't forget that you will need to add the link to the supabase library to any HTML that is interacting with the database.

<pre><script defer src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js"></script></pre>

### Acceptance Criteria

-   Users should see a list of posts on the home page
-   Users should be able to register or login (`/auth` page)
-   Authenticated users should be able to create new posts (`/create` page)
-   Row-level-security should be enabled on your Supabase database with policies only allowing logged in users to add new data

### Rubric

| Task                                                                                 | Points |
| ------------------------------------------------------------------------------------ | ------ |
| ** Deploy Requirements **                                                            |        |
| Main branch deployed to Netlify                                                      | 1      |
| Open PR from `dev` branch with Netlify deploy preview                                | 1      |
| **Home Page Requirements**                                                           |        |
| Styled list of posts                                                                 | 3      |
| Header with links (or buttons) to auth and create pages                              | 1      |
| ASYNC: `fetchPosts()` : return array of posts from supabase                          | 2      |
| **Auth Page Requirements **                                                          |        |
| Allows users to login or sign up for the application                                 | 4      |
| ASYNC: `signUpUser` - calls supabase signUp method and returns user                  | 1      |
| ASYNC: `signInUser` - calls supabase signIn method and returns user                  | 1      |
| **Create Page Requirements**                                                         |        |
| Displays a form for users to add post details                                        | 1      |
| Can only be loaded when logged in, otherwise redirects to the auth page              | 2      |
| Header with links (or buttons) to home                                               | 1      |
| Creates a new row in the database on form submit and redirects back to the home page | 1      |
| ASYNC: `createPost()` creates a new row in the database                              | 1      |

### Stretch Goals
* Allow users to edit and delete posts (for now, you can allow ALL authenticated users to edit / delete all posts -- super stretch (i.e. what we'll do next), you can have posts belong to a specific user and only allow users to edit / delete their own posts)
* Allow users to add an image url and display the image on the post
* Add a post detail page and show additional information about the post on the detail page
* Allow users to "complete" a post (i.e. have a boolean field called "complete" and use a checkbox input)
* Add a toggle or dropdown to style the lists differently (i.e. dark mode)
