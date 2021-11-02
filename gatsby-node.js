const path = require('path');
const { createRemoteFileNode } = require('gatsby-source-filesystem');

const { fluid } = require(`gatsby-plugin-sharp`);

const axios = require('axios');
const { element } = require('prop-types');

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  createTypes(`
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      hmm: File @link(from: "hmm___NODE")
    }
    type Frontmatter {
      title: String!
      featuredImgUrl: String
      featuredImgAlt: String
    }
  `);
};

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
    createPage({
      path: `/post/${post.id}`,
      component: SinglePostTemplate,
      context: {
        postData: post,
      },
    });
  });
};

// exports.sourceNodes = ({
//   node,
//   actions,
//   createNodeId,
//   createContentDigest,
// }) => {
//   if (node.internal.type === 'SitePage' || node.internal.type === 'Site') {
//     console.log('YESSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS');
//   }
// };

exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
  cache,
  store,
}) => {
  // TODO: działa!
  // const pokemons = [
  //   { name: 'Pikachu', type: 'electric' },
  //   { name: 'Squirtle', type: 'water' },
  // ];
  // pokemons.forEach((pokemon) => {
  //   const node = {
  //     name: pokemon.name,
  //     type: pokemon.type,
  //     id: createNodeId(`Pokemon-${pokemon.name}`),
  //     internal: {
  //       type: 'Pokemon',
  //       contentDigest: createContentDigest(pokemon),
  //     },
  //   };
  //   actions.createNode(node);
  // });

  // TODO: działa !
  const body = JSON.stringify({
    query: `query{
      posts{
        id
        title
        image{
          url
        }
      }
      galleries {
        id
        title
        image {
          url
        }
      }
    }`,
  });

  const res = await axios({
    method: 'post',
    url:
      'https://api-eu-central-1.graphcms.com/v2/cknbq2upgeayk01z8f9zabj0i/master',
    data: body,
  });

  const { posts, galleries } = await res.data.data;

  for (const post of posts) {
    try {
      const node = {
        url: post.image.url,
        title: post.title,
        postId: post.id,
        id: createNodeId(`Post-${post.title}`),
        internal: {
          type: 'Post',
          contentDigest: createContentDigest(post),
        },
      };

      const fileNode = await createRemoteFileNode({
        url: post.image.url, // string that points to the URL of the image
        parentNodeId: node.id, // id of the parent node of the fileNode you are going to create
        createNode: actions.createNode, // helper function in gatsby-node to generate the node
        createNodeId, // helper function in gatsby-node to generate the node id
        cache, // Gatsby's cache
        store, // Gatsby's Redux store
      });

      node.myOwnImg___NODE = fileNode.id;

      actions.createNode(node);
    } catch (err) {
      console.log(err);
    }
  }

  // galleries

  for (const gallery of galleries) {
    try {
      const node = {
        url: gallery.image.url,
        title: gallery.title,
        galleryId: gallery.id,
        id: createNodeId(`Gallery-${gallery.title}`),
        internal: {
          type: 'Gallery',
          contentDigest: createContentDigest(gallery),
        },
      };

      const fileNode = await createRemoteFileNode({
        url: gallery.image.url, // string that points to the URL of the image
        parentNodeId: node.id, // id of the parent node of the fileNode you are going to create
        createNode: actions.createNode, // helper function in gatsby-node to generate the node
        createNodeId, // helper function in gatsby-node to generate the node id
        cache, // Gatsby's cache
        store, // Gatsby's Redux store
      });

      node.myOwnImg___NODE = fileNode.id;

      actions.createNode(node);
    } catch (err) {
      console.log(err);
    }
  }

  // for (const post of posts) {
  //   try {
  //     let fileNode = await createRemoteFileNode({
  //       url: post.image.url, // string that points to the URL of the image
  //       parentNodeId: node.id, // id of the parent node of the fileNode you are going to create
  //       createNode, // helper function in gatsby-node to generate the node
  //       createNodeId, // helper function in gatsby-node to generate the node id
  //       cache, // Gatsby's cache
  //       store, // Gatsby's Redux store
  //     });
  //
  //     console.log('done');
  //     console.log(fileNode.relativePath);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }
};

exports.onCreateNode = async ({
  node,
  actions: { createNode, deletePage, createPage, createNodeField },
  store,
  cache,
  createContentDigest,
  createNodeId,
  graphql,
}) => {
  // if (node.internal.type === 'SitePage' || node.internal.type === 'Site') {
  //   if (node.path === '/') {
  //     createPage({
  //       ...node,
  //       context: {
  //         ...node.context,
  //         cat: 'hello',
  //       },
  //     });
  //   }
  // }

  // const result = await graphql(`
  //   {
  //     swapi {
  //       posts {
  //         id
  //         title
  //         shortDesc
  //         date
  //         readTime
  //         category
  //         image {
  //           url
  //         }
  //         content {
  //           html
  //         }
  //       }
  //     }
  //   }
  // `);

  // result.data.swapi.posts.forEach((post) => {
  //   // post.id
  // });

  if (node.internal.type === 'SitePage' || node.internal.type === 'Site') {
    if (node.path === '/') {
      // const avengers = [
      //   {
      //     firstName: 'Tony',
      //     lastName: 'Stark',
      //     name: 'Iron Man',
      //   },
      //   {
      //     firstName: 'Bruce',
      //     lastName: 'Banner',
      //     name: 'Hulk',
      //   },
      //   {
      //     firstName: 'Thor',
      //     lastName: 'Odinson',
      //     name: 'Thor',
      //   },
      //   {
      //     firstName: 'Steve',
      //     lastName: 'Rogers',
      //     name: 'Captain America',
      //   },
      //   {
      //     firstName: 'Natasha',
      //     lastName: 'Romanoff',
      //     name: 'Black Widow',
      //   },
      //   {
      //     firstName: 'Clint',
      //     lastName: 'Barton',
      //     name: 'Hawkeye',
      //   },
      // ];
      // const pokemons = [
      //   { name: 'Pikachu', type: 'electric' },
      //   { name: 'Squirtle', type: 'water' },
      // ];
      //
      // pokemons.forEach((pokemon) => {
      //   const model = {
      //     name: pokemon.name,
      //     type: pokemon.type,
      //     id: createNodeId(`Pokemon-${pokemon.name}`),
      //     internal: {
      //       type: 'Pokemon',
      //       contentDigest: createContentDigest(pokemon),
      //     },
      //   };
      //
      //   createNode(model);
      //
      //   // createNode({
      //   //   ...avenger,
      //   //   id: createNodeId(avenger.name),
      //   //   internal: {
      //   //     type: `Avenger`,
      //   //     contentDigest: createContentDigest(avenger),
      //   //   },
      //   // })
      // });
      // TODO: działa !
      // const body = JSON.stringify({
      //   query: `query{
      //     posts{
      //       image{
      //         url
      //       }
      //     }
      //   }`,
      // });
      //
      // const res = await axios({
      //   method: 'post',
      //   url:
      //     'https://api-eu-central-1.graphcms.com/v2/cknbq2upgeayk01z8f9zabj0i/master',
      //   data: body,
      // });
      //
      // const { posts } = res.data.data;
      //
      // for (const post of posts) {
      //   try {
      //     let fileNode = await createRemoteFileNode({
      //       url: post.image.url, // string that points to the URL of the image
      //       parentNodeId: node.id, // id of the parent node of the fileNode you are going to create
      //       createNode, // helper function in gatsby-node to generate the node
      //       createNodeId, // helper function in gatsby-node to generate the node id
      //       cache, // Gatsby's cache
      //       store, // Gatsby's Redux store
      //     });
      //
      //     console.log('done');
      //     console.log(fileNode.relativePath);
      //   } catch (err) {
      //     console.log(err);
      //   }
      // }
      // TODO: ----------------------------------------------------------------------------
      // let fileNode = await createRemoteFileNode({
      //   url:
      //     'https://i.picsum.photos/id/425/200/300.jpg?hmac=P1vjZ6T-wo-aULK7NbbLYxIaV92_0q56o0BFWcWOdmo', // string that points to the URL of the image
      //   parentNodeId: node.id, // id of the parent node of the fileNode you are going to create
      //   createNode, // helper function in gatsby-node to generate the node
      //   createNodeId, // helper function in gatsby-node to generate the node id
      //   cache, // Gatsby's cache
      //   store, // Gatsby's Redux store
      // });
      //
      // console.log(fileNode.relativePath);
      //----------------
      // await createNodeField({
      //   node: fileNode,
      //   name: 'ProjectHello',
      //   value: 'cat',
      // });
      // console.log('NIEE!');
      // if (fileNode) {
      //   console.log('nice!');
      //   console.log(fileNode.relativePath);
      //   node.hmm___NODE = fileNode.id;
      // }
      // for (let i = 0; i < res.data.data.posts.length; i += 1) {
      //   console.log(i);
      //   createRemoteFileNode({
      //     url: res.data.data.posts[i].image.url,
      //     parentNodeId: node.id,
      //     createNodeId,
      //     cache,
      //     store,
      //   }).then((fileNode) => {
      //     if (fileNode) {
      //       console.log('nice!');
      //       console.log(fileNode.relativePath);
      //       node.hmm___NODE = fileNode.id;
      //     }
      //   });
      // }
      // res.data.data.posts.forEach(({ image }) => {
      //   createRemoteFileNode({
      //     url: image.url,
      //     parentNodeId: node.id,
      //     createNodeId,
      //     cache,
      //     store,
      //   }).then((fileNode) => {
      //     if (fileNode) {
      //       console.log('nice!');
      //       console.log(fileNode.relativePath);
      //       node.hmm___NODE = fileNode.id;
      //     }
      //   });
      // });
      //----------------------------------------------------------------------
      //   let fileNode = await createRemoteFileNode({
      //     url:
      //       'https://i.picsum.photos/id/425/200/300.jpg?hmac=P1vjZ6T-wo-aULK7NbbLYxIaV92_0q56o0BFWcWOdmo', // string that points to the URL of the image
      //     parentNodeId: node.id, // id of the parent node of the fileNode you are going to create
      //     createNode, // helper function in gatsby-node to generate the node
      //     createNodeId, // helper function in gatsby-node to generate the node id
      //     cache, // Gatsby's cache
      //     store, // Gatsby's Redux store
      //   });
      //
      //   console.log('NIEE!');
      //   if (fileNode) {
      //     console.log('nice!');
      //     console.log(fileNode.relativePath);
      //     node.hmm___NODE = fileNode.id;
      //   }
      // });
      // ----------------------------------
      // const result = await graphql(`
      //   {
      //     swapi {
      //       posts {
      //         id
      //         title
      //         shortDesc
      //         date
      //         readTime
      //         category
      //         image {
      //           url
      //         }
      //         content {
      //           html
      //         }
      //       }
      //     }
      //   }
      // `);
      //
      // result.data.swapi.posts.forEach((post) => {
      //   console.log(post.id);
      // });
      // ----------------------------------------
      // console.log('1');
      //
      // let fileNode = await createRemoteFileNode({
      //   url:
      //     'https://i.picsum.photos/id/425/200/300.jpg?hmac=P1vjZ6T-wo-aULK7NbbLYxIaV92_0q56o0BFWcWOdmo', // string that points to the URL of the image
      //   parentNodeId: node.id, // id of the parent node of the fileNode you are going to create
      //   createNode, // helper function in gatsby-node to generate the node
      //   createNodeId, // helper function in gatsby-node to generate the node id
      //   cache, // Gatsby's cache
      //   store, // Gatsby's Redux store
      // });
      //
      // console.log('NIEE!');
      // if (fileNode) {
      //   console.log('nice!');
      //   console.log(fileNode.relativePath);
      //   node.hmm___NODE = fileNode.id;
      // }
      // ----------------------------------------
      // createPage({
      //   ...node,
      //   context: {
      //     ...node.context,
      //     cat: 'hello',
      //   },
      // });
    }
  }

  // console.log(node.internal.type);
  // if (node.internal.type === 'MarkdownRemark') {
  //   console.log('1');
  //   let fileNode = await createRemoteFileNode({
  //     url:
  //       'https://i.picsum.photos/id/425/200/300.jpg?hmac=P1vjZ6T-wo-aULK7NbbLYxIaV92_0q56o0BFWcWOdmo', // string that points to the URL of the image
  //     parentNodeId: node.id, // id of the parent node of the fileNode you are going to create
  //     createNode, // helper function in gatsby-node to generate the node
  //     createNodeId, // helper function in gatsby-node to generate the node id
  //     cache, // Gatsby's cache
  //     store, // Gatsby's Redux store
  //   });
  //
  //   console.log('NIEE!');
  //   if (fileNode) {
  //     console.log('nice!');
  //     node.hmm___NODE = fileNode.id;
  //   }
  // }

  // let fileNode = await createRemoteFileNode({
  //   url:
  //     'https://i.picsum.photos/id/425/200/300.jpg?hmac=P1vjZ6T-wo-aULK7NbbLYxIaV92_0q56o0BFWcWOdmo',
  //   parentNodeId: node.id,
  //   store,
  //   cache,
  //   createNode,
  //   // createNodeId: (id) => `elementor-images-${widget.id}`,
  //   createNodeId: (id) => `elementor-images-1234`,
  // });

  // const generateImage = async function ({ fileNode, cache, reporter }) {
  //   if (!fileNode || !fileNode.absolutePath) return;
  //
  //   let fluidResult = await fluid({
  //     file: fileNode,
  //     args: {
  //       withWebp: true,
  //       maxWidth: 768,
  //       toFormat: 'WEBP',
  //       tracedSVG: false,
  //     },
  //     reporter,
  //     cache,
  //   });
  //
  //   return fluidResult;
  //
  //   // const imgOptions = {
  //   //   fluid: fluidResult,
  //   // }
  //   // const ReactImgEl = React.createElement(Img.default, imgOptions, null)
  //
  //   // return ReactDOMServer.renderToString(ReactImgEl)
  // };

  // let generatedImage = await generateImage({
  //   fileNode,
  //   cache,
  //   reporter,
  // });

  // if (
  //   node.internal.type === 'MarkdownRemark' &&
  //   node.frontmatter.featuredImgUrl !== null
  // ) {
  //   let fileNode = await createRemoteFileNode({
  //     url: node.frontmatter.featuredImgUrl, // string that points to the URL of the image
  //     parentNodeId: node.id, // id of the parent node of the fileNode you are going to create
  //     createNode, // helper function in gatsby-node to generate the node
  //     createNodeId, // helper function in gatsby-node to generate the node id
  //     cache, // Gatsby's cache
  //     store, // Gatsby's Redux store
  //   });
  //
  //   // if the file was created, attach the new node to the parent node
  //   if (fileNode) {
  //     node.featuredImg___NODE = fileNode.id;
  //   }
  // }
};
