# React Kata

## Introduction 😀

This repository contains my submission for the takehome project from
[Lithia & Driveway](https://www.lithia.com/lithia-and-driveway.htm).

### A Note On Difficulties With Dependencies 🍱

Due to issues with the original repository's use of NodeJS version 14.15.1, and
also the conflicting version number of 17.0.1 in the original `.nvmrc`, I ran
into dependency and webpack issues on both versions that would have required
what I estimate to be multiple hours of debugging due to `react-scripts` using
`.steampath` in one of its dependencies that conflicts with the game platform
Steam on my local machine (A variant of Arch Linux).

Thusly I opted to utilize a more familiar approach to my workflow, that of using
the more modern [Vite](https://vite.dev/guide/). I have therefore provided an
updated `.nvmrc`, which instructs `nvm` to utilize NodeJS version 22.13.1. I was
able to successfully complete my submission using this version number and
utilizing Vite instead of create-react-app/webpack.

### Installation and Getting Started 🔧

As mentioned above, be sure you have NodeJS version 22.13.1 prior to
installation, this should also come with the necessary `npm` package manager
needed to install the dependencies.

First clone this repository in a directory of your choosing using `git` and `cd`
into the new directory:

```sh
git clone https://github.com/tomit4/react-kata && cd react-kata
```

Once within the `react-kata` directory, go ahead and install the dependencies
using `npm`:

```sh
npm install
```

After installation of the dependencies is complete, go ahead and open up two
terminals, each should have their shells navigated into the `react-kata`
directory. From within here, in one terminal, you'll run the frontend server,
and the other will be used to run the backend server.

In one terminal, run the frontend server using the `start` script:

```sh
npm run start
```

And in the other terminal, run the backend server using the `server` script:

```sh
npm run server
```

Once done, navigate to <b>localhost:3000</b> in your browser and you should see
the frontend to the react-kata presented to you.

### A Note On Testing 🧪

Although during my time completing this test, I was unable to get to robust unit
testing in a timely manner, I did set up [Vitest](https://vitest.dev/guide/)
along with
[React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
in order to best simulate the original tests that were included in the original
version of the project. You can also run tests (all passing by default) by
running:

```sh
npm run test
```

### Original Project 📝

[Here](https://github.com/driveway-engineering/react-kata) is the original
README from Lithia that gives the project's instructions.

### Thank You! 🙏

Thank you for the opportunity to showcase my skills and I look forward to our
interview!
