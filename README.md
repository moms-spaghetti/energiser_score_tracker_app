# Energiser Hall of Fame Score Board

At the School of Code, energisers are small games played during downtime. I've made this app to track different game types and player scores.\
[View Demo](https://moms-spaghetti-energiser.herokuapp.com/)
<br/><br/>

## Details

The app is made using express serving both front and backend. The front end allows input of new game types and selection of current, distinct game types already present in the table. Select the amount of player names to be entered and this will show an equal amount of input boxes for names and scores. Once entered and confirmed, game type data and scores will be sent to the database table and updated in the UI. If selecting an existing game, player names and scores will be added to the existing game type.
An area at the bottom of the UI allows deletion of game types or users.
Express handles routes, API requests and connection to the postgres table. Unlike my earlier projects this uses the express-generator template. Nodemon was used to enable faster development. After adding new data, fetch data is run again to keep the UI updated.
<br/><br/>

## Built With

- HTML
- CSS
- Javascript
- Express-generator
- dotenv
- nodemon
- pg
  <br/><br/>

## Getting Started

This app can be run locally but will require a postgres database for persistant storage of data. createTable.js has been included allow easy creation of the required table.
<br/><br/>

## Prerequisites

- A postgres table.
- A .env or environment variable containing the DATABASE_URL= string followed by your postgres connection URI.
- Installation of npm modules after cloning.
  <br/><br/>

## Installation

1. Clone the repo.
   ```sh
   git clone https://github.com/moms-spaghetti/energiser_score_tracker_app.git
   ```
2. Download the required npm modules.
   ```sh
   npm i
   ```
3. Create your .env in the root folder with a DATABASE_URL= string containing your postgres connection URI.
4. Run the create table script.
   ```sh
   npm run createTable
   ```
5. Start the application from the root folder in your console.
   ```sh
   npm start
   ```
6. Access the application from http://localhost:5000/
   <br/><br/>

## Usage

Add new games, users and the their scores. Remove users and games from the 'danger zone' area at the bottom of the app.
<br/><br/>

## Contact

[Email](mailto:williamedwards36@aol.com)
<br/><br/>
