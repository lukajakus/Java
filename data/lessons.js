export const lessons = [
  {
    "module": "osnove",
    "id": "j01",
    "title": "Kako Java program počinje",
    "why": "Želiš razumjeti svaku riječ u `public static void main(String[] args)`, a ne samo je prepisati.",
    "concept": "Java datoteka opisuje klasu. `public` dopušta pristup izvana; `class Main` definira tip Main. JVM pokreće ulaznu metodu `main` s potpisom `public static void main(String[] args)`. `static` znači da se metoda poziva bez stvaranja objekta klase Main, a `void` da ne vraća vrijednost. `String[] args` predstavlja polje argumenata terminala. Vitičaste zagrade označavaju blokove; točka-zarez završava većinu naredbi.\n\n`System.out.println` ispisuje tekst i prelazi u novi red. `System` je klasa, `out` je njezino statičko polje (PrintStream), a `println` njegova metoda. Java razlikuje velika i mala slova. Datoteka koja sadrži javnu klasu Main mora se zvati `Main.java`.\n\nU terminalu: `javac Main.java` pretvara izvorni kod u `Main.class`; `java Main` pokreće bytecode na JVM-u. Za ove primjere koristimo Java 21.",
    "code": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Bok, Java!\");\n        System.out.println(\"Program je pokrenut.\");\n    }\n}",
    "walk": [
      "JVM traži `main` kao početnu točku",
      "Izvodi prvu `println` naredbu",
      "Izvodi drugu naredbu",
      "Završava metodu main"
    ],
    "pitfall": "Nemoj pisati `java Main.java` kao zamjenu za sve postupke: postoje različiti načini pokretanja, ali `javac` + `java Main` jasno prikazuje dvije faze.",
    "quiz": {
      "q": "Što radi `void` u potpisu main?",
      "options": [
        "Vraća tekst",
        "Označava da metoda ne vraća vrijednost",
        "Stvara objekt"
      ],
      "answer": 1,
      "explanation": "`void` označava odsutnost povratne vrijednosti."
    },
    "sim": "trace",
    "source": "Dopunsko gradivo"
  },
  {
    "module": "osnove",
    "id": "j02",
    "title": "Varijable, tipovi i Scanner",
    "why": "Da razlikuješ broj od teksta i razumiješ odakle dolaze podaci.",
    "concept": "Varijabla ima tip, naziv i vrijednost: `int godina = 2026;`. Primitivni tip `int` pohranjuje cijeli broj; `double` decimalni broj; `boolean` istinitosnu vrijednost; `char` jedan znak. `String` je objektni tip, ne primitiv. Operator `+` zbraja brojeve, ali spaja Stringove kada je jedan operand tekst.\n\n`Scanner` čita unos. `nextInt()` čita broj; `nextLine()` čita redak. Nakon `nextInt()` znak novog retka može ostati u ulaznom toku, pa neposredni `nextLine()` ponekad pročita prazan redak. Koristi `try-with-resources` kada Scanner posjeduje resurs koji želiš zatvoriti; za `System.in` pripazi da zatvaranje Scanner-a zatvara i standardni ulaz. U interaktivnom primjeru sa statičkim ulazom koristimo argumente radi ponovljivosti.\n\nPrilikom dodjele `double d = 5 / 2;` rezultat je 2.0 jer se prvo izvršava cjelobrojno dijeljenje. `5.0 / 2` daje 2.5.",
    "code": "public class Main {\n    public static void main(String[] args) {\n        int broj = 5;\n        double prosjek = broj / 2.0;\n        String opis = \"Prosjek: \";\n        System.out.println(opis + prosjek);\n        System.out.println(broj % 2);\n    }\n}",
    "walk": [
      "Deklarira se `broj` tipa int",
      "Dijeljenje s 2.0 daje double 2.5",
      "String se nadovezuje na broj",
      "Ostatak `5 % 2` iznosi 1"
    ],
    "pitfall": "`==` uspoređuje primitive po vrijednosti, a kod objekata reference. Za tekst koristi `.equals()`.",
    "quiz": {
      "q": "Što ispisuje `5 / 2` kada su oba operanda int?",
      "options": [
        "2",
        "2.5",
        "3"
      ],
      "answer": 0,
      "explanation": "Cjelobrojno dijeljenje odbacuje decimalni dio."
    },
    "sim": "trace",
    "source": "Dopunsko gradivo"
  },
  {
    "module": "tok",
    "id": "j03",
    "title": "if, else i switch",
    "why": "Program mora znati donijeti odluku na temelju uvjeta.",
    "concept": "Izraz u `if` mora biti `boolean`. Usporedbe koriste `==`, `!=`, `<`, `>`, `<=`, `>=`. `&&` zahtijeva dva istinita uvjeta, `||` barem jedan. Kod `&&` i `||` Java može preskočiti drugi operand (short-circuit), što je važno pri provjeri `x != null && x.length() > 0`.\n\n`else if` provjerava sljedeći uvjet samo kada prethodni nije ispunjen. Klasični `switch` radi s `case` i `break`; suvremeni `switch` izraz koristi `->` i može vratiti vrijednost. Kada rasponi uvjeta nisu diskretne vrijednosti, `if` je često jasniji.",
    "code": "public class Main {\n    public static void main(String[] args) {\n        int bodovi = 82;\n        String rezultat = bodovi >= 90 ? \"A\" : bodovi >= 75 ? \"B\" : \"C\";\n        System.out.println(rezultat);\n    }\n}",
    "walk": [
      "Provjeri je li bodovi >= 90 (nije)",
      "Provjeri je li bodovi >= 75 (jest)",
      "Spremi `B` u rezultat",
      "Ispiši B"
    ],
    "pitfall": "Ne miješaj `=` (dodjela) s `==` (usporedba). Za tekst primijeni `.equals()`.",
    "quiz": {
      "q": "Kada se izvršava else?",
      "options": [
        "Uvijek",
        "Kada nijedan raniji uvjet u lancu nije istinit",
        "Samo kod iznimke"
      ],
      "answer": 1,
      "explanation": "`else` je završna grana za preostale slučajeve."
    },
    "sim": "trace",
    "source": "Dopunsko gradivo"
  },
  {
    "module": "tok",
    "id": "j04",
    "title": "for, while i do-while",
    "why": "Ponavljanje je temelj pretraživanja liste, zbrajanja i obrade tekstova.",
    "concept": "`for` razlaže petlju na inicijalizaciju, uvjet i korak. `for (int i=0; i<3; i++)` pokreće tijelo za indekse 0,1,2. `while` prvo provjerava uvjet; `do-while` izvršava tijelo najmanje jednom.\n\n`break` prekida petlju, `continue` prelazi na sljedeću iteraciju. Pazi na beskonačne petlje i rubne vrijednosti indeksa. Enhanced for: `for (String ime : imena)` čita svaki element, bez izravnog indeksa. To je korisno i za `List<AutorskiHonorar>`: promjenjiva u petlji predstavlja trenutačni objekt. Ne stvara novu listu.",
    "code": "public class Main {\n    public static void main(String[] args) {\n        int suma = 0;\n        for (int i = 1; i <= 4; i++) {\n            suma += i;\n            System.out.println(\"i=\" + i + \", suma=\" + suma);\n        }\n    }\n}",
    "walk": [
      "i=1, suma postaje 1",
      "i=2, suma postaje 3",
      "i=3, suma postaje 6",
      "i=4, suma postaje 10",
      "i=5, uvjet više ne vrijedi"
    ],
    "pitfall": "Pogreška off-by-one: `i <= lista.size()` pokušat će pristupiti nepostojećem posljednjem indeksu.",
    "quiz": {
      "q": "Koliko puta se izvršava `for (int i=0; i<3; i++)`?",
      "options": [
        "2",
        "3",
        "4"
      ],
      "answer": 1,
      "explanation": "Vrijednosti i su 0,1,2; pri 3 uvjet više ne vrijedi."
    },
    "sim": "loop",
    "source": "Dopunsko gradivo"
  },
  {
    "module": "tok",
    "id": "j05",
    "title": "Metode, parametri i return",
    "why": "Da jedan problem riješiš jednom, umjesto da isti kod kopiraš na tri mjesta.",
    "concept": "Metoda je imenovani blok koda koji ima parametre i opcionalnu povratnu vrijednost. `static int zbroji(int a, int b)` definira dva parametra; poziv `zbroji(2,3)` šalje argumente. `return` zaustavlja izvođenje metode i vraća rezultat pozivatelju. `void` metode nemaju povratnu vrijednost.\n\nLokalne varijable postoje unutar svojeg bloka. Java argumente prosljeđuje *po vrijednosti*: za primitiv se kopira vrijednost, a za objekt se kopira vrijednost reference. Metode se mogu preopteretiti (overload) drugačijim popisom parametara; promjena samo povratnog tipa nije dovoljna.\n\n`public static AutorskiHonorar minHonorar(List<AutorskiHonorar> lista)` prima REFERENCU na listu i vraća jedan objekt tipa AutorskiHonorar. Ime parametra `lista` možeš preimenovati u `honorari`; važno je da se naziv dosljedno koristi unutar metode.",
    "code": "public class Main {\n    static int kvadrat(int broj) {\n        return broj * broj;\n    }\n    public static void main(String[] args) {\n        int rezultat = kvadrat(4);\n        System.out.println(rezultat);\n    }\n}",
    "walk": [
      "Poziva se kvadrat(4)",
      "Parametar broj ima vrijednost 4",
      "`return` vraća 16",
      "Ispisuje se rezultat 16"
    ],
    "pitfall": "`return` i `System.out.println()` nisu isto: prvo vraća rezultat, drugo ispisuje.",
    "quiz": {
      "q": "Što mijenja preopterećenje metode?",
      "options": [
        "Samo povratni tip",
        "Popis parametara",
        "Komentar iznad metode"
      ],
      "answer": 1,
      "explanation": "Različiti parametri omogućuju više metoda istog naziva."
    },
    "sim": "trace",
    "source": "Dopunsko gradivo"
  },
  {
    "module": "kolekcije",
    "id": "j06",
    "title": "Nizovi i indeksi",
    "why": "Za obradu više vrijednosti bez deset odvojenih varijabli.",
    "concept": "Niz (`array`) ima fiksan broj elemenata i indekse od 0 do `length-1`. `int[] ocjene = {3,4,5};` kreira niz; `ocjene[0]` vraća prvu ocjenu. Pogrešan indeks baca `ArrayIndexOutOfBoundsException`.\n\nObičan `for` daje kontrolu nad indeksom; enhanced `for` pojednostavljuje čitanje svih elemenata. Niz može sadržavati primitive ili reference na objekte. Imaj na umu da `int[] b = a` ne kopira elemente, nego referencu na isti niz. Za stvarnu kopiju koristi `Arrays.copyOf`.",
    "code": "import java.util.Arrays;\npublic class Main {\n    public static void main(String[] args) {\n        int[] ocjene = {3, 4, 5};\n        int[] kopija = Arrays.copyOf(ocjene, ocjene.length);\n        kopija[0] = 1;\n        System.out.println(ocjene[0]);\n        System.out.println(kopija[0]);\n    }\n}",
    "walk": [
      "Stvara se niz [3,4,5]",
      "Arrays.copyOf stvara drugi niz",
      "Mijenja se samo kopija[0]",
      "Izvorni niz ostaje 3,4,5"
    ],
    "pitfall": "`length` je polje niza, nije metoda; u Stringu koristiš `length()`, a u Listi `size()`.",
    "quiz": {
      "q": "Koji je posljednji indeks niza duljine 5?",
      "options": [
        "5",
        "4",
        "6"
      ],
      "answer": 1,
      "explanation": "Indeksiranje počinje od nule."
    },
    "sim": "array",
    "source": "Dopunsko gradivo"
  },
  {
    "module": "kolekcije",
    "id": "j07",
    "title": "List, ArrayList i for-each",
    "why": "Listu objekata trebaš razumjeti da bi radio zadatke s honorarima i pretragom.",
    "concept": "`List<T>` je sučelje koje opisuje kolekciju s redoslijedom; `ArrayList<T>` je konkretna implementacija koja automatski mijenja kapacitet. Pišemo `List<String> imena = new ArrayList<>()`: lijevo biramo apstraktni tip, desno stvarni objekt. `add` dodaje, `get(index)` dohvaća, `size()` vraća broj elemenata, `remove` uklanja.\n\nU `for (String ime : imena)` naziv `ime` slobodno odabireš. Svaka iteracija postavlja ga na sljedeći element. Za `List<AutorskiHonorar>` bi `AutorskiHonorar h` predstavljao pojedini HONORAR, a ne cijelu listu. `lista.get(0)` vraća prvi objekt; zato provjeri da lista nije prazna prije računanja minimuma.\n\nPoziv `AutorskiHonorar.maxHonorar(honorari).iznos` najprije vraća objekt AutorskiHonorar, a `.iznos` čita njegov atribut. Kad je atribut private, umjesto toga koristi `.getIznos()`.",
    "code": "import java.util.ArrayList;\nimport java.util.List;\npublic class Main {\n    public static void main(String[] args) {\n        List<String> imena = new ArrayList<>();\n        imena.add(\"Ana\");\n        imena.add(\"Luka\");\n        for (String ime : imena) {\n            System.out.println(ime.toUpperCase());\n        }\n    }\n}",
    "walk": [
      "List referenca pokazuje na ArrayList objekt",
      "Dodaju se Ana i Luka",
      "Prva iteracija: ime=Ana",
      "Druga iteracija: ime=Luka"
    ],
    "pitfall": "Prazna lista nema element na indeksu 0. Napisati `get(0)` bez provjere može baciti iznimku.",
    "quiz": {
      "q": "Što je `ime` u `for (String ime : imena)`?",
      "options": [
        "Nova lista",
        "Privremena varijabla za pojedini element",
        "Duljina liste"
      ],
      "answer": 1,
      "explanation": "Naziv je proizvoljan, tip String odgovara elementima liste."
    },
    "sim": "array",
    "source": "Dopunsko gradivo"
  },
  {
    "module": "objekti",
    "id": "j08",
    "title": "Klasa, objekt i atribut",
    "why": "OOP počinje razlikovanjem predloška od konkretne instance.",
    "concept": "Klasa opisuje stanje i ponašanje. Atributi su polja kao `ime` i `godina`, metode su ponašanja kao `predstaviSe()`. Objekt nastaje izrazom `new Student(...)` i svaka instanca ima vlastite vrijednosti instancijskih polja.\n\nVarijabla `Student a` drži referencu na objekt, ne cjelokupni objekt. `Student b = a` kopira referencu: a i b pokazuju na istu instancu. `==` između njih uspoređuje identitet reference. Dvije odvojene instance iste klase nisu isti objekt samo zato što imaju jednake podatke.",
    "code": "public class Main {\n    static class Student {\n        String ime;\n        Student(String ime) { this.ime = ime; }\n        String predstaviSe() { return \"Ja sam \" + ime; }\n    }\n    public static void main(String[] args) {\n        Student prvi = new Student(\"Ana\");\n        Student drugi = new Student(\"Marko\");\n        System.out.println(prvi.predstaviSe());\n        System.out.println(drugi.predstaviSe());\n    }\n}",
    "walk": [
      "Definira se tip Student",
      "`new` stvara prvu instancu, ime=Ana",
      "`new` stvara drugu, ime=Marko",
      "Svaki poziv koristi pripadni objekt"
    ],
    "pitfall": "Ne miješaj `Student` (tip) i `new Student(...)` (konkretan objekt).",
    "quiz": {
      "q": "Jesu li `new Student(\"Ana\")` i drugi isti objekt?",
      "options": [
        "Da",
        "Ne, nastaju dvije instance",
        "Samo ako su static"
      ],
      "answer": 1,
      "explanation": "Svaki `new` obično stvara novu instancu."
    },
    "sim": "objects",
    "source": "TVZ: 2 - OOP u Javi.pptx"
  },
  {
    "module": "objekti",
    "id": "j09",
    "title": "Konstruktor, this i new",
    "why": "Pravilno početno stanje objekta važnije je od naknadnog popravljanja grešaka.",
    "concept": "Konstruktor ima isto ime kao klasa i nema povratni tip. Poziva se pri izradi instance pomoću `new`. Može primiti podatke i inicijalizirati polja.\n\nU izrazu `this.ime = ime`, lijevo je polje trenutačnog objekta, a desno parametar konstruktora. Ključna riječ `this` omogućuje i pozivanje drugog konstruktora iste klase naredbom `this(...)` (kada je to dopušteno). `static` članovi pripadaju klasi kao cjelini, a ne svakoj instanci.\n\nKonstruktor održava invarijante: ako je negativni iznos nevaljan, bolje ga odbiti nego dopuštati objekt s pogrešnim stanjem.",
    "code": "public class Main {\n    static class Racun {\n        private final String vlasnik;\n        private double stanje;\n        Racun(String vlasnik, double stanje) {\n            this.vlasnik = vlasnik;\n            this.stanje = stanje;\n        }\n        double stanje() { return stanje; }\n    }\n    public static void main(String[] args) {\n        Racun r = new Racun(\"Ana\", 40);\n        System.out.println(r.stanje());\n    }\n}",
    "walk": [
      "Rezervira se objekt Racun",
      "Konstruktor prima dva argumenta",
      "this polja dobivaju vrijednosti",
      "Metoda stanje() vraća 40.0"
    ],
    "pitfall": "Bez `this` možeš slučajno mijenjati parametar umjesto polja kada imaju isto ime.",
    "quiz": {
      "q": "Što znači `this.ime`?",
      "options": [
        "Polje trenutačnog objekta",
        "Statičko polje Java klase",
        "Ime metode"
      ],
      "answer": 0,
      "explanation": "`this` referencira trenutačnu instancu."
    },
    "sim": "objects",
    "source": "TVZ: 2 - OOP u Javi.pptx"
  },
  {
    "module": "enkapsulacija",
    "id": "j10",
    "title": "public, private, protected",
    "why": "Sakrivanjem stanja možeš spriječiti slučajne i nevaljane promjene.",
    "concept": "`public` je dostupan izvana gdje je klasa vidljiva, `private` samo unutar klase, package-private (bez oznake) unutar paketa, a `protected` u istom paketu i u podklasama uz pravila pristupa pri nasljeđivanju. Java ima i pristupna pravila za same tipove.\n\nDobra početna praksa: polja označi `private`, a javnim metodama izloži smislene operacije. Getter samo čita podatak; setter treba provoditi pravila. Nije obvezno svako polje imati getter i setter. Enkapsulacija nije puko stvaranje settera, nego zaštita valjanog stanja.\n\nKompozicija često bolje izolira detalje nego izlaganje `protected` polja. U važnom API-ju razmisli i o nepromjenjivim objektima.",
    "code": "public class Main {\n    static class Baterija {\n        private int postotak = 50;\n        public void napuni(int koliko) {\n            if (koliko < 0) throw new IllegalArgumentException(\"Negativno\");\n            postotak = Math.min(100, postotak + koliko);\n        }\n        public int getPostotak() { return postotak; }\n    }\n    public static void main(String[] args) {\n        Baterija b = new Baterija();\n        b.napuni(60);\n        System.out.println(b.getPostotak());\n    }\n}",
    "walk": [
      "Postotak počinje na 50",
      "napuni(60) prolazi validaciju",
      "Math.min zaustavlja na 100",
      "Getter vraća 100"
    ],
    "pitfall": "`protected` nije isto što i „dostupno iz svake klase koja poznaje podklasu”.",
    "quiz": {
      "q": "Koja oznaka dopušta pristup polju samo unutar njegove klase?",
      "options": [
        "public",
        "protected",
        "private"
      ],
      "answer": 2,
      "explanation": "Private skriva član izvana."
    },
    "sim": "objects",
    "source": "TVZ: 2 - OOP u Javi.pptx"
  },
  {
    "module": "enkapsulacija",
    "id": "j11",
    "title": "Validacija i odgovornost klase",
    "why": "Pravila trebaju biti unutar klase kojoj podaci pripadaju.",
    "concept": "Ako objekt predstavlja bankovni račun, on mora odgovarati za svoj saldo. Nije dobro dopustiti izravno `racun.stanje = -500` i validirati na svakom mjestu u ostatku programa. Umjesto toga, metoda `uplati` provjerava iznos, a `podigni` sprječava prekoračenje.\n\nOdgovornost klase znači da radi jednu razumljivu stvar. Korisnički unos Scanner-om obično smjestimo u konzolni sloj, a pravila računa u klasu `Racun`. Tako možemo testirati pravila bez interakcije s terminalom. `IllegalArgumentException` je unchecked iznimka koja često signalizira nevaljan argument metode.",
    "code": "public class Main {\n    static class Racun {\n        private double saldo;\n        void uplati(double iznos) {\n            if (iznos <= 0) throw new IllegalArgumentException(\"Iznos!\");\n            saldo += iznos;\n        }\n        double getSaldo() { return saldo; }\n    }\n    public static void main(String[] args) {\n        Racun r = new Racun();\n        r.uplati(25);\n        System.out.println(r.getSaldo());\n    }\n}",
    "walk": [
      "Novi Racun ima saldo 0",
      "Provjerava se iznos 25",
      "saldo postaje 25",
      "Ispisuje se 25.0"
    ],
    "pitfall": "Ne koristi setter ako dopušta proizvoljno postavljanje poslovno važnog polja.",
    "quiz": {
      "q": "Gdje treba provjeriti da uplata nije negativna?",
      "options": [
        "U klasi Racun",
        "Samo u main",
        "Samo u ispisu"
      ],
      "answer": 0,
      "explanation": "Invarijanta pripada klasi koja čuva saldo."
    },
    "sim": "objects",
    "source": "TVZ: 2 - OOP u Javi.pptx"
  },
  {
    "module": "nasljedivanje",
    "id": "j12",
    "title": "extends i IS-A",
    "why": "Zajedničko ponašanje može se podijeliti među blisko povezanim tipovima.",
    "concept": "Nasljeđivanje gradi odnos IS-A: `Pas` JE `Zivotinja`. `extends` omogućuje podklasi naslijediti dostupne članove nadklase i proširiti ih. Java dopušta nasljeđivanje jedne klase. Sve klase posredno nasljeđuju `java.lang.Object`.\n\nNe nasljeđuju se konstruktori; oni inicijaliziraju svoj dio objekta. Podklasa nije odvojeni objekt unutar nadklase: riječ je o jednoj instanci čiji se dijelovi inicijaliziraju kroz hijerarhiju. Nasljeđivanje nije način za ponovno korištenje nekoliko slučajnih metoda: ako A samo IMA B (HAS-A), prikladnija je kompozicija.\n\nPrimjer: `ElektricniAutomobil extends Vozilo`, ali `ElektricniAutomobil` IMA `Baterija`.",
    "code": "public class Main {\n    static class Zivotinja {\n        String ime;\n        Zivotinja(String ime) { this.ime = ime; }\n        String opis() { return \"Životinja: \" + ime; }\n    }\n    static class Pas extends Zivotinja {\n        Pas(String ime) { super(ime); }\n    }\n    public static void main(String[] args) {\n        Pas p = new Pas(\"Rex\");\n        System.out.println(p.opis());\n    }\n}",
    "walk": [
      "Instancira se Pas",
      "super(ime) inicijalizira Zivotinja dio",
      "Polje ime je Rex",
      "Naslijeđena opis() vraća tekst"
    ],
    "pitfall": "Ne modeliraj `Automobil extends Motor`: automobil IMA motor, nije motor.",
    "quiz": {
      "q": "Što najbolje opisuje `Pas extends Zivotinja`?",
      "options": [
        "HAS-A",
        "IS-A",
        "Nema odnosa"
      ],
      "answer": 1,
      "explanation": "Podklasa je specijalizacija nadklase."
    },
    "sim": "inheritance",
    "source": "TVZ: 2 - OOP u Javi.pptx"
  },
  {
    "module": "nasljedivanje",
    "id": "j13",
    "title": "super i lanac konstruktora",
    "why": "Bez poznavanja redoslijeda konstrukcije teško je razumjeti što radi extends.",
    "concept": "`super(...)` poziva odgovarajući konstruktor nadklase. U standardnim primjerima Jave 21 mora biti prva naredba konstruktora podklase ako je eksplicitno naveden. Ako ga nema, prevoditelj pokušava `super()` bez argumenata. Ako takav konstruktor ne postoji, kod se neće kompajlirati.\n\n`super.metoda()` poziva implementaciju nadklase; `this.metoda()` se odnosi na trenutni objekt i može uključivati dinamičko povezivanje. Razlikuj inicijalizaciju nadklase od dodatnog ponašanja podklase. Kod konstruktora vrijedi pravilo: izbjegavaj pozivanje nadjačivih metoda tijekom inicijalizacije jer podklasa može još biti nepotpuno inicijalizirana.",
    "code": "public class Main {\n    static class Vozilo {\n        Vozilo() { System.out.println(\"1. Vozilo\"); }\n    }\n    static class Auto extends Vozilo {\n        Auto() { super(); System.out.println(\"2. Auto\"); }\n    }\n    public static void main(String[] args) { new Auto(); }\n}",
    "walk": [
      "Poziva se new Auto()",
      "Auto konstruktor poziva super()",
      "Ispisuje se 1. Vozilo",
      "Nakon povratka ispisuje se 2. Auto"
    ],
    "pitfall": "`super()` nije poziv metode nego konstruktora; konstruktor sam po sebi nije naslijeđen.",
    "quiz": {
      "q": "Što se inicijalizira prvo?",
      "options": [
        "Tijelo konstruktora podklase",
        "Dio nadklase",
        "main ponovno"
      ],
      "answer": 1,
      "explanation": "Konstrukcijski lanac inicijalizira bazni dio prije tijela konstruktora podklase."
    },
    "sim": "inheritance",
    "source": "TVZ: 2 - OOP u Javi.pptx"
  },
  {
    "module": "polimorfizam",
    "id": "j14",
    "title": "@Override i dinamičko povezivanje",
    "why": "Poziv iste metode može dati različit rezultat ovisno o stvarnom tipu.",
    "concept": "Nadjačavanje (`overriding`) znači da podklasa daje svoju implementaciju naslijeđene metode s odgovarajućim potpisom. `@Override` nije obvezan za rad, ali prevoditelju naređuje provjeru da stvarno nadjačavaš metodu, pa otkriva tipfelere i neodgovarajući potpis.\n\n`Vozilo v = new Auto()` je dopušteno: varijabla ima referentni tip Vozilo, stvarni objekt je Auto. Poziv `v.opis()` bira implementaciju prema stvarnoj klasi objekta pri izvođenju, ako metoda nije static, private ili final i primjenjivo je nadjačavanje. Preopterećenje (`overloading`) znači isti naziv, ali drugi parametri, i odabire se pri kompajliranju.",
    "code": "public class Main {\n    static class Vozilo { String zvuk() { return \"Motor\"; } }\n    static class Auto extends Vozilo {\n        @Override String zvuk() { return \"Električni pogon\"; }\n    }\n    public static void main(String[] args) {\n        Vozilo v = new Auto();\n        System.out.println(v.zvuk());\n    }\n}",
    "walk": [
      "Referentni tip je Vozilo",
      "Stvarna instanca je Auto",
      "Dinamička otprema bira Auto.zvuk()",
      "Ispisuje Električni pogon"
    ],
    "pitfall": "`@Override` je Java anotacija, nije JavaDoc oznaka poput @param.",
    "quiz": {
      "q": "Koja metoda će se pozvati za `Vozilo v = new Auto(); v.zvuk()`?",
      "options": [
        "Vozilo.zvuk",
        "Auto.zvuk",
        "Obje"
      ],
      "answer": 1,
      "explanation": "Za nadjačanu instancijsku metodu presudan je stvarni tip objekta."
    },
    "sim": "inheritance",
    "source": "TVZ: 2 - OOP u Javi.pptx"
  },
  {
    "module": "polimorfizam",
    "id": "j15",
    "title": "Object, equals, hashCode i toString",
    "why": "Kolekcije i usporedbe ovise o logičkoj jednakosti, ne samo o referencama.",
    "concept": "`java.lang.Object` je korijen hijerarhije Java klasa. Standardni `equals` uspoređuje identitet, ali možeš ga nadjačati da uspoređuje podatke. Pravilo: ako dva objekta vrijede kao jednaka po `equals`, MORAJU imati jednak `hashCode`. Obrnuto ne mora vrijediti.\n\n`toString()` daje čitljiv tekst za ispis. Za vrijednosne modele `record` automatski implementira `equals`, `hashCode` i `toString`. U običnim klasama odaberi stabilna polja koja definiraju identitet. Pri upotrebi `HashSet` i `HashMap`, nemoj mijenjati polja koja utječu na hash dok je objekt ključ/skupni element.\n\nKod `Student a = ...; Student b = ...;`, `a == b` uspoređuje jesu li reference iste, a `a.equals(b)` može biti istinito za dvije instance s istim OIB-om.",
    "code": "import java.util.Objects;\npublic class Main {\n    static class Student {\n        final String oib;\n        Student(String oib) { this.oib = oib; }\n        @Override public boolean equals(Object obj) {\n            return obj instanceof Student s && Objects.equals(oib, s.oib);\n        }\n        @Override public int hashCode() { return Objects.hash(oib); }\n    }\n    public static void main(String[] args) {\n        Student a = new Student(\"123\");\n        Student b = new Student(\"123\");\n        System.out.println(a == b);\n        System.out.println(a.equals(b));\n    }\n}",
    "walk": [
      "new stvara dva objekta",
      "Reference su različite: == daje false",
      "equals uspoređuje OIB: true",
      "hashCode koristi isto identitetsko polje"
    ],
    "pitfall": "U prezentaciji je Object pogrešno naveden kao `java.util.Object`; ispravno je `java.lang.Object`.",
    "quiz": {
      "q": "Ako `a.equals(b)` vrati true, što mora vrijediti?",
      "options": [
        "a == b",
        "a.hashCode() == b.hashCode()",
        "a.toString() == b.toString()"
      ],
      "answer": 1,
      "explanation": "To je ugovor jednakosti i hash kodova."
    },
    "sim": "objects",
    "source": "TVZ: 2 - OOP u Javi.pptx"
  },
  {
    "module": "polimorfizam",
    "id": "j16",
    "title": "Upcasting, downcasting i instanceof",
    "why": "Za sigurno rukovanje različitim tipovima u istoj kolekciji.",
    "concept": "Upcasting (`Oblik o = new Krug()`) implicitno je siguran: svaka instanca Krug jest Oblik. Downcasting (`Krug k = (Krug) o`) zahtijeva stvarnu provjeru jer referenca Oblik može pokazivati i na Pravokutnik. Pogrešan cast baca `ClassCastException`.\n\n`instanceof` provjerava stvarni tip. U Javi 16+ obrazac `if (o instanceof Krug k)` istodobno provjerava tip i stvara varijablu `k` u odgovarajućem opsegu. Nemoj raditi downcasting ako je moguće posao obaviti polimorfnom metodom baznog tipa. To obično upućuje na čišći dizajn.",
    "code": "public class Main {\n    static class Oblik { }\n    static class Krug extends Oblik { int r = 3; }\n    public static void main(String[] args) {\n        Oblik oblik = new Krug();\n        if (oblik instanceof Krug k) {\n            System.out.println(\"Polumjer: \" + k.r);\n        }\n    }\n}",
    "walk": [
      "Oblik referenca pokazuje na Krug",
      "instanceof provjerava stvarni tip",
      "Varijabla k dobiva siguran tip Krug",
      "Ispisuje polumjer"
    ],
    "pitfall": "Nikad ne pretpostavi da svaki Oblik jest Krug.",
    "quiz": {
      "q": "Što uzrokuje krivi downcasting?",
      "options": [
        "ArithmeticException",
        "ClassCastException",
        "IOException"
      ],
      "answer": 1,
      "explanation": "JVM provjerava stvarnu klasu pri castingu."
    },
    "sim": "inheritance",
    "source": "TVZ: 2 - OOP u Javi.pptx"
  },
  {
    "module": "apstrakcija",
    "id": "j17",
    "title": "Apstraktna klasa i abstract metode",
    "why": "Zajednički oblik mora nametnuti pravilo specifičnim podklasama.",
    "concept": "Apstraktnu klasu označavaš `abstract`; ne možeš izravno pozvati `new` na njoj. Može imati atribute, konstruktor, obične i apstraktne metode. Apstraktna metoda nema tijelo, pa konkretne podklase moraju dati implementaciju.\n\nPrimjer: svaki `Oblik` ima `naziv()` kao zajedničko ponašanje, ali površina kruga i pravokutnika izračunava se različito. Referenca tipa Oblik može pokazivati na bilo koji konkretni oblik. Konstruktori apstraktne klase pozivaju se kao dio stvaranja podklase.\n\nApstraktna klasa prikladna je za zajedničko stanje i djelomičnu implementaciju u IS-A hijerarhiji.",
    "code": "public class Main {\n    static abstract class Oblik {\n        abstract double povrsina();\n    }\n    static class Krug extends Oblik {\n        double r;\n        Krug(double r) { this.r = r; }\n        @Override double povrsina() { return Math.PI * r * r; }\n    }\n    public static void main(String[] args) {\n        Oblik o = new Krug(2);\n        System.out.printf(\"%.2f%n\", o.povrsina());\n    }\n}",
    "walk": [
      "Oblik zadaje ugovor povrsina()",
      "Krug implementira račun",
      "Oblik referenca drži Krug",
      "Poziva se Krug.povrsina()"
    ],
    "pitfall": "Apstraktna klasa smije imati konstruktor, iako se ne instancira izravno.",
    "quiz": {
      "q": "Može li `new Oblik()` kada je Oblik abstract?",
      "options": [
        "Da",
        "Ne",
        "Samo u main"
      ],
      "answer": 1,
      "explanation": "Apstraktne klase zahtijevaju konkretne podklase."
    },
    "sim": "inheritance",
    "source": "TVZ: 2 - OOP u Javi.pptx"
  },
  {
    "module": "apstrakcija",
    "id": "j18",
    "title": "interface i implements",
    "why": "Više neovisnih tipova može obećati isto ponašanje.",
    "concept": "`interface` definira ugovor. Klasa ga ispunjava pomoću `implements`. Jedna klasa može implementirati više sučelja, ali naslijediti samo jednu klasu. Metode bez tijela u klasičnom sučelju implicitno su `public abstract`, a polja `public static final`.\n\nZa razliku od nasljeđivanja, sučelje često opisuje sposobnost, poput `PuniSe`, `Plivajuce` ili `Comparable`. U implementirajućoj klasi metode moraju biti `public` ako implementiraju javne metode sučelja. Referenca sučelja može pokazivati na bilo koju implementaciju.",
    "code": "public class Main {\n    interface PuniSe { void puni(int kwh); }\n    static class Baterija implements PuniSe {\n        int energija;\n        @Override public void puni(int kwh) { energija += kwh; }\n    }\n    public static void main(String[] args) {\n        Baterija b = new Baterija();\n        PuniSe p = b;\n        p.puni(8);\n        System.out.println(b.energija);\n    }\n}",
    "walk": [
      "Definira se sučelje PuniSe",
      "Baterija ispunjava njegov ugovor",
      "p pokazuje na objekt Baterija",
      "Puni 8 kWh i ispisuje 8"
    ],
    "pitfall": "Nemoj koristiti `extends` za implementaciju sučelja u običnoj klasi; koristi `implements`.",
    "quiz": {
      "q": "Koliko sučelja može implementirati jedna klasa?",
      "options": [
        "Samo jedno",
        "Više njih",
        "Nijedno ako extends neku klasu"
      ],
      "answer": 1,
      "explanation": "Java podržava više implements sučelja."
    },
    "sim": "inheritance",
    "source": "TVZ: 2 - OOP u Javi.pptx"
  },
  {
    "module": "apstrakcija",
    "id": "j19",
    "title": "default, static i private u sučeljima",
    "why": "Sučelja mogu dijeliti male implementacije bez kopiranja koda.",
    "concept": "Od Jave 8 sučelje može imati `default` metodu s tijelom. Implementirajuća klasa je može koristiti ili nadjačati. `static` metoda sučelja poziva se imenom sučelja, npr. `Provjera.prazno(tekst)`, a ne preko instance.\n\nOd Jave 9 sučelje može imati `private` pomoćne metode koje izravno koriste druge metode tog sučelja. Ako naslijediš dvije konfliktne `default` implementacije, klasa treba razriješiti konflikt vlastitim nadjačavanjem. `static` metode nisu polimorfne instancijske metode; ne nadjačavaju se na isti način.",
    "code": "public class Main {\n    interface Uredaj {\n        default String status() { return poruka(); }\n        private String poruka() { return \"Spreman\"; }\n        static boolean ispravanNapon(int v) { return v > 0; }\n    }\n    static class Punjač implements Uredaj { }\n    public static void main(String[] args) {\n        System.out.println(new Punjač().status());\n        System.out.println(Uredaj.ispravanNapon(12));\n    }\n}",
    "walk": [
      "Uredaj definira default status",
      "Privatna poruka skriva detalj",
      "Punjač nasljeđuje default",
      "static poziv ide preko Uredaj"
    ],
    "pitfall": "Default metoda ne može proizvoljno pristupati privatnim poljima implementirajuće klase.",
    "quiz": {
      "q": "Kako pozivamo statičku metodu sučelja?",
      "options": [
        "Uredaj.ispravanNapon(12)",
        "new Uredaj()",
        "Punjač.super.ispravanNapon(12)"
      ],
      "answer": 0,
      "explanation": "Static metode pripadaju samom sučelju."
    },
    "sim": "inheritance",
    "source": "TVZ: 2 - OOP u Javi.pptx"
  },
  {
    "module": "napredno",
    "id": "j20",
    "title": "final i omotačke klase",
    "why": "Razlikuj nepromjenjivu referencu, vrijednost i mogućnost nasljeđivanja.",
    "concept": "`final` polje možeš dodijeliti jednom; ali ako sadrži referencu na promjenjiv objekt, taj objekt i dalje možeš mijenjati. `final` metoda ne može se nadjačati, a `final` klasa ne može se naslijediti.\n\nOmotačke klase `Integer`, `Double`, `Boolean` i druge predstavljaju primitive kao objekte. Potrebne su u generičkim kolekcijama: `List<Integer>`, jer `List<int>` nije valjan. Java radi autoboxing/unboxing kada je prikladno. Omotačke klase poput Integer su final i imaju vlastito ponašanje usporedbe. Pazi: unboxing null-a baca NullPointerException.",
    "code": "import java.util.ArrayList;\nimport java.util.List;\npublic class Main {\n    public static void main(String[] args) {\n        final List<Integer> brojevi = new ArrayList<>();\n        brojevi.add(10);\n        brojevi.add(20);\n        System.out.println(brojevi.size());\n    }\n}",
    "walk": [
      "final zabranjuje ponovnu dodjelu brojevi",
      "Objekt ArrayList i dalje je promjenjiv",
      "Dva Integer elementa se dodaju",
      "size() vraća 2"
    ],
    "pitfall": "`final List` ne znači nepromjenjivu listu.",
    "quiz": {
      "q": "Što je valjano za `final List<Integer> l = new ArrayList<>()`?",
      "options": [
        "l.add(1)",
        "l = new ArrayList<>()",
        "Oboje"
      ],
      "answer": 0,
      "explanation": "Final čuva referencu, ali ne zabranjuje promjenu objekta."
    },
    "sim": "array",
    "source": "TVZ: 2 - OOP u Javi.pptx"
  },
  {
    "module": "napredno",
    "id": "j21",
    "title": "Lambda, funkcionalno sučelje i method reference",
    "why": "Kratko zapisivanje ponašanja olakšava filtriranje i sortiranje lista.",
    "concept": "Funkcionalno sučelje ima točno jednu apstraktnu metodu (ne brojeći metode Object i dopuštene default/static metode). `@FunctionalInterface` nalaže provjeru tog uvjeta. Lambda izraz `(a,b) -> a+b` daje implementaciju te jedne apstraktne metode.\n\nMethod reference `String::length` skraćuje lambdu koja poziva postojeću metodu. Za sortiranje `Comparator.comparingInt(String::length)` gradi komparator prema duljini teksta. Lambda nije univerzalna anonimna klasa: postoji razlika u `this`, identitetu i generiranju implementacije, pa je učenje kao funkcionalne implementacije preciznije.",
    "code": "import java.util.ArrayList;\nimport java.util.List;\npublic class Main {\n    public static void main(String[] args) {\n        List<String> rijeci = new ArrayList<>(List.of(\"Java\", \"OOP\", \"program\"));\n        rijeci.sort((a, b) -> Integer.compare(a.length(), b.length()));\n        System.out.println(rijeci);\n    }\n}",
    "walk": [
      "Lista ima tri riječi",
      "Lambda uspoređuje njihove duljine",
      "sort premješta kraće ispred dužih",
      "Ispisuje OOP, Java, program"
    ],
    "pitfall": "Ako lambda poziva postojeću metodu, razmisli može li `Comparator.comparingInt(String::length)` biti čitljiviji.",
    "quiz": {
      "q": "Koliko apstraktnih metoda ima funkcionalno sučelje?",
      "options": [
        "Jednu",
        "Dvije",
        "Neograničeno"
      ],
      "answer": 0,
      "explanation": "To je osnovni zahtjev funkcionalnog sučelja."
    },
    "sim": "array",
    "source": "TVZ: 2 - OOP u Javi.pptx"
  },
  {
    "module": "napredno",
    "id": "j22",
    "title": "record i kompakni konstruktor",
    "why": "Za modele podataka često nije potrebno pisati hrpu gettera i boilerplate koda.",
    "concept": "`record` je standardna značajka od Jave 16 (probna od Jave 14). Automatski dobiva privatna final polja, javne pristupne metode naziva komponente, konstruktor i `equals`, `hashCode`, `toString`. Record sam po sebi jest plitko nepromjenjiv: referenca komponenti ne može se zamijeniti, ali objekt na koji referira može biti promjenjiv.\n\nKompaktni konstruktor `public Student { ... }` validira argumente prije implicitne dodjele poljima. Metode `student.ime()` i `student.prosjek()` nisu klasični `getIme()` getteri. Record ne može naslijediti drugu klasu jer već proširuje Record.",
    "code": "public class Main {\n    record Student(String ime, double prosjek) {\n        Student {\n            if (prosjek < 1 || prosjek > 5) throw new IllegalArgumentException();\n        }\n    }\n    public static void main(String[] args) {\n        Student s = new Student(\"Ana\", 4.5);\n        System.out.println(s.ime());\n        System.out.println(s);\n    }\n}",
    "walk": [
      "Record definira komponente ime i prosjek",
      "Konstruktor validira raspon",
      "Dostupna je metoda ime()",
      "toString prikazuje vrijednosti komponenti"
    ],
    "pitfall": "Record nije automatski duboko immutable ako komponente sadrže promjenjive objekte.",
    "quiz": {
      "q": "Koja metoda čita komponentu `ime`?",
      "options": [
        "getIme()",
        "ime()",
        "readIme()"
      ],
      "answer": 1,
      "explanation": "Record automatski generira accessor s imenom komponente."
    },
    "sim": "objects",
    "source": "TVZ: 2 - OOP u Javi.pptx"
  },
  {
    "module": "napredno",
    "id": "j23",
    "title": "sealed, permits i non-sealed",
    "why": "Ograniči tko može proširivati osjetljivu hijerarhiju.",
    "concept": "`sealed` klasa ili sučelje deklarira dopuštene podtipove preko `permits` (ili dopuštene podtipove prevoditelj zaključi u nekim slučajevima). Dopuštena izravna podklasa označava se `final`, `sealed` ili `non-sealed`. `final` zatvara nastavak hijerarhije, `non-sealed` je ponovno otvara.\n\nSealed je standard od Jave 17. Koristan je u domenskim modelima s malim zatvorenim skupom varijanti: npr. `Poruka` može biti `Uspjeh` ili `Pogreska`. Kompajler može provjeravati iscrpnost obrasca u suvremenom `switch` izrazu.",
    "code": "public class Main {\n    sealed interface Rezultat permits Uspjeh, Pogreska { }\n    record Uspjeh(int vrijednost) implements Rezultat { }\n    record Pogreska(String poruka) implements Rezultat { }\n    public static void main(String[] args) {\n        Rezultat r = new Uspjeh(42);\n        String tekst = switch (r) {\n            case Uspjeh u -> \"OK \" + u.vrijednost();\n            case Pogreska p -> \"ERR \" + p.poruka();\n        };\n        System.out.println(tekst);\n    }\n}",
    "walk": [
      "Rezultat dopušta samo Uspjeh i Pogreska",
      "Recordi su final podtipovi",
      "Switch provjerava konkretan tip",
      "Uspjeh vraća OK 42"
    ],
    "pitfall": "Pattern matching switch je standardan u Javi 21; starije verzije mogu zahtijevati preview ili neće podržavati sintaksu.",
    "quiz": {
      "q": "Koja oznaka otvara nasljeđivanje podklase sealed tipa?",
      "options": [
        "private",
        "non-sealed",
        "throws"
      ],
      "answer": 1,
      "explanation": "non-sealed otvara daljnju hijerarhiju."
    },
    "sim": "inheritance",
    "source": "TVZ: 2 - OOP u Javi.pptx"
  },
  {
    "module": "uml",
    "id": "j24",
    "title": "UML: klase, atributi i metode",
    "why": "Dijagram pomaže isplanirati strukturu prije pisanja Java klasa.",
    "concept": "UML dijagram klase obično ima tri odjeljka: naziv, atribute, operacije. Pristup označavaju `+` (public), `-` (private), `#` (protected) i `~` (package). Strelica s praznim trokutom označava generalizaciju/nasljeđivanje, dok drugačiji odnosi predstavljaju asocijaciju, agregaciju i kompoziciju.\n\nNa slajdu s bankovnim sustavom Account je nadklasa, a Checking i Savings podklase. Prijenos dijagrama u Javu zahtijeva odluke o odgovornosti i kardinalnosti: oznaka `1..*` znači jedan ili više povezanih elemenata. UML use-case dijagram (akter i elipse) razlikuje se od dijagrama klasa.",
    "code": "public class Main {\n    static class Student {\n        private String ime;\n        Student(String ime) { this.ime = ime; }\n        public String getIme() { return ime; }\n    }\n    public static void main(String[] args) {\n        Student s = new Student(\"Ana\");\n        System.out.println(s.getIme());\n    }\n}",
    "walk": [
      "UML Student ima privatni atribut ime",
      "Konstruktor postavlja polje",
      "Public operacija getIme vraća podatak",
      "Main koristi javni API"
    ],
    "pitfall": "Na UML dijagramu nije svaki odnos nasljeđivanje; pogledaj vrstu strelice i dijamanta.",
    "quiz": {
      "q": "Koji simbol znači private u UML-u?",
      "options": [
        "+",
        "-",
        "#"
      ],
      "answer": 1,
      "explanation": "Minus označava privatnu vidljivost."
    },
    "sim": "inheritance",
    "source": "TVZ: 2 - OOP u Javi.pptx"
  },
  {
    "module": "uml",
    "id": "j25",
    "title": "Kompozicija, agregacija i održiv dizajn",
    "why": "Nije svaki odnos između klasa nasljeđivanje.",
    "concept": "Nasljeđivanje (IS-A): Krug je Oblik. Asocijacija: Student poznaje Kolegij. Agregacija (prazni dijamant): labav odnos cjeline i dijelova koji mogu postojati odvojeno. Kompozicija (puni dijamant): jak odnos cjeline i dijelova, pri čemu se životni ciklus dijelova obično veže uz cjelinu. U stvarnom Java kodu nijedan od tih UML odnosa nema posebnu ključnu riječ: često ih implementiraš poljima/referencama.\n\nFavoriziraj kompoziciju kada želiš zamjenjiv modul. Formula Student VCU IMA CAN transceiver, ali VCU NIJE CAN transceiver. To je bolje modelirati poljem tipa `CanBus` nego nasljeđivanjem. Svaka klasa treba jasnu odgovornost (separation of concerns).",
    "code": "public class Main {\n    static class Baterija { int postotak = 80; }\n    static class Vozilo {\n        private final Baterija baterija;\n        Vozilo(Baterija baterija) { this.baterija = baterija; }\n        int stanjeBaterije() { return baterija.postotak; }\n    }\n    public static void main(String[] args) {\n        Vozilo v = new Vozilo(new Baterija());\n        System.out.println(v.stanjeBaterije());\n    }\n}",
    "walk": [
      "Baterija je zaseban tip",
      "Vozilo prima referencu na Baterija",
      "Vozilo ima bateriju, nije baterija",
      "Delegira čitanje postotka"
    ],
    "pitfall": "Nemoj stvarati duboke extends hijerarhije radi jedinog poziva metode iz drugog objekta.",
    "quiz": {
      "q": "Koji odnos opisuje `Vozilo ima Bateriju`?",
      "options": [
        "IS-A",
        "HAS-A",
        "Override"
      ],
      "answer": 1,
      "explanation": "Riječ „ima” označava vezu preko kompozicije/asocijacije."
    },
    "sim": "inheritance",
    "source": "TVZ: 2 - OOP u Javi.pptx"
  },
  {
    "module": "iznimke",
    "id": "j26",
    "title": "Throwable, stack trace, checked i unchecked",
    "why": "Greške su objekti i imaju tip; čitanje stack tracea otkriva gdje je problem.",
    "concept": "Iznimka je objekt koji označava iznimno stanje. Korijen je `Throwable`; glavne grane su `Error` i `Exception`, pri čemu `RuntimeException` označava unchecked iznimke. Checked iznimke (npr. `IOException`) prevoditelj zahtijeva uhvatiti ili deklarirati; unchecked (`NullPointerException`, `ArithmeticException`, `InputMismatchException`) to ne zahtijevaju.\n\nStack trace sadrži tip, poruku i okvir poziva: `at Main.podijeli(Main.java:...)`. Gornji okvir često je mjesto gdje je iznimka nastala, a sljedeći pokazuju put poziva. Nemoj „pogađati” je li nešto checked prema tome je li izazvano korisničkim unosom: odlučuje hijerarhija tipova, ne uzrok pogreške.\n\n`Error` obično nije nešto što aplikacija pokušava rutinski oporaviti kroz catch.",
    "code": "public class Main {\n    static int podijeli(int a, int b) { return a / b; }\n    public static void main(String[] args) {\n        try {\n            System.out.println(podijeli(8, 0));\n        } catch (ArithmeticException e) {\n            System.out.println(e.getClass().getSimpleName());\n        }\n    }\n}",
    "walk": [
      "Poziv podijeli(8,0)",
      "Izvršava se 8 / 0 i nastaje ArithmeticException",
      "Kontrola preskače na catch",
      "Ispisuje se ArithmeticException"
    ],
    "pitfall": "`InputMismatchException` je unchecked iako nastaje zbog vanjskog unosa.",
    "quiz": {
      "q": "Je li IOException checked?",
      "options": [
        "Da",
        "Ne",
        "Ovisi o programu"
      ],
      "answer": 0,
      "explanation": "IOException nasljeđuje Exception, ne RuntimeException."
    },
    "sim": "exceptions",
    "source": "TVZ: 3 - Iznimke u Javi.pptx"
  },
  {
    "module": "iznimke",
    "id": "j27",
    "title": "try/catch/finally i multi-catch",
    "why": "Program se može smisleno oporaviti od očekivanog problema.",
    "concept": "`try` sadržava potencijalno rizične naredbe. Nakon bacanja iznimke preskaču se preostale naredbe tog try bloka i traži se prvi odgovarajući `catch`. Nakon catcha program nastavlja nakon cijelog try/catch konstrukta, ako se ne dogodi novo bacanje ili prekid. `finally` služi čišćenju i izvršava se nakon try/catch u uobičajenim okolnostima, uključujući `return`; nije zajamčen pri padu JVM-a ili prisilnom prekidu.\n\nMožeš imati više specifičnih catch blokova. `catch (IOException | SQLException e)` radi multi-catch kada se obrada podudara i tipovi nisu u odnosu podtip-nadtip. Bolje uhvatiti specifičnu iznimku nego generički Exception bez plana oporavka.",
    "code": "public class Main {\n    public static void main(String[] args) {\n        try {\n            int broj = Integer.parseInt(\"abc\");\n            System.out.println(broj);\n        } catch (NumberFormatException e) {\n            System.out.println(\"Neispravan unos\");\n        } finally {\n            System.out.println(\"Kraj pokušaja\");\n        }\n    }\n}",
    "walk": [
      "parseInt baca NumberFormatException",
      "Redak println(broj) se preskače",
      "Catch ispisuje Neispravan unos",
      "Finally ispisuje Kraj pokušaja"
    ],
    "pitfall": "Prazan catch može tiho sakriti ozbiljne probleme i otežati debugging.",
    "quiz": {
      "q": "Izvodi li se finally nakon uspješnog try?",
      "options": [
        "U pravilu da",
        "Nikad",
        "Samo pri IOException"
      ],
      "answer": 0,
      "explanation": "Finally se obično izvršava neovisno o iznimci."
    },
    "sim": "exceptions",
    "source": "TVZ: 3 - Iznimke u Javi.pptx"
  },
  {
    "module": "iznimke",
    "id": "j28",
    "title": "throw, throws i vlastite iznimke",
    "why": "Jasna poruka i tip iznimke bolji su od tihog nevaljanog stanja.",
    "concept": "`throw` stvarno baca objekt iznimke: `throw new IllegalArgumentException(\"Iznos\")`. `throws` u potpisu metode deklarira koje checked iznimke metoda može proslijediti pozivatelju. Jedno nije zamjena za drugo.\n\nVlastita checked iznimka nastaje s `extends Exception`, a unchecked s `extends RuntimeException`. Konstruktor koji prima `Throwable cause` čuva izvornu iznimku kada je umotavaš u domensku. Koristi smislena imena: `NeispravanOibException`, `NedostupnaBazaException`. Kod checked iznimki pozivatelj mora koristiti try/catch ili throws.\n\nU slide-primjerima primijeti `setEmail` validaciju, potom `InvalidEmailException`, i na kraju vezane iznimke kod pristupa bazi.",
    "code": "public class Main {\n    static class NeispravanNaponException extends Exception {\n        NeispravanNaponException(String poruka) { super(poruka); }\n    }\n    static void provjeri(int napon) throws NeispravanNaponException {\n        if (napon < 0) throw new NeispravanNaponException(\"Negativan napon\");\n    }\n    public static void main(String[] args) {\n        try {\n            provjeri(-2);\n        } catch (NeispravanNaponException e) {\n            System.out.println(e.getMessage());\n        }\n    }\n}",
    "walk": [
      "Definira se checked iznimka",
      "Metoda deklarira throws",
      "Uvjet -2 < 0 baca objekt",
      "Catch ispisuje poruku"
    ],
    "pitfall": "Čuvaj izvorni cause ako novu iznimku stvaraš na temelju druge.",
    "quiz": {
      "q": "Koja riječ stvarno baca objekt iznimke?",
      "options": [
        "throws",
        "throw",
        "catch"
      ],
      "answer": 1,
      "explanation": "throw je naredba; throws je deklaracija."
    },
    "sim": "exceptions",
    "source": "TVZ: 3 - Iznimke u Javi.pptx"
  },
  {
    "module": "iznimke",
    "id": "j29",
    "title": "try-with-resources i zatvaranje",
    "why": "Datoteke i tokovi moraju se zatvoriti i kada dođe do pogreške.",
    "concept": "Resurs koji implementira `AutoCloseable` možeš deklarirati u zagradama `try (...)`. Java ga automatski zatvara po završetku bloka, čak i pri iznimci. `BufferedReader` je uobičajen primjer. Za razliku od ručnog finally, ovaj oblik pouzdanije upravlja zatvaranjem više resursa.\n\nObično je bolje pozvati `Files.readString(path)` za jednostavne potrebe nego ručno izgrađivati FileReader, ovisno o veličini i vrsti podataka. Ako više resursa baca iznimke tijekom zatvaranja, Java može zadržati originalnu iznimku i dodatne kao suppressed. `getSuppressed()` pomaže dijagnostici.\n\nZa GitHub Pages ne možeš čitati lokalne datoteke korisnika kao Java program: primjere s datotekama izvršavaj lokalno ili u ograničenom Java runneru.",
    "code": "import java.io.BufferedReader;\nimport java.io.StringReader;\npublic class Main {\n    public static void main(String[] args) throws Exception {\n        try (BufferedReader br = new BufferedReader(new StringReader(\"A\\nB\"))) {\n            System.out.println(br.readLine());\n            System.out.println(br.readLine());\n        }\n    }\n}",
    "walk": [
      "Stvara se BufferedReader oko StringReader",
      "Čita se prvi redak A",
      "Čita se drugi redak B",
      "AutoCloseable zatvara resurs"
    ],
    "pitfall": "Ispravno ime sučelja je `AutoCloseable`, a ne `AutoClosable`.",
    "quiz": {
      "q": "Što mora implementirati resurs za try-with-resources?",
      "options": [
        "Runnable",
        "AutoCloseable",
        "Comparable"
      ],
      "answer": 1,
      "explanation": "Resurs deklariran u try zaglavlju mora biti AutoCloseable."
    },
    "sim": "exceptions",
    "source": "TVZ: 3 - Iznimke u Javi.pptx"
  },
  {
    "module": "javadoc",
    "id": "j30",
    "title": "Javadoc komentari, oznake i anotacije",
    "why": "Dokumentacija je dio API-ja i omogućuje drugima koristiti tvoje metode.",
    "concept": "Java razlikuje jednolinijski komentar `//`, obični blok `/* ... */` i dokumentacijski komentar `/** ... */`. Alat `javadoc` iz dokumentacijskog komentara generira HTML API. Iznad javne metode napiši jednu jasnu rečenicu što metoda radi, zatim po potrebi `@param` za svaki parametar, `@return` za rezultat i `@throws` za iznimku.\n\n`@see` povezuje s drugim API elementom, `{@link ...}` stvara poveznicu u tekućem tekstu, a `{@code ...}` prikazuje kod. Razlikuj Javadoc oznaku `@param` od Java anotacije `@Override`: anotacija utječe na obradu izvornog koda/kompajler, dok je Javadoc komentar dokumentacija.\n\nDokumentiraj *ugovor*: dozvoljene raspone, što se vraća i što se događa pri grešci. Nemoj samo ponavljati naziv metode.",
    "code": "public class Main {\n    /**\n     * Izračunava zbroj dva cijela broja.\n     * @param a prvi pribrojnik\n     * @param b drugi pribrojnik\n     * @return njihov zbroj\n     */\n    public static int zbroji(int a, int b) { return a + b; }\n    public static void main(String[] args) {\n        System.out.println(zbroji(2, 4));\n    }\n}",
    "walk": [
      "Javadoc opisuje zbroji",
      "@param a i b dokumentiraju argumente",
      "@return opisuje rezultat",
      "Poziv zbroji(2,4) vraća 6"
    ],
    "pitfall": "`@Override` nije Javadoc oznaka; piše se izvan komentara iznad metode.",
    "quiz": {
      "q": "Koji komentar javadoc alat koristi?",
      "options": [
        "//",
        "/* ... */",
        "/** ... */"
      ],
      "answer": 2,
      "explanation": "Dokumentacijski komentar počinje s /**."
    },
    "sim": "trace",
    "source": "Dodatno: Javadoc, službena Oracle dokumentacija"
  },
  {
    "module": "javadoc",
    "id": "j31",
    "title": "Generiranje HTML dokumentacije",
    "why": "Želiš sam generirati stranice dokumentacije iz svojih Java klasa.",
    "concept": "Instaliraj JDK (ne samo JRE) i provjeri `javadoc -version` ili `javadoc --help`. Iz direktorija s Main.java možeš pokrenuti `javadoc -encoding UTF-8 -charset UTF-8 -d docs Main.java`. Alat generira HTML, a početnu stranicu otvoriš u pregledniku preko `docs/index.html`.\n\nAko radiš s paketima, dokumentaciju generiraj nad izvornim direktorijem: `javadoc -d docs -sourcepath src -subpackages hr.tvz.lab`. Datoteka `src/hr/tvz/lab/Racun.java` mora početi s `package hr.tvz.lab;`. Po potrebi `-Xdoclint:all` provjerava probleme; upozorenja ne znače automatski neuspjeh.\n\nPowerShell: `javadoc -d docs Main.java` pa `Start-Process .\\docs\\index.html`. U terminalu Linux/macOS otvoriš datoteku odgovarajućom aplikacijom. Pri verzijama Jave i opsegu modifikatora razlikuju se javni i ne-javni članovi u izlazu.",
    "code": "/** Primjer dokumentirane aplikacije. */\npublic class Main {\n    /**\n     * Vraća kvadrat ulaznog broja.\n     * @param broj vrijednost za kvadriranje\n     * @return kvadrat argumenta\n     */\n    public static int kvadrat(int broj) { return broj * broj; }\n    public static void main(String[] args) {\n        System.out.println(kvadrat(5));\n    }\n}",
    "walk": [
      "Spremi primjer kao Main.java",
      "Pokreni javadoc -d docs Main.java",
      "Generira se docs/index.html",
      "Otvori docs/index.html preglednikom"
    ],
    "pitfall": "Ako kompilator ne nalazi javnu klasu, provjeri podudara li se naziv datoteke s javnom klasom.",
    "quiz": {
      "q": "Što radi opcija `-d docs`?",
      "options": [
        "Briše docs",
        "Postavlja izlazni direktorij HTML dokumentacije",
        "Pokreće main"
      ],
      "answer": 1,
      "explanation": "`-d` definira mapu za generirane HTML datoteke."
    },
    "sim": "trace",
    "source": "Dodatno: službeni Oracle javadoc vodič"
  },
  {
    "module": "projekt",
    "id": "j32",
    "title": "Paketi, import i više klasa",
    "why": "Nakon jedne datoteke slijedi održiv projekt s mapama i modularnim kodom.",
    "concept": "Praktični projekt razdvoji u pakete prema odgovornostima. Na početku `src/hr/tvz/lab/model/Racun.java` piši `package hr.tvz.lab.model;`, a u drugoj klasi `import hr.tvz.lab.model.Racun;`. `import` omogućuje kraći naziv tipa; ne kopira datoteku niti izvršava kod.\n\nU jednostavnom projektu s paketima koristi `javac -d out src/hr/tvz/lab/model/Racun.java src/hr/tvz/lab/Main.java` i `java -cp out hr.tvz.lab.Main`. U javnim repozitorijima testove drži odvojeno od produkcijskog koda. Git prati promjene, ali generirani `.class` i dokumentaciju po potrebi izuzmi pomoću `.gitignore`.\n\nZa višeklasne projekte obično se koristi Gradle ili Maven, no za razumijevanje Java kompajliranja dovoljno je prvo savladati javac/java. Početni projekt može ostati bez ovisnosti.",
    "code": "import java.util.ArrayList;\nimport java.util.List;\npublic class Main {\n    public static void main(String[] args) {\n        List<String> datoteke = new ArrayList<>();\n        datoteke.add(\"src/Main.java\");\n        datoteke.add(\"README.md\");\n        System.out.println(datoteke.size());\n    }\n}",
    "walk": [
      "import omogućuje tipove List i ArrayList",
      "Stvara se lista putanja",
      "Daju joj se dva elementa",
      "Ispisuje 2"
    ],
    "pitfall": "`package` mora biti na početku izvornog Java koda, prije import deklaracija.",
    "quiz": {
      "q": "Što radi import?",
      "options": [
        "Umeće izvršni kod druge datoteke",
        "Dopušta koristiti naziv tipa bez punog paketa",
        "Automatski instalira biblioteku"
      ],
      "answer": 1,
      "explanation": "Import omogućuje korištenje kratkog imena tipa."
    },
    "sim": "trace",
    "source": "Dodatno: organizacija Java projekta"
  }
];
