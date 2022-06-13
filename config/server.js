module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  admin: {
    url: "/",
    serverAdminPanel: false,
    auth: {
      secret: env("ADMIN_JWT_SECRET", "ead88bace991e6a4018565d8b21ab92f"),
    },
  },
  url: "https://backend-photography.herokuapp.com/",
});
