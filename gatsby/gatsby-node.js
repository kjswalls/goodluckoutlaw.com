module.exports = {
    createPages: ({ actions }) => {
      const { createRedirect } = actions
      createRedirect({
        fromPath: "/",
        toPath: "/links",
      })
    },
  }