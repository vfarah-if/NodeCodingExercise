This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# **Amido Front End Technical Test**

**Using a framework of your choice (or no framework if you like) create a server-side-rendered application** that meets the following specification, using the following API:



https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/iTuneSearchAPI/Searching.html#//apple_ref/doc/uid/TP40017632-CH5-SW1



**Spec:**

**As a user**

I want to be able perform a search query about an artist, album or song

So that I can see a list of artists, albums and/or songs related to my query



**Given I am using the search form**

When I conduct a search

Then I should be able to see the results returning matching Artists, Albums, and/or Songs

And it should limited to 10 items at a time

(optional) And when I scroll down, another 10 items should be revealed.



Given I am using the search form

When I conduct a search

And there are no results

Then I should be notified that there are no results



(optional)

Given I have a list of results

When I 'favourite' an artist, song or album

Then the favourited item should appear in another list (favourites section).



**Note:**

1. Presentation is secondary to the above but use of css-in-js is favored against legacy CSS frameworks, we are mainly interested to see how your markup is structured.
2. Use of TS is preferred over JS
3. You can use NextJS or simple SSR

