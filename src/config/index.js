const appTitle = 'CommonTown App Starter'
const releaseDate='2021-08-28'
const version='v1.00'
const copyright = `Copyright © 2021. CommonTown Pte Ltd. All rights reserved. App ${version} ${releaseDate}`

const portal = {
}

// sort out domain and account
const isDev = (process.env.NODE_ENV === 'development');
let siteUrl;

if (isDev) {
  // development
  siteUrl = `https://readin.swt4dev.url3.net`;
}
else {
  // production
  const { origin } = document.location;
  siteUrl = origin;
}

const apiVersion = 'v4.03';
// const apiPrefix = `${siteUrl}/_swt/${apiVersion}`;

const config = {
  app:{
    title:appTitle,
    version,
    releaseDate,
    copyright,
  },

  siteUrl,
  isDev,
  portal,

  api: {
    apiVersion,
    someone: {
      index: `https://randomuser.me/api/`,
    },
  },

}

export { config }
// module.exports = config;
