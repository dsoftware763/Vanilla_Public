const path = require('path')

module.exports = [
  // HOME
  {
    path: '/',
    component: path.resolve('src/pages/index.js')
  },
  // GET STARTED
  {
    path: '/richiedi-un-preventivo',
    component: path.resolve('src/pages/get-started.js')
  },
  {
    path: '/get-started',
    component: path.resolve('src/pages/get-started.js')
  },
  {
    path: '/part-d-ici',
    component: path.resolve('src/pages/get-started.js')
  },
  // ABOUT
  {
    path: '/chi-siamo',
    component: path.resolve('src/pages/about.js')
  },
  {
    path: '/about',
    component: path.resolve('src/pages/about.js')
  },
  {
    path: '/a-propos',
    component: path.resolve('src/pages/about.js')
  },
  // WEB DEV
  {
    path: '/realizzazione-siti-web',
    component: path.resolve('src/pages/web-development.js')
  },
  {
    path: '/web-development',
    component: path.resolve('src/pages/web-development.js')
  },
  {
    path: '/web-development',
    component: path.resolve('src/pages/web-development.js')
  },
  // SOCIAL MEDIA
  {
    path: '/social-media-marketing',
    component: path.resolve('src/pages/social-media.js')
  },
  // WEB MARKETING
  {
    path: '/web-marketing',
    component: path.resolve('src/pages/social-media.js')
  },
  // CONTACT
  {
    path: '/contatti',
    component: path.resolve('src/pages/contact.js')
  },
  {
    path: '/contact',
    component: path.resolve('src/pages/contact.js')
  },
  {
    path: '/contact',
    component: path.resolve('src/pages/contact.js')
  },
  // POLICY
  {
    path: '/policy',
    component: path.resolve('src/pages/privacyPolicy.js')
  },

  // blogs
  {
    path: '/blogs',
    component: path.resolve('src/pages/blogs.js')
  },
  // {
  //   path: '/blogpage',
  //   component: path.resolve('src/pages/blogPage.js')
  // },
  {
    path: '/page/:slug',
    component: path.resolve('src/templates/blog-post.js')
  }

]
