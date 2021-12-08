import { createContext, ReactNode, useEffect, useState } from "react";
import { RuntimeConfig } from "./types";
import { getCachedRuntimeConfig, setCachedRuntimeConfig } from "./utils";

export interface Props {
  children: ReactNode;
}

export const RuntimeConfigContext = createContext<RuntimeConfig>({});

const RuntimeConfigProvider = ({ children }: Props) => {
  const [runtimeConfig, setRuntimeConfig] = useState(getCachedRuntimeConfig());

  useEffect(() => {
    if (!!global.window) {
      const execute = async () => {
        try {
          const response = await fetch(
            `${window.location.origin}/api/runtime-config`
          );

          if (response.status === 200) {
            const configJson = await response.json();

            if (
              !runtimeConfig ||
              JSON.stringify(configJson) !== JSON.stringify(runtimeConfig)
            ) {
              setRuntimeConfig(configJson);
              setCachedRuntimeConfig(configJson);
            }
          }
        } catch {}
      };

      execute();
    }
  }, [runtimeConfig]);

  return (
    <RuntimeConfigContext.Provider value={runtimeConfig ?? {}}>
      {children}
    </RuntimeConfigContext.Provider>
  );
};

export default RuntimeConfigProvider;
