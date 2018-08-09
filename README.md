# Spring-St-Logos
progressive web application using image recognition to identify member companies for the Galvanize NYC campus.

## Getting Started

Clone this repo and run "npm install" to install the dependencies.
Alternatively, check out the live site at: logo-reader.herokuapp.com.

### Prerequisites

- A Google Vision API key
- Some knowledge of PostgreSQL
- a device with a webcam

### Installing

NOTE: the current database needs to be configured to your database.
- In your terminal, run 'createdb {DATABASE}'
- In knexfile.js, change the connection to: 'postgres://localhost/{DATABASE}'.
  - on Linux and Windows systems, PostgreSQL may require a username/password for PostgreSQL. Please refer to PostgreSQL 
  documentation for details: https://www.postgresql.org/docs/10/static/client-authentication.html
  - ie: 'postgres://{USERNAME}:{PASSWORD}@localhost/{DATABASE NAME}'
- Run the command "knex migrate:latest" to set up the tables in the database.
- Run the command "knex seed:run" to populate the tables with the example company data.


NOTE: a Google Vision API key is needed to use the application.

- Create "key.js" on the root directory.
- Inside set the key variable, ie: const key = 'key1234'
- export the key with 'module.export = key'

Once the database and connection has been set up, you can run "npm run dev" to test it.

## How to use

The program has multiple checks -
- It will send the image taken to Google for analysis and request logo information and text information.
- If logo data is found, it will return said data for comparison with the local database.
- If logo data is not found, it will obtain text data for the image located and again, check the local database for the text.
- If neither methods return a result, it will check for any Aliases (generally an alternative name or logo text) for a result.
- Should this fail as well, it will run a partial match looking for anything matching the text string in the local database.

If using your own data, keep the following information in mind:
- the "label" of an entry of the database is what is being matched - it will ignore white spaces and capitalization.
- While accuracy is important, if google is consistantly wrong on the same image, deeming the result as an Alias can be beneficial.


## Built With

* Javascript
* [Google Vision](https://cloud.google.com/vision/) - content analysis to "read" the images captured.
* [PostgreSQL](https://rometools.github.io/rome/) - Used for the database.
* [Knex](https://knexjs.org/) - used for accessing database.

## Authors

Kin Siu - [Kinsiu00](https://github.com/Kinsiu00/)

## License


This project is licensed under the MIT License.
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and 
associated documentation files (the "Software"), to deal in the Software without restriction, 
including without limitation the rights to use, copy, modify, merge, publish, distribute, 
sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, 
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies 
or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, 
INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. 
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, 
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE 
OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
