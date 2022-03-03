[![Netlify Status](https://api.netlify.com/api/v1/badges/0bd79c4e-c5d1-42b4-a33e-2a5630389064/deploy-status)](https://app.netlify.com/sites/denver-devs/deploys)

# Denver Devs Website - denverdevs.org

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on deploying the project.

### Prerequisites

You'll need _some_ familiarity with HTML/CSS/JavaScript to get to work within this repo. But, of course, knowing a bit of React helps too.

Outside of knowledge, you'll need Node & Yarn to run this - so if you don't have those set up on your machine, we recommend following the instructions found on this page: <https://yarnpkg.com/getting-started/install>. FYI, we're using Node 16.

### Installing

Clone this directory into the area you want:

```bash
git clone https://github.com/Denver-Devs/denverdevs.org
```

Hop into the directory it's at:

```bash
cd denverdevs.org
```

Get the dependencies / node_modules installed:

```bash
yarn
```

Once that's done, and it could take just a bit, you'll want to take a look at the build.

```bash
yarn dev
```

Next.js will spin up a server for you, watch the repo, and let you update code without refreshing. You should be able to see this at localhost:3000.

> Note! You may also need environment variables for Supabase access. If so, reach out to Dan directly.

## Deployment

We deploy through Netlify. After you've worked up your changes/feature branch, submit a PR. From there, Netlify can create a deploy preview for us to check things out. Once it's approved, we'll merge it into main.

## Built With

- [Next.js](http://nextjs.org)
- [Chakra UI](https://chakra-ui.com)
- [Supabase](http://supabase.com)
- [Netlify](http://netlify.com) - Hosting and CI.

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests to us.

## Authors

- **Dan Hannigan** - _Initial work_ - [danhannigan](https://github.com/danhannigan)

See the list of [contributors](https://github.com/denver-devs/denverdevs.org/contributors) who participated in this project.

## License

This project is under the MIT License - see the [LICENSE.md](LICENSE.md) file for details. You're welcome to use our code here, and feel free to reach out with any questions. Please don't take or use our logo/identity without asking us.

## Acknowledgments

- Appreciate the free tiers open on so many great tools out there - they're a lifesaver when it comes to non-profit community projects.
- The admins & community of denverdevs.org, thanks for being here.
- Also, thanks to PurpleDoor for the rad [readme template](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2).
