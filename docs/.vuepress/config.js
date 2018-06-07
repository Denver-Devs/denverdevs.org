module.exports = {
  title: 'Denver Devs',
  description: 'Just playing around', 
  themeConfig: {
    search: false,
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
      }
    ],
    sidebar: {
      '/about': [
        '/about',     /* /foo/ */
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