# Portfolio

My personal portfolio website made with Svelte and Tailwind.

```bash
# git clone
git clone git@github.com/Shaamallow/portfolio.git
cd portfolio
npm install
```

### The Stack

- [Svelte](https://svelte.dev/)
- [Tailwind](https://tailwindcss.com/)
- [DaisyUI](https://daisyui.com/)
- [Catppuccin-Tailwindcss](https://github.com/catppuccin/tailwindcss)
- [MDsveX](https://github.com/pngwn/MDsveX)
- [Tailwind/Typography](https://tailwindcss.com/docs/typography-plugin)

### Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

### Building

To deploy on server, target is the usual dockerfile for a node server and the adapter is `@sveltejs/adapter-node`.
Start by installing the adapter:

```bash
npm i -D @sveltejs/adapter-node
```

Then change the adapter in `svelte.config.js` to `@sveltejs/adapter-node`
And finally use the dockerfile and the docker-compose file in the repository.
They are configured to run with the traefik reverse proxy.
