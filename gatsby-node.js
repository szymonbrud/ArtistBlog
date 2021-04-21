const path = require('path');

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      swapi {
        posts {
          id
          title
          shortDesc
          date
          readTime
          category
          image {
            url
          }
          content {
            html
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  const SinglePostTemplate = path.resolve(
    `src/templates/SinglePostTemplate/index.js`
  );

  result.data.swapi.posts.forEach((post) => {
    console.log(post.id);
    console.log(post.category);
    createPage({
      path: `/post/${post.id}`,
      component: SinglePostTemplate,
      context: {
        postData: post,
      },
    });
  });
};
