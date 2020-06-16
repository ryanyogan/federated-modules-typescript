# Webpack 5 Federated Modules Typescript Example

## Objective

Type-safe setup, sharing functionality between apps without having to duplicate their types.

## Setup

3 React applications

- Shell (Host)
  - Provides the Nav, styling and router
  - Lazy loads the other apps
- Home (Remote/Host)
- Cart (Remote/Host)
