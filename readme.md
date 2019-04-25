[![Netlify Status](https://api.netlify.com/api/v1/badges/0bd79c4e-c5d1-42b4-a33e-2a5630389064/deploy-status)](https://app.netlify.com/sites/denver-devs/deploys)

# Denver Devs Website - denverdevs.org

Here's where the magic happens. This is the denverdevs.org website, which is basically a bunch of words wrapped around one critical feature: the automatic Slack invite component. We're using VuePress, a touch of AWS Lambda magic, GitHub pages for hosting, and Travis CI for keeping things looking good.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

You'll need _some_ familiarity with HTML/CSS/JavaScript to get to working with this. Knowing a bit of Vue.js helps too.

Outside of knowledge you'll need Node, Yarn & VuePress to run this - so if you don't have those set up on your machine check out [this page](https://changelog.com/posts/install-node-js-with-homebrew-on-os-x).

Get Yarn [here](https://yarnpkg.com/lang/en/docs/install/#mac-stable)

Get VuePress [here](https://vuepress.vuejs.org/guide/getting-started.html#global-installation)

### Installing

Clone this directory into the area you want:

```bash
git clone https://github.com/Denver-Devs/denverdevs.org
```

Hop into the directory it's at:

```bash
cd denverdevs.org
```

Get the dependancies / node_modules installed:

```bash
Yarn
```

Once that's done, and it could take just a bit, you'll want to take a look at the build

``` bash
yarn docs:dev
```

This will set up a little server for you, watch the repo, and let you update code without refreshing.


## Deployment

Deployment is handled via Travis-CI and Github Pages. After you've worked up your changes / feature branch submit a PR, once it's all good we'll merge into the `master` branch and assuming everything passes  your work will automagically deploy soon.

## Built With

* [Vue.js](http://www.dropwizard.io/1.0.2/docs/) - Vue.js, so hot right now.
* [VuePress](https://vuepress.vuejs.org/) - Static Site Generator for the site.
* [AWS Lambda](https://aws.amazon.com/lambda/) - Server-less is our friend.
* [Netlify](http://netlify.com) - Hosting and CI.

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Authors

* **Dan Hannigan** - *Initial work* - [danhannigan](https://github.com/danhannigan)

See also the list of [contributors](https://github.com/denver-devs/denverdevs.org/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details. You're welcome to use our code here and feel free to reach out with any questions. Please don't take or use our logo / identity though without asking us.

## Acknowledgments

* Shout out to the Vue.js team and VuePress. Got us up and running in no time.
* Appreciate the free tiers open on so many great tools out there - they're a lifesaver when it comes to non-profit community projects.
* The admins & community of denverdevs.org, thanks for being here.
* Also thanks to PurpleDoor for the rad [readme template](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2).
