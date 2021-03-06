# Description of the Task

The request for the Test was to setup a REST API in NodeJS using NestJS framework, where pagination must be allowed and search for :

- Postal Code : 'Code postal'
- administrative divisions : 'Libelle_region'  
- unique identifier : 'Identifiant_de_l_etablissement'
- type of schools : 'Type_etablissement'

Database:
MongoDB. Considered installed in localhost

Bonus:
- Search by Geo Localization : Completed

- GraphQL API : Completed

## How to initialize the database

If operator wants to initialize the database and start the NestJS server in second time can run 

<code>yarn run seed</code>

if operator wants to initialize the database and then start NestJS server the code is

<code>yarn run seed:start</code>

# Descrition of Database initialization script

Steps used to initialize the database are reported in the code at 

<code>src/institutions/seeding/csv_to_json/csv_json.js</code>

The url containing population for database is <code>https://data.education.gouv.fr/explore/dataset/fr-en-annuaire-education/download/?format=csv&timezone=Europe/Berlin&lang=fr&use_labels_for_header=true&csv_separator=%3B</code> , a <code>.csv</code> file with <code>;</code> delimiter. <br>

The script does fetch the <code>.csv</code> file and converts it to json object using appropriate options described in the variable <code>opt</code>. <br>

From the resulting json object is obtained an object where the <code>position</code> field value is adjusted to GeoJSON Point Type format.
The key 'Code postal' is substituted with 'Code_postal' to avoid spaces in key name.<br>

The entities where <code>position</code> value is not defined have been set with a default <code>[0,0]</code> value as coordinates.<br>

Then the index <code>{ position : '2dsphere' }</code> is created.<br>

The script exits.
<br>

# Conclusions

The base task and bonuses have been completed.
