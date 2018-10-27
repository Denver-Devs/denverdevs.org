---
prev: false
next: false
---

# Contributing

Our website is powered by Vue and VuePress - which opens up a couple of different routes for contribution. One is contributing in the form of pure content, the other is contributing to the Vue components themselves. We'll outline those two processes below.

## Updating or adding new content

VuePress makes updating and adding new content fairly straightfoward. If you're looking to improve a page, each page has a built in link that takes you right to the MD file editor in GitHub. If you want to create a new page that gets a bit more complex but we'll outline that process down below.

### Updating content

First, make sure you have a GitHub account. If you dont and would like to contribute please reach out to Dan via email or slack.

- Visit a page on the website. Let's go with our ["Welcome to Denver" Page](https://denverdevs.org/resources/welcome-to-denver/)

- Scroll all the way down the page, you should see a "Help us Improve This Page" link. Click that.
- You may need to sign in to GitHub here.
- You should see GitHubs built in file editor. We use Markdown for all of our pages - if you're unfamiliar with Markdown syntax check out [this handy guide](https://www.google.com/search?client=safari&rls=en&q=github+markdown&ie=UTF-8&oe=UTF-8)
- Make your edits. Have fun here! Add copy, emojis, etc. We'll review it.
- Scroll down to the "Commit changes" section - add a good title and description, and then select "Create a new branch for this commit and start a pull request."
- Fire off your pull request, we'll review it and work with you if any updates need to be made.
- Thanks for contributing!

### Adding a new page

If you'd like to add a new page we'll need to account for a few things first. Are you adding a new top level page? Will this go within a specific sub section? If a new page sounds viable we advise you chat it out in our [#topic-community](https://denver-devs.slack.com/app_redirect?channel=topic-community) channel in the Denver Devs Slack.

## Updating or adding Vue components

VuePress handles components just like a normal Vue installation - except it bundles them in a different place. To find our components you'll need to visit `denverdevs.org/docs/.vuepress/components/` - that's where you'll find them.

We suggest pulling this repo down and working on it locally.
