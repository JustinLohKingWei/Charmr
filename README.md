# Charmr Dating App, Match with somebody now!

Meet somebody new with the click of a button!

The application is written as a react application and uses the Styled Components library, and performs all functionalities as a frontend application only. That being said , there is no external backend architecture involved .

## Features

This application features a google login system, and can currently support a random matching of messages with other subscribed users with chat,message and user tracking.

## Included Packages, Libraries, Configurations

- [X] Firebase / React-Firebase
- [X] Styled-components
- [X] TypeScript Configuration

## Installation Instructions

### Prerequisites

- [ ] Node package manager (Node js)

- [ ] yarn

### Spinning up the application on localhost

1. Install all prerequisites above
2. Clone or download the project repository
3. Spin up a terminal in the project directory. This would be where the package.json file is located.
4. Run `npm install` or `yarn install` to install all required node package modules.
5. Spin up the application using the `yarn start`
6. View the application at localhost:3000 in a browser of choice

### Remaining tasks

1. While initial styling is done, further work is needed on the UI login page and chat header
2. An upcoming tracking of user preferences such as hobbies, and chat partner preferences are also to be included
3. Integrate a Django Backend.

### Bugs

| Bug  | Notes      | Status |
| ---- | ---------- | ------ |
| Firebase requests generate too much reads for a daily quota | This should be able to fixed by increasing local storage data in order to stop making too many requests | ongoing |
