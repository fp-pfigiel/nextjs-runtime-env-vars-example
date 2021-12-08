import { RuntimeConfig } from "./types";

export const runtimeConfigStorageName = "runtime-config";

export const getCachedRuntimeConfig = (): RuntimeConfig | undefined => {
  if (!global.localStorage) {
    return undefined;
  }

  const config = localStorage.getItem(runtimeConfigStorageName);

  if (config) {
    return JSON.parse(config);
  }
};

export const setCachedRuntimeConfig = (config: RuntimeConfig) =>
  !!global.localStorage &&
  localStorage.setItem(runtimeConfigStorageName, JSON.stringify(config));
