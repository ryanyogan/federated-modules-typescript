# A Webpack 5 Federation Boilerplate

See the accompanying article at: [https://federated-libraries.now.sh/get-started](https://federated-libraries.now.sh/get-started)

- **A host**: a Webpack build that is initialized first during a page load (when the onLoad event is triggered)
- **A remote**: another Webpack build, where part of it is being consumed by a “host”
- **Bidirectional-hosts**: when a bundle or Webpack build can work as a host or as a remote. Either consuming other applications or being consumed by others — at runtime
