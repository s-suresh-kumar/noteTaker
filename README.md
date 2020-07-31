[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# Note Taker

[![Thumbnail](assets/images/noteTaker-thumbnail.jpg)](https://agile-everglades-01445.herokuapp.com/)

[noteTaker walkthru video](https://drive.google.com/drive/u/1/folders/1zVc1CtDZp2PpXwULSME2ZVMwC6jKzKpp)

#### App In Action

![App in action](assets/images/noteTaker-walkthru.gif)

## Table of Contents

- [Description](#Description)

- [Installation](#Installation)

- [Instructions](#Instructions)

- [License](#License)

- [Contributing](#Contributing)

- [Tests](#Tests)

- [Questions](#Questions)

## Description

This is a fullstack app that uses html, css, bootstrap, nodeJS and express.It implements the following html routes GET '/' for the home page and GET '/notes/' for notes.html and GET '\*' for home page (index.html), It also implements the following api routes. GET '/api/notes' for getting saved notes in json format. GET '/api/notes/:id/ for getting a particular saved note. POST `/api/notes` to save a new note. DELETE `/api/notes/:id` to delete a particular note. The application does not use a db. Instead it uses a db.json file to save all the notes. Whenever a new note needs to be saved, a unique new id is created and the note title and note text are stored against the id in json format in the db.json file. On GETs information is read from the file and returned and rendered. On DELETEs, the note is deleted from the db.json file and page is re-rendered.

## Installation

You need express package installed for this app to run. So the steps are :

1. Clone this [repository](https://github.com/s-suresh-kumar/noteTaker)
2. Issue `npm i` at your local repository root, so that all dependencies (express package) is installed.
3. Then you can use loop back address on you to exercise this app. For that launch the app at the root of the repository 'nodemon server.js'. Then in the browser, go to http://localhost:3001/ and navigate from there to see the app in action.
4. You may also deploy it in deployment platforms such as Heroku and then access the app using the url provided by the platform.

## Instructions

Since this is a full stack app, the app needs to be deployed first.
There is a deployed version available in Heroku. The url for the deployed app is https://agile-everglades-01445.herokuapp.com/. From here by clicking on 'Get Started', you will be taken to the notes page. If there are any saved notes, they will be displayed. To see the details of a note, click on a saved note on the left. The note title and note text will be queried from backend and rendered on the right side of the page. To create a new note click on the 'pencil' icon and start typing the 'note title' and 'note text' in the placehoders for note title and note text respectively. Then click on the save icon at the top right corner of the page to save the note. See that it is saved in backend and the front end is re-rendered with the new saved note along with any old ones. To delete a note, click on the 'recycling bin' icon on the left against the note and an appropriate DELETE ajax call is made to the backend so that the note is deleted in backend and the fronend is re-rendered.

## License

This project is licensed under the [MIT](https://opensource.org/licenses/MIT) License.

## Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

Please note we have a code of conduct, please follow it in all your interactions with the project.

### Pull Request Process

Ensure any install or build dependencies are removed before the end of the layer when doing a build.
Update the README.md with details of changes to the interface, this includes new environment variables, exposed ports, useful file locations and container parameters.
Increase the version numbers in any examples files and the README.md to the new version that this Pull Request would represent. The versioning scheme we use is SemVer.
You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

### Code of Conduct

#### Our Pledge

In the interest of fostering an open and welcoming environment, we as contributors and maintainers pledge to making participation in our project and our community a harassment-free experience for everyone, regardless of age, body size, disability, ethnicity, gender identity and expression, level of experience, nationality, personal appearance, race, religion, or sexual identity and orientation.

#### Our Standards

Examples of behavior that contributes to creating a positive environment include:

Using welcoming and inclusive language
Being respectful of differing viewpoints and experiences
Gracefully accepting constructive criticism
Focusing on what is best for the community
Showing empathy towards other community members
Examples of unacceptable behavior by participants include:

The use of sexualized language or imagery and unwelcome sexual attention or advances
Trolling, insulting/derogatory comments, and personal or political attacks
Public or private harassment
Publishing others' private information, such as a physical or electronic address, without explicit permission
Other conduct which could reasonably be considered inappropriate in a professional setting

#### Our Responsibilities

Project maintainers are responsible for clarifying the standards of acceptable behavior and are expected to take appropriate and fair corrective action in response to any instances of unacceptable behavior.

Project maintainers have the right and responsibility to remove, edit, or reject comments, commits, code, wiki edits, issues, and other contributions that are not aligned to this Code of Conduct, or to ban temporarily or permanently any contributor for other behaviors that they deem inappropriate, threatening, offensive, or harmful.

#### Scope

This Code of Conduct applies both within project spaces and in public spaces when an individual is representing the project or its community. Examples of representing a project or community include using an official project e-mail address, posting via an official social media account, or acting as an appointed representative at an online or offline event. Representation of a project may be further defined and clarified by project maintainers.

#### Enforcement

Instances of abusive, harassing, or otherwise unacceptable behavior may be reported by contacting the project team at [suresh01@yahoo.com]. All complaints will be reviewed and investigated and will result in a response that is deemed necessary and appropriate to the circumstances. The project team is obligated to maintain confidentiality with regard to the reporter of an incident. Further details of specific enforcement policies may be posted separately.

Project maintainers who do not follow or enforce the Code of Conduct in good faith may face temporary or permanent repercussions as determined by other members of the project's leadership.

#### Attribution

This Code of Conduct is adapted from the Contributor Covenant, version 1.4, available at http://contributor-covenant.org/version/1/4

## Tests

There are no automated tests written for this app. However it is easy to launch the app by going to https://agile-everglades-01445.herokuapp.com/, Once the get started button is clicked you will be taken to notes.html where all the saved notes if any are displayed. It is easy to view, delete and create a new note easily by following instructions above. Saved notes persist across visits to the app (page).

## Questions

Please send your questions via e-mail or via my github profile.

https://github.com/s-suresh-kumar
suresh01@yahoo.com
