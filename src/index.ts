import env from '@next/env'

export const init = async () => {
  env.loadEnvConfig(process.cwd())
}
