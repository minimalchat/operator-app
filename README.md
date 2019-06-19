# Minimal Chat operator application

---

Minimal Chat is an open source live chat system providing live one on one messaging to a website visitor and an operator.

Minimal Chat is:
-   **minimal**: simple, lightweight, accessible
-   **extensible**: modular, pluggable, hookable, composable

We're glad you're interested in contributing, feel free to create an [issue](https://github.com/minimalchat/operator-app/issues/new) or pick one up but first check out our [contributing doc](https://github.com/minimalchat/operator-app/blob/master/CONTRIBUTING.md) and [code of conduct](https://github.com/minimalchat/operator-app/blob/master/CODE_OF_CONDUCT.md). Check out our [design documentation](https://github.com/minimalchat/client/wiki/Design-Documentation) as well.

Screenshot
---
![operator-screenshot-1](https://user-images.githubusercontent.com/563301/32144257-84f8533e-bc8c-11e7-8875-48cb49c92a78.png)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fminimalchat%2Foperator-app.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fminimalchat%2Foperator-app?ref=badge_shield)

---

### Development

Developing for the operator application is fairly straightforward with a few caveats. All of the Minimal Chat repositories are run through `make`. To get the application running:

1. Clone the repository
2. `make dependencies`
3. `make run`

To have the operator communicate with your local [daemon]() requires some confirguration. The operator application keeps a config.json file that it creates on run if it does not exist. **It is recommended to let the application run once in disconnected mode rather than creating your own `config.json`**.

1. Once you've run the application once, find the `config.json` file.
2. Open `config.json`, edit the `"apiServer"`, set this to the IP and port that the daemon is running on. (e.g. `http://localhost:8000`, the default setting)


## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fminimalchat%2Foperator-app.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fminimalchat%2Foperator-app?ref=badge_large)