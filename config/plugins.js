module.exports = ({ env }) => ({
  // enable a plugin that doesn't require any configuration
  i18n: true,
  graphql: {
    enabled: true,
    config: {
      playgroundAlways: true,
      defaultLimit: 999,
      maxLimit: 999,
      endpoint: "/graphql",
      shadowCRUD: true,
      introspection: true,
      apolloServer: {
        tracing: false,
      },
    },
  },
});
