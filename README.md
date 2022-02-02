# Basic Remix Starter Kit

A boilerplate for Remix with:

- **Typescript**
- [**Chakra-Ui**](https://chakra-ui.com/) for styling
- [**Inter**](https://fonts.google.com/specimen/Inter?query=inter) as Global font
- Basic [**SEO**](https://github.com/chaance/remix-seo) pre-configured

## Quick start

### Deployment

After having run the `create-remix` ommand and selected "Vercel" as a deployment target, you only need to [import your Git repository](https://vercel.com/new) into Vercel, and it will be deployed.

If you'd like to avoid using a Git repository, you can also deploy the directory by running [Vercel CLI](https://vercel.com/cli):

```sh
pnpm i -g vercel
vercel
```

It is generally recommended to use a Git repository, because future commits will then automatically be deployed by Vercel, through its [Git Integration](https://vercel.com/docs/concepts/git).

## Development

To run your Remix app locally, make sure your project's local dependencies are installed:

```sh
pnpm i
```

Afterwards, start the Remix development server like so:

```sh
pnpm dev
```

Open up [http://localhost:3000](http://localhost:3000) and you should be ready to go!

If you're used to using the `vercel dev` command provided by [Vercel CLI](https://vercel.com/cli) instead, you can also use that, but it's not needed.
