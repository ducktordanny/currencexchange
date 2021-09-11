# Currencexchange

> A simple single page application to exchange currencies between different valuts.

## Installation

### Requirements

-   git
-   yarn
-   @angular/cli

### Clone repository

```sh
git clone git@github.com:ducktordanny/currencexchange.git
```

### Setup

```sh
yarn
```

#### Get your API key:

Go to the following [link](https://manage.exchangeratesapi.io/signup/free) and sign up with your information to get your free API Key.

#### If you have bash installed:

```sh
yarn setup
```

#### Setup manually:

Create the file named `config.ts` from the root folder:

```sh
touch src/app/config.ts
```

Insert the following code and replace SECRET with your own API key:

```ts
export const apiKey = 'SECRET';
```

### Start server

```sh
ng serve
```

## Usage

After setting up everything and starting the server you can go to http://localhost:4200. You can choose your currencies and insert the amount what you want to be exchanged and if there was no error then a result box will show up. It'll include the exchanged amount, the rates and the date.
