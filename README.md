# dotenv-next

Load environment variables in your scripts following the priority specification popularized by
Next.js.

This package is a thin wrapper around the internal
[@next/env](https://github.com/vercel/next.js/blob/canary/packages/next-env/README.md) package from
Next.js. It adds an little register hook which allows your to register your environment variables at
the top of script files.

```ts
#!/usr/bin/env node

import 'dotenv-next/register'

const main = async () => {
  await new Promise((resolve) =>
    setTimeout(() => {
      console.log(process.env.NODE_ENV)
    }, 1000),
  )
}

main()
  .catch((error) => {
    console.log(error)
    process.exit(1)
  })
  .finally(() => {
    process.exit(0)
  })
```
