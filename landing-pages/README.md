# App Marketplace landing pages

Campaign landing pages for the Vodafone Cloud for SME App Marketplace project. Statically generated using [Metalsmith](http://www.metalsmith.io/).

## Installation

Copy *.env.example* as *.env* and set local values for variables in this file ([documented below](#environment-options)):

    cp .env.example .env
    eval $EDITOR .env

If needed, any values defined in an *.env.development* file will also be read and merged when running in `development` mode.

## Development

Start Webpack dev server:

    yarn run dev

Build site and assets for production to `dist/`:

    yarn run build

## Environment options

These should be set in `.env` or `.env.<mode>` and will modify how the site will behave when built.

| Keys | Description |
| - | - |
| `BASE_URL` | The base URL where the site will be hosted, used for absolute references to local pages and assets. |
| `ASSET_URL` | The base URL for referring to site assets. This may be the same as `BASE_URL`, at a subpath, or on an external domain or CDN. |
| `MARKETPLACE_BASE_URL` | The base site URL for the AppMarket instance. |
| `USE_LOCAL_JOURNEY` | Set whether to use the simplified order journey within the landing page site instead of redirecting to the AppDirect marketplace (UK early launch). |
| `TEALIUM_ACCOUNT` `TEALIUM_PROFILE` `TEALIUM_ENV` | Project identifiers for Tealium tag management (analytics). |
| `ANALYTICS_*` | Various values for populating analytics data. |
