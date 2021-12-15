# dotenv-next

Load environment variables in your scripts following the priority specification popularized by
Next.js.

This package is a thin wrapper around the internal
[@next/env](https://github.com/vercel/next.js/blob/canary/packages/next-env/README.md) package from
Next.js. It adds an little register hook which allows your to register your environment variables
from the command line.

```sh
node -r dotenv-next/register my-script.js
```

Or if you're using TypeScript with `tsm`:

```sh
tsm -r dotenv-next/register my-script.ts
```

Alternatively, you can add your require argument to the shebang line of your script file:

```ts
#!/usr/bin/env node -r dotenv-next/register

const main = async () => {
  await new Promise((resolve) =>
    setTimeout(() => {
      console.log(process.env.ENV_VAR)
    }, 1000),
  )

  console.log()
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
