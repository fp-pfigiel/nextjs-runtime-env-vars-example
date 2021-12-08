/** @type {import("next").NextConfig} */
module.exports = {
  reactStrictMode: true,
  serverRuntimeConfig: {
    myRuntimeEnvVar: process.env.MY_RUNTIME_ENV_VAR,
  },
}
