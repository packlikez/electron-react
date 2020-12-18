import devConfig from "./config.develop";
import prodConfig from "./config.develop";

function getConfig() {
  const { NODE_ENV = "develop" } = process.env;

  if (NODE_ENV === "production") return prodConfig;
  return devConfig;
}

export default getConfig();
