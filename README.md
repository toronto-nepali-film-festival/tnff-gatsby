## Toronto Nepali Film Festival

![worflow status](https://github.com/toronto-nepali-film-festival/tnff-gatsby/actions/workflows/main.yml/badge.svg)

Toronto Nepali Film Festival (TNFF) is a not for profit organization based in Toronto, Ontario. Partnering with organizations in Canada, Nepal and beyond, TNFF brings a festival of extraordinary Nepali films in Toronto and other cities. By featuring films of South Asia, specifically Nepal, TNFF intends to add a fresh dimension to the multi-layered diasporic narratives of Canada.

Welcome this repository holds all the source code for [tnff.ca](https://tnff.ca), the site is built using [gatsby](https://www.gatsbyjs.com/) and served as a static site. Gatsby is used to generate the static site.
The frontend framework is react with a hasura graphql for the backend which sits infront of a postgresql database.

### Getting started

After a clone of this repo, run this on the root level of this project:

```shell
# export this env variable on your terminal, contact a maintainer for the graphql endpoint
export HASURA_GRAPHQL_URL="GET_THIS_URL_FROM_A_MAINTAINER"

# install npm packages
npm install

# start the dev server, site will run at localhost:8000
npm run start
```

### Testing

We use [cypress](https://cyrpress.io) for end to end testing, see the tests under `cypress` directory for all the tests.
To run cypress tests locally:

```shell
# first build and serve the site
npm run build
npm run serve

# in a seperate terminal window
npm run cy:run
```

### Continous Deployment

We use github actions for our CI/CD workflows are triggered on each push, when a pull request is opened the action defined in `.github/workflows/main.yml` is triggered. Pull Requests can only be merged if both jobs pass.
The jobs are:

- eslint: which runs code analysis, any code lint error flagged will fail the workflow
- end-to-end tests: this runs the end to end tests defined in `cypress` and results are integrated in the Pull Requests

The static site is hosted using on CloudFlare Pages, all pull requests workflows are provided with a cloudflare page link for that pull request instance.
Once merged into the `main` branch a new version is auto deployed to CloudFlare Pages production page.
