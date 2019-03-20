# kevinknoll.com

Built with [Eleventy](https://www.11ty.io/) and hosted on [Netlify](https://www.netlify.com)

## Prerequisites
Install Eleventy locally via package.json

```
$ npm install
```

## How to Build
Run Eleventy build, using the `web` directory as the input. This will create the site in the `_site` directory.

```
$ npx @11ty/eleventy --input=web
```

## Hosting
The entire `_site` directory can be deployed as-is. See `netlify.toml`
