const siteMetadata = {
  title: "Tung Duong's Blog",
  author: 'Tung Duong',
  headerTitle: 'Tung Duong - My life & coding journey ',
  description: 'Blog cá nhân của mình nơi mình chia sẻ về coding & my life',
  snippets: 'Reuseable code snippets collected by Tung Duong',
  language: 'vi',
  theme: 'system', // system, dark or light
  siteUrl: '',
  siteRepo: '',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/avatar.png',
  socialBanner: '',
  email: 'laptung051@gmail.com',
  github: 'https://github.com/Barry0501',
  twitter: '',
  linkedin: 'https://www.linkedin.com/in/tung-duong-b495ba169/',
  website: '',
  locale: 'vi-VN',
  analytics: {
    plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
    simpleAnalytics: false, // true or false
    umamiWebsiteId: '', // e.g. 123e4567-e89b-12d3-a456-426614174000
    googleAnalyticsId: '', // e.g. UA-000000-2 or G-XXXXXXX
  },
  newsletter: {
    provider: 'emailOctopus',
  },
  comment: {
    provider: 'giscus',
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname',
      reactions: '1',
      metadata: '0',
      // theme example: light, dark, dark_dimmed, dark_high_contrast
      // transparent_dark, preferred_color_scheme, custom
      theme: 'light',
      inputPosition: 'bottom',
      lang: 'en',
      darkTheme: 'dark',
      themeURL: '',
    },
  },
  socialAccount: {
    twitter: '',
  },
}

module.exports = siteMetadata
