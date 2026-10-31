# Java Learning Lab

**Interaktivna web-aplikacija za učenje Jave 21, OOP-a, JavaDoca i obrade iznimki na hrvatskom jeziku.** Izgrađena na temelju dviju dostavljenih TVZ prezentacija i dodatnih lekcija koje postupno uvode potreban temelj.

## Što je implementirano

- **13 modula i 32 lekcije** s objašnjenjem problema, teorijom, Java kodom, koracima izvođenja, tipičnim pogreškama i pitanjima.
- **39 zadataka** na tri razine s početnim kodom, očekivanim ispisom, tri razine pomoći, ponuđenim rješenjem i zasebnim objašnjenjem logike.
- **Java Playground:** uređivanje koda, brojevi redaka, isticanje sintakse, uvlake, stdin, kopiranje i resetiranje; stvarno kompajliranje i izvođenje preko lokalnog backenda kad je aktivan.
- **Kvizovi:** pitanja po lekcijama, objašnjenje odgovora i ponavljanje pogrešaka.
- **5 edukacijskih simulatora:** nizovi, reference, nasljeđivanje, iznimke, JavaDoc. Simulacije su jasno označene i nisu JVM debugger.
- **Pretraživ rječnik** i tablica usporedbi 12 povezanih pojmova.
- **Napredak se sprema lokalno** u pregledniku (localStorage); može se izvesti/uvesti JSON sigurnosna kopija. Registracija nije potrebna.
- **Responzivan dizajn**, svijetla/tamna tema, navigacija i brza pretraga (Ctrl+K).
- **Završni projekt**: Java 21 konzolni Electric Fleet Manager s više klasa, OOP nasljeđivanjem, sučeljima, kolekcijama, iznimkama, JavaDocom i provjerama.

### Važna razlika: Java i simulacija

Frontend radi bez servera nakon objave na GitHub Pages, ali **GitHub Pages ne kompajlira Java kod**. Kada `/api/health` potvrdi backend, gumb **Pokreni Java kod** šalje kod na **lokalni runner**, koji stvarno izvršava `javac` i `java`. Bez njega uređivanje i spremanje rade, ali se pokretanje i automatska provjera ne predstavljaju kao uspješni.

Provjera zadatka uspoređuje **stvarni standardni izlaz** s očekivanim izlazom za jedan testni slučaj. To nije dokaz potpune ispravnosti programa na svim ulazima.

## Pokretanje na računalu (Windows / macOS / Linux)

Preduvjet: [Node.js 20+](https://nodejs.org/) i, za stvarno izvršavanje Java programa, Docker ili Java 21 JDK.

1. Preuzmi i raspakiraj ovaj repozitorij.
2. Otvori terminal / PowerShell u mapi `java-learning-lab` (mapi gdje je `package.json`), ili na Windowsu dvoklikni `POKRENI_WINDOWS.bat` za pokretanje servera.
3. Pokreni:

   ```sh
   npm start
   ```

4. U pregledniku otvori **http://127.0.0.1:4173**.

Aplikacija će prikazati lekcije, zadatke i simulacije i bez Dockera, ali će **Java runner: offline**.

### Sigurno izvođenje vlastitih Java programa (Docker, preporučeno)

Docker Desktop mora biti pokrenut. U terminalu:

```sh
docker pull eclipse-temurin:21-jdk
npm start
```

Kod se tada izvršava u zasebnom prolaznom Docker kontejneru s onemogućenom mrežom, ograničenjem CPU-a/memorije/procesa, bez Linux capabilities i s read-only baznim sustavom. Lokalni HTTP server sluša **samo `127.0.0.1`**. To je zaštita primjerena osobnom računalu i učenju; nije sigurnosna podloga za javno izloženu uslugu koja prima nepoznate korisnike.

### Alternativa samo za vlastiti, pouzdani Java kod (bez Dockera)

Ako si jedini korisnik i znaš da je Java kod koji pokrećeš siguran, instaliraj JDK 21 i pokreni:

```sh
npm run start:trusted
```

**Upozorenje:** ovaj način **nema izolaciju** i izvršava Java programe izravno na tvojem računalu s tvojim ovlastima. Nemoj njime pokretati nepoznati ili preuzeti kod. Nemoj ga izlagati drugim korisnicima ni internetu.

### Testiranje

```sh
npm test
npm run verify:java
```

`npm test` provjerava strukturu i pedagoške podatke. `npm run verify:java` pomoću lokalnog JDK-a 21 stvarno kompajlira i pokreće **32 uzorka iz lekcija i 39 rješenja zadataka** te provjerava očekivani izlaz zadataka. Kompletan provjerni postupak: `npm run check`.

Za provjeru završnog Java projekta slijedi [final-project/README.md](final-project/README.md). Naredbe za generiranje HTML JavaDoc dokumentacije potvrđene su na Javi 21. ZIP sadrži i ogledni generirani HTML u `final-project/docs/index.html` koji možeš odmah otvoriti.

## Objavljivanje na vlastitom GitHubu i GitHub Pages

1. Na GitHubu stvori **novi, prazni javni repozitorij**, npr. `java-learning-lab`.
2. Prenesi cijeli sadržaj **ove mape** u korijen repozitorija, uključujući `.github`, `data`, `backend`, `final-project`, `index.html`, `app.js`, `styles.css`.
3. Provjeri da je zadana grana `main`.
4. U repozitoriju otvori **Settings → Pages → Build and deployment → Source: GitHub Actions**.
5. Workflow `.github/workflows/pages.yml` automatski izrađuje i objavljuje **samo statički frontend** nakon push-a na `main`. Adresa je tipično `https://KORISNIK.github.io/java-learning-lab/` i bit će prikazana u GitHub Actions / Pages.

Na javnoj verziji možeš učiti, vježbati, spremati kod i napredak; **stvarno izvođenje Jave nije dostupno** bez zasebno konfiguriranog sigurnog backenda. Lokalni `/api/run` ne smije se automatski izložiti javno.

## Struktura projekta

```text
java-learning-lab/
├── index.html                 # Sučelje
├── app.js                     # Navigacija, editor, interakcije i napredak
├── styles.css                 # Responzivan dizajn
├── data/
│   ├── modules.js             # 13 nastavnih cjelina
│   ├── lessons.js             # 32 lekcije s pitanjima
│   ├── tasks.js               # 39 zadataka
│   ├── task-explanations.js   # Objašnjenja referentnih rješenja
│   └── glossary.js            # Rječnik i usporedbe
├── backend/server.mjs         # Lokalni HTTP poslužitelj + Docker Java runner
├── final-project/             # Java 21 višeklasni konzolni projekt
├── tests/                     # Testovi podataka i kompajliranje primjera
├── .github/workflows/         # GitHub Actions CI i objava Pages
├── service-worker.js          # Osnovno predmemoriranje nakon posjeta
└── README.md
```

## Provjerene ispravke i izvori gradiva

Pročitaj [SOURCES.md](SOURCES.md). Prezentacije iz korisničkog materijala nisu uključene u javni repozitorij; u aplikaciji je izvor svakog modula označen kao predavanje ili dopunsko gradivo.

## Poznata ograničenja

- Sučelje nije IDE s punim debuggerom; označavanje sintakse je lagano, a simulatori su edukacijski modeli.
- Zadaci koriste jedan unaprijed zadani očekivani izlaz, a ne neovisne skrivene testove nad svim rubnim slučajevima.
- GitHub Pages objava ne pokreće Docker/Java; za stvarni Java runtime koristi lokalni poslužitelj.
- Napredak nije sinkroniziran između uređaja. Za prijenos koristi izvoz i uvoz JSON datoteke.
- Priložene lekcije odgovaraju dostupnim dvjema prezentacijama i dodatnim osnovama; nedostupni nastavni materijali nisu rekonstruirani niti predstavljeni kao pregledani.

Autorstvo: edukacijski projekt pripremljen na temelju korisničkog nastavnog programa. Sadržaj je informativan i ne zamjenjuje službenu dokumentaciju Jave.
