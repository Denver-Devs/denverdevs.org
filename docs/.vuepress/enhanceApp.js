export default ({ router }) => {
  router.addRoutes([
    { path: '/about.html', redirect: '/about/' },
    { path: '/resources/code-of-conduct.html', redirect: '/resources/code-of-conduct/' },
    { path: '/resources/rules.html', redirect: '/resources/rules/' },
    { path: '/resources/recruiter-guidelines.html', redirect: '/resources/recruiter-guidelines/' },
    { path: '/resources/gig-post-formatting.html', redirect: '/resources/gig-post-formatting/' },
    { path: '/resources/welcome-to-denver.html', redirect: '/resources/welcome-to-denver/' },
  ])
}
