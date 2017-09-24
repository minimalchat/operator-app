# Minimal Chat operator application
Cross-platform operator application for Minimal Chat

![operator-screenshot-0](https://user-images.githubusercontent.com/563301/29819738-f25ad906-8c8f-11e7-96c3-785f1e0f95b8.png)


## Getting Setup

**Configuration**

- To get the operator running you'll need to also have the minimal chat [daemon](https://github.com/minimalchat/daemon) running.
- When you run the operator for the first time it will create a `config.json` file at the root of the application.
- NOTE: if you are running the packages application, rather than having downloaded the source code, you will likely need to dive into the packages application to find the `config.json` file. For example, on Mac, you may need to right click > show package contents... and navigate to find the config.json file. We hope to streamline this more in the future.
- Open `config.json` and edit the key `"apiServer"` with the port that you are running the _Minimal Daemon_ on.
