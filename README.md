# Astro Starter Kit: Minimal

```sh
npm create astro@latest -- --template minimal
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## ⚙️ Environment Variables

This project uses environment variables for API configuration. Create a `.env` file in the root directory with the following variables:

```env
PUBLIC_API_BASE_URL=https://test.amrita-fashions.com/landing
PUBLIC_API_KEY=
PUBLIC_ADMIN_EMAIL=
```

You can also copy the `.env.example` file to `.env` and modify as needed.

All API calls in the project use the `PUBLIC_API_BASE_URL` environment variable. There are no fallback URLs, so this variable must be set for the application to work correctly.

For client-side JavaScript files, you may need to expose the environment variable globally. Add this to your HTML layout:

```html
<script>
  window.env = {
    PUBLIC_API_BASE_URL: import.meta.env.PUBLIC_API_BASE_URL
  };
</script>
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
"# astro-landing-page-final"