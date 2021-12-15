import env from '@next/env'

export const loadEnv = async () => {
  env.loadEnvConfig(process.cwd())
}
