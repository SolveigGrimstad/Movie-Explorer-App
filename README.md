# Project 4

## Innhold
1. [Om](#om)
2. [Teknologi](#teknologi)
    1. [React-native og Expo](#React-native)
    2. [Redux](#REDUX)
    4. [Tredjepartsomponenter](#komponenter)
4. [Installering](#Installering)
5. [Bruk av git](#git)
6. [Sources](#source)

# Om prosjektet <a name="om"></a>:
I dette prosjektet har vi laget en applikasjon for filmsøk. Webapplikasjonen lar deg søke, filtrere, sortere, bla og like filmer. 
Når du kommer inn på hovedsiden kan du trykke deg inn på "Go to movies", der du kan finne nærmere 900 filmer vi har hentet fra et public API. 
Trykker du på filmposterne vil du få opp ytterlige informasjon om filmene som blant annet tittel, utgivelsesår, varighet, IMDB-rating og et 
lite sammendrag av hver film. Her vil du også få muligheten til å se hvor mange som har likt filmen, samt gi din egen like/unlike 
ved å trykke på hjertet. Brukeren kan både søke, filtrere og sortere på hele filmsettet, og resultatet blir representert 
på ulike sider man kan bla seg gjennom. Vi har satt default sorteringen basert på rangering, siden vi tenker at dette er det mest naturlige valget slik at de best
rangerte filmene havner øverst. Både søk, filtrering og sortering fungerer om hverandre og man kan gjøre alle operasjonene samtidig dersom man ønsker et mer 
spesifisert søk. 

<img src="moviebib.png" alt="Moviebiblotek" width="600" />

<img src="moviesearch.png" alt="Moviebiblotek" width="600" />

# Teknologi <a name="teknologi"></a>:


### React-native og Expo <a name="react-native"></a>:
Prosjektet er basert på React-native og Expo og har blitt initialisert med 

````
npm install --global expo-cli

expo init my-project
````

De funksjonelle komponentene og klassene er implementert ved hjelp av JSX og Typescript. Prosjektet er satt opp av ulike komponenter der alt blir satt sammen i App.tsx og routes.tsx. 
Route-filen står for navigasjon mellom de ulike sidene, der stack navigatior er tatt i bruk. Derifra blir det lagd en stack som gir deg muligheten til å gå fra hjemsiden, til filmbibloteket, og 
videre til detaljer om de ulike filmene. 



Vi har i tillegg lagt til en funksjon som gjør at en bruker kan like en film.  Hver gang en bruker klikker på hjertet blir det gjort et axios-kall og bruker app.put for å oppdatere databasen. 

Stylingen i dette prosjektet har vi prøvd å holde ganske enkel da det meste kom med Materialize. I tillegg har vi tatt i bruk flexbox og tabeller for å få alt til å ligge som vi ønsket. 


### Redux <a name="redux"></a>:
Vi har som i prosjekt 3, tatt i bruk Redux til filtrert søk. Men i dette prosjektet var det nødvendig med Redux når det kom til sortert søk også. 


<img src="moviefilter.png" alt="Moviebiblotek" width="600" />


### Tredjepartskomponenter <a name="komponenter"></a>:
I dette prosjektet 





# Installering <a name="Installering"></a>:
For å kunne kjøre prosjektet må man enten være koblet til NTNU nett eller NTNUs VPN. 

1. Klon git repoet med SSH/HTTP i ønsket lokasjon.
2. Lokaliser deg til backend mappen og kjør 

````
npm install
npm run dev
````

3. Deretter lokaliser deg inn i frontendmappen og skriv 

````
npm install
npm start
````


# Bruk av git <a name="git"></a>:
Under hele prosjektet har vi brukt git flittig. Hele prosjektet startet med å sette opp wireframes slik at vi alle var inneforstått med hvordan vi ønsket at siden skulle se ut.
Deretter satte vi opp ulike issues for nettsiden vår, og delte ut arbeidsoppgaver. I startfasen hadde vi noe problemer med å få sette opp backend samt koble opp virituell maskin, så 
dette tok dessverre mye av tiden vår i starten. Når vi først kom i gang fikk alle medlemmene utdelt issues som vi ønsket å jobbe med. Ble man ferdig med issuet sitt, kunne man fortsette
på neste uferdige issue. På den måten, kom vi gjennom alt som måtte gjøres. Vi var ikke like flinke til å close issuesene fortløpende som vi ønsket, men alle issuesene ble utført. 
Siden ble noe anderledes enn det vi først så for oss siden vi kanskje var litt for ambisiøse. Noe vi ikke rakk å implementere var det å kunne trykke på en film og komme til en ny side 
som hadde mer utfyllende informasjon om de ulike filmene. Vi valgte heller at man kunne trykke på hver film og lese direkte i filmbibloteket da kravet var å kunne se mer detaljer om hver film, noe vi har.
Et annet issue som ikke ble fullført 

Vi har alltid sørget for at alle skulle være oppdatert til en vær tid, og vite hvilken branch som har de nyeste oppdateringene. 
I tillegg var det også viktig for oss å alltid ha en back-up-branch der all nylig implementert funksjonalitet fungerte som det skulle slik at vi alltid hadde noe 
å gå tilbake til dersom ting ikke fungerte som det skulle. I dette prosjektet har vi opprettet utrolig mange brancher siden vi har gjort mye feil og har måttet gått frem og tilbake
flere ganger. Fra tidligere prosjekt, ville vi forbedre oss på det med commits meldinger og branchnavn. Dette har vi vært flinkere på under dette prosjektet, men det kunne vært bedre.
Som sagt, har vi prøvd mye forskjellig og testet mye ulik funksjonalitet/setup som har resultert i noen ugunstige branchnavn. Commitsene derimot, har vi vært litt mer konsekvens og 
vært litt mer beskrivende i forhold til hvilke funksjonalitet vi ønsket å implementere. 



# Sources <a name="source"></a>:

* Prosjekt 3: https://gitlab.stud.idi.ntnu.no/it2810-h20/team-42/project-3

