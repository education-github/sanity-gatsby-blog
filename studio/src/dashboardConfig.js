export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6157718f09d847305aefdec3",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-x2x88ro2",
                  apiId: "0ee16d77-58c6-432a-9566-8ff81999d712",
                },
                {
                  buildHookId: "6157718f0c5b502c9393f491",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-e88t3zet",
                  apiId: "6f8bf7d7-4794-4384-bda5-f2dc89605120",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/education-github/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-e88t3zet.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
