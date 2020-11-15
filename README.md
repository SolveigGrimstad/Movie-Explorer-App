# Projekt 4

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


### Redux <a name="redux"></a>:
Vi har som i prosjekt 3, tatt i bruk Redux til filtrert søk. Men i dette prosjektet var det nødvendig med Redux når det kom til sortert søk også. 


<img src="moviefilter.png" alt="Moviebiblotek" width="600" />


### Tredjepartskomponenter <a name="komponenter"></a>:
I dette prosjektet har vi tatt i bruk react-native-paper som tredjepartskomponenter til blant annet de ulike "kortene" for å vise hver film. 
Ellers har vi implementert de resterende komponentene fra bunn av.  



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
* vært flinkere denne gangen 
* commits med issuenummer 
* flinkere på bruk av issues


# Sources <a name="source"></a>:

* Prosjekt 3: https://gitlab.stud.idi.ntnu.no/it2810-h20/team-42/project-3

