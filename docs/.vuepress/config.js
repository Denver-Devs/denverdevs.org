module.exports = {
  title: 'Denver Devs',
  description: 'We are a Denver, Colorado based software engineer community focused on helping each other find jobs, solve problems, make friends, and so much more. We’re on Slack and Discourse.', 
  head: [
    ['link', { rel: 'icon', href: '/icon.png' }]
  ],
  themeConfig: {
    search: false,
    repo: 'Denver-Devs/denverdevs.org',
    repoLabel: 'Github',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: 'Help us improve this page!',
    lastUpdated: 'Last Updated',
    serviceWorker: true,
    ga: 'UA-30177848-7',
    // logo: '/your-logo.png',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about' },
      {
        text: 'Rules & Resources',
        items: [
          { text: 'Rules & Guidelines', items: [
            { text: 'Code of Conduct', link: '/resources/code-of-conduct' },
            { text: 'Rules', link: '/resources/rules' },
            { text: 'Recruiter Guidelines', link: '/resources/recruiter-guidelines' },
            { text: 'Gig Formatting', link: '/resources/gig-post-formatting' },
          ] },
          {
            text: 'Resources', items: [
              { text: 'Welcome To Denver', link: '/resources/welcome-to-denver' },
              { text: 'Denver Devs Emojis', link: 'https://github.com/Denver-Devs/emojis' },
            ]
          }
        ]
      },
      {
        text: 'Sign In',
        items: [
          { text: 'Slack', link: 'https://denver-devs.slack.com' },
          { text: 'Forum', link: 'https://discourse.denverdevs.org' },
        ]
      },
    ],
    sidebar: {
      '/about': [
        '/about',
      ],
      
      '/resources/': [
        {
          title: 'Rules & Guidelines',
          collapsable: true,
          children: [
            'code-of-conduct.md',
            'rules.md',
            'recruiter-guidelines.md',
            'gig-post-formatting.md',
          ]
        },
        {
          title: 'Resources',
          collapsable: true,
          children: [
            'welcome-to-denver.md',
            
          ]
        },
      ]
    }
  }
};