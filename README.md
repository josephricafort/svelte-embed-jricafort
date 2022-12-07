# Svelte embed

This is a basic template project for a Svelte app that can be embedded in another page using an iframe and the `iframe-resizer` library.

The iframe creation and init code is wrapped to allow embedding using a single `<script>` tag.

## Getting started

```bash
npm install
npm run dev
```

## Embedding

### `<script>` tag / dynamic embed sizing

To embed this project in another page, deploy the project and add the following script tag to the page you want to embed the app in:

```html
<script async src="https://<your_deployed_domain>/embed.js"></script>
```

For example:

```html
<script async src="https://svelte-embed.vercel.app/embed.js"></script>
```

### `<iframe>` tag / fixed embed sizing

In cases where `<script>` tags are not allowed it is not possible to resize the iframe to fit its content, but you can still embed using an `<iframe>` tag directly, fixing the dimensions in the `style` attribute. For example:

```html
<iframe src="https://svelte-embed.vercel.app/" style="border: none; width: 500px; height: 400px"></iframe>
```

## Deployment

This project should deploy to Vercel as-is, with no additional configuration, but you can also deploy to any other static hosting provider.

## Notes

This uses an iframe resizer to allow the embedded app to resize the iframe to fit its content. embed.js does the following:

1. Creates an iframe with a unique id
2. Sets default styles: `border: none; width: 100%;`
3. Sets the iframe `src` (defaults to `/`, or the value of `data-src` if it exists, relative to the domain the script is hosted on)
4. Adds the iframe to the page before the script tag
5. Adds an event listener to the iframe to initialize `iframe-resizer` library on `load`

From here, `iframe-resizer` will handle resizing the height of the iframe in the parent page to fit the content of the embed.