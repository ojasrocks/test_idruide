# Description of the Task

The request for the Test was to setup a REST API in NodeJS using NestJS framework, where pagination must be allowed and search for :

- Postal Code : 'Code postal'
- administrative divisions : 'Libelle_region'  
- unique identifier : 'Identifiant_de_l_etablissement'
- type of schools : 'Type_etablissement

Database:
MongoDB. Considered installed in localhost

Bonus:
- Search by Geo Localization : 
- GraphQL API : 

How to initialize the database.

If operator wants to initialize the database and start the NestJS server in second time can run 

<code>yarn run seed</code>

if operator wants to initialize the database and then start NestJS server the code is

<code>yarn run seed:start</code>

# Descrition of Database initialization

Steps used to initialize the database are reported in the code at 

src/institutions/seeding/csv_to_json/csv_json.js

The origin file containing population for database is fr-en-annuaire-education.csv , a ".csv" file with ';' delimiter.
The script reads the file and converts to json object using appropriate options described in the variable 'opt'.
From the resulting json object is obtained an object where the 'position' field value is adjusted to GeoJSON Point Type format.
The entities where 'postiion' value is not defined have been set with a default [0,0] value as coordinates.
Then the index { position : '2dsphere' } is created.
The script exits.

