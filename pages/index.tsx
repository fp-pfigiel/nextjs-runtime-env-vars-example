import type { NextPage } from "next"
import { useContext } from "react"
import { RuntimeConfigContext } from "../src/runtime-config-provider"

const Home: NextPage = () => {
  const {myRuntimeEnvVar} = useContext(RuntimeConfigContext);

  return <div>Runtime environment variable value: {myRuntimeEnvVar}</div>;
}

export default Home
