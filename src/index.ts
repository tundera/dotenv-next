import env from '@next/env'

export const init = () => {
  env.loadEnvConfig(process.cwd())
}
