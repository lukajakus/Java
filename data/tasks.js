export const tasks = [
  {
    "module": "osnove",
    "id": "t01",
    "title": "Prvi Java ispis",
    "level": "Početna",
    "kind": "Napiši program",
    "prompt": "Ispiši točno: Pozdrav, TVZ!",
    "starter": "public class Main {\n    public static void main(String[] args) {\n        // napiši ispis\n    }\n}",
    "solution": "public class Main { public static void main(String[] args) { System.out.println(\"Pozdrav, TVZ!\"); } }",
    "expected": "Pozdrav, TVZ!",
    "hints": [
      "Pronađi main",
      "Koristi System.out.println",
      "String mora biti u navodnicima."
    ],
    "check": "output"
  },
  {
    "module": "osnove",
    "id": "t02",
    "title": "Zbroj i ostatak",
    "level": "Srednja",
    "kind": "Dopuni kod",
    "prompt": "Za a=7 i b=3 ispiši zbroj i ostatak dijeljenja, svaki u novom retku.",
    "starter": "public class Main { public static void main(String[] args) { int a=7,b=3; /* dopuni */ } }",
    "solution": "public class Main { public static void main(String[] args) { int a=7; int b=3; System.out.println(a+b); System.out.println(a%b); } }",
    "expected": "10\n1",
    "hints": [
      "Operator + zbraja",
      "Operator % daje ostatak",
      "Ispiši a+b i a%b odvojeno."
    ],
    "check": "output"
  },
  {
    "module": "osnove",
    "id": "t03",
    "title": "Ispravi decimalno dijeljenje",
    "level": "Početna",
    "kind": "Ispravi pogrešku",
    "prompt": "Program treba ispisati 2.5, a ne 2.0. Ispravi račun.",
    "starter": "public class Main { public static void main(String[] args) { double x=5/2; System.out.println(x); } }",
    "solution": "public class Main { public static void main(String[] args) { System.out.println(5.0 / 2); } }",
    "expected": "2.5",
    "hints": [
      "Problem je u tipu operanada",
      "Bar jedan operand treba double",
      "Koristi 5.0/2."
    ],
    "check": "output"
  },
  {
    "module": "tok",
    "id": "t04",
    "title": "Paran ili neparan",
    "level": "Početna",
    "kind": "Napiši program",
    "prompt": "Za n=12 ispiši `paran` ili `neparan` koristeći if ili ternarni operator.",
    "starter": "public class Main { public static void main(String[] args) { int n=12; } }",
    "solution": "public class Main { public static void main(String[] args) { int n=12; System.out.println(n%2==0 ? \"paran\" : \"neparan\"); } }",
    "expected": "paran",
    "hints": [
      "Parnost provjerava ostatak",
      "n % 2 == 0",
      "if/else ili ? : mogu riješiti problem."
    ],
    "check": "output"
  },
  {
    "module": "tok",
    "id": "t05",
    "title": "Zbroj od 1 do 5",
    "level": "Srednja",
    "kind": "Dopuni kod",
    "prompt": "Pomoću petlje izračunaj i ispiši zbroj brojeva 1 do 5.",
    "starter": "public class Main { public static void main(String[] args) { int suma=0; /* petlja */ } }",
    "solution": "public class Main { public static void main(String[] args) { int z=0; for(int i=1;i<=5;i++) z+=i; System.out.println(z); } }",
    "expected": "15",
    "hints": [
      "Počni s ukupno 0",
      "Granice i=1 do i<=5",
      "U tijelu koristi suma += i."
    ],
    "check": "output"
  },
  {
    "module": "tok",
    "id": "t06",
    "title": "Metoda koja vraća maksimum",
    "level": "Srednja",
    "kind": "Napiši metodu",
    "prompt": "Napiši statičku metodu veci(int a,int b) koja vraća veći broj; ispiši rezultat za 9 i 4.",
    "starter": "public class Main {\n static int veci(int a,int b) { /* return */ }\n public static void main(String[] args) { System.out.println(veci(9,4)); }\n}",
    "solution": "public class Main { static int veci(int a,int b){return Math.max(a,b);} public static void main(String[] args){System.out.println(veci(9,4));} }",
    "expected": "9",
    "hints": [
      "Povratni tip je int",
      "Usporedi a > b",
      "Vrati a ili b naredbom return."
    ],
    "check": "output"
  },
  {
    "module": "kolekcije",
    "id": "t07",
    "title": "Maksimum niza",
    "level": "Početna",
    "kind": "Dopuni kod",
    "prompt": "Za niz {4,9,2} ispiši najveću vrijednost.",
    "starter": "public class Main { public static void main(String[] args) { int[] a={4,9,2}; /* max */ } }",
    "solution": "public class Main { public static void main(String[] args) { int[] a={4,9,2}; int max=a[0]; for(int x:a) if(x>max) max=x; System.out.println(max); } }",
    "expected": "9",
    "hints": [
      "Počni od prvog elementa",
      "for-each čita svaki int",
      "Ako je x veći od max, ažuriraj max."
    ],
    "check": "output"
  },
  {
    "module": "kolekcije",
    "id": "t08",
    "title": "Pronađi najmanji element liste",
    "level": "Srednja",
    "kind": "Napiši program",
    "prompt": "U List<Integer> s vrijednostima 5, 2, 8 pronađi minimum bez Collections.min.",
    "starter": "import java.util.*; public class Main { public static void main(String[] args) { List<Integer> lista=new ArrayList<>(List.of(5,2,8)); } }",
    "solution": "import java.util.*; public class Main { public static void main(String[] args) { List<Integer> brojevi=new ArrayList<>(List.of(5,2,8)); int min=brojevi.get(0); for(int b:brojevi) if(b<min) min=b; System.out.println(min); } }",
    "expected": "2",
    "hints": [
      "Prvi element je početni minimum",
      "for (int broj : lista)",
      "if(broj < min) min = broj."
    ],
    "check": "output"
  },
  {
    "module": "kolekcije",
    "id": "t09",
    "title": "Brojanje riječi regexom",
    "level": "Napredna",
    "kind": "Pronađi i ispravi",
    "prompt": "Napiši prebrojavanje cijele riječi java neovisno o velikim slovima. Za `Java, java! OOP Java.` ispis mora biti 3.",
    "starter": "public class Main { public static void main(String[] args) { String tekst=\"Java, java! OOP Java.\"; /* split + count */ } }",
    "solution": "public class Main { static int broji(String tekst,String kljucna) { int n=0; for(String token:tekst.toLowerCase().split(\"\\\\W+\")) if(token.equals(kljucna.toLowerCase())) n++; return n;} public static void main(String[] args) { System.out.println(broji(\"Java, java! OOP Java.\",\"java\"));} }",
    "expected": "3",
    "hints": [
      "toLowerCase ujednači velika/mala slova",
      "split(\"\\\\W+\") dijeli po nizovima znakova koji nisu slova/brojke/underscore",
      "for-each i equals uspoređuju svaki token s ključnom riječi."
    ],
    "check": "output"
  },
  {
    "module": "objekti",
    "id": "t10",
    "title": "Napravi klasu Knjiga",
    "level": "Početna",
    "kind": "Napiši klasu",
    "prompt": "Napravi klasu Knjiga s atributom naslov i konstruktorom koji ga postavlja; ispiši Java 21.",
    "starter": "public class Main { static class Knjiga { /* polje i konstruktor */ } public static void main(String[] args) { } }",
    "solution": "public class Main { static class Knjiga {String naslov; Knjiga(String n){naslov=n;}} public static void main(String[] args){Knjiga k=new Knjiga(\"Java 21\");System.out.println(k.naslov);} }",
    "expected": "Java 21",
    "hints": [
      "Atribut String naslov",
      "Konstruktor nema povratni tip",
      "this.naslov = naslov pri istom imenu."
    ],
    "check": "output"
  },
  {
    "module": "objekti",
    "id": "t11",
    "title": "Dvije instance, različito stanje",
    "level": "Srednja",
    "kind": "Predvidi i provjeri",
    "prompt": "Kreiraj dva brojaca; prvi povećaj dvaput, drugi jednom. Ispiši vrijednosti razdvojene zarezom.",
    "starter": "public class Main { static class Brojac { int vrijednost; void povecaj(){vrijednost++;} } public static void main(String[] args) { } }",
    "solution": "public class Main { static class Brojac {int vrijednost;void povecaj(){vrijednost++;}} public static void main(String[] args){Brojac a=new Brojac(), b=new Brojac();a.povecaj();a.povecaj();b.povecaj();System.out.println(a.vrijednost+\",\"+b.vrijednost);} }",
    "expected": "2,1",
    "hints": [
      "Dva new poziva = dva objekta",
      "Metoda djeluje na svoj objekt",
      "Svaki Brojac ima zasebno polje."
    ],
    "check": "output"
  },
  {
    "module": "objekti",
    "id": "t12",
    "title": "Statičko brojanje objekata",
    "level": "Napredna",
    "kind": "Implementiraj",
    "prompt": "Klasa Sensor treba pratiti koliko je objekata stvoreno putem static polja. Nakon tri instance ispiši 3.",
    "starter": "public class Main { static class Sensor { /* static polje i konstruktor */ } public static void main(String[] args) { } }",
    "solution": "public class Main { static class Sensor {static int ukupno;Sensor(){ukupno++;}} public static void main(String[] args){new Sensor();new Sensor();new Sensor();System.out.println(Sensor.ukupno);} }",
    "expected": "3",
    "hints": [
      "static je zajednički za sve objekte",
      "Povećaj u konstruktoru",
      "Pristupi preko Sensor.ukupno."
    ],
    "check": "output"
  },
  {
    "module": "enkapsulacija",
    "id": "t13",
    "title": "Valjanost temperature",
    "level": "Početna",
    "kind": "Napiši klasu",
    "prompt": "U klasi Temperatura drži private c, odbij temperature ispod -273 i za 21 ispiši vrijednost.",
    "starter": "public class Main { static class Temperatura { private int c; /* metode */ } public static void main(String[] args) { } }",
    "solution": "public class Main { static class Temperatura {private int c; void postavi(int t){if(t < -273)throw new IllegalArgumentException();c=t;} int get(){return c;}} public static void main(String[] args){Temperatura t=new Temperatura();t.postavi(21);System.out.println(t.get());} }",
    "expected": "21",
    "hints": [
      "Polje ne treba public",
      "Metoda postavi validira",
      "Getter vraća pohranjenu vrijednost."
    ],
    "check": "output"
  },
  {
    "module": "enkapsulacija",
    "id": "t14",
    "title": "Zaštiti saldo",
    "level": "Srednja",
    "kind": "Dopuni kod",
    "prompt": "Racun ima saldo 30. Metoda podigni(12) smanjuje ga samo ako je iznos dopušten; ispiši 18.",
    "starter": "public class Main { static class Racun {private int saldo=30; /* podigni, getter */} public static void main(String[] args){} }",
    "solution": "public class Main { static class Racun {private int stanje=30; void podigni(int n){if(n<0||n>stanje)throw new IllegalArgumentException();stanje-=n;} int stanje(){return stanje;}} public static void main(String[] args){Racun r=new Racun();r.podigni(12);System.out.println(r.stanje());} }",
    "expected": "18",
    "hints": [
      "Odbij negativan iznos",
      "Odbij iznos veći od salda",
      "Nakon provjere oduzmi iznos."
    ],
    "check": "output"
  },
  {
    "module": "enkapsulacija",
    "id": "t15",
    "title": "Immutable studentski identitet",
    "level": "Napredna",
    "kind": "Napiši klasu",
    "prompt": "Napravi nepromjenjivo polje ime, validiraj prazno ime u konstruktoru i ispiši `Student: Ana`.",
    "starter": "public class Main { static class Student { /* final ime, konstruktor, opis */ } public static void main(String[] args) {} }",
    "solution": "public class Main { static class Student {private final String ime;Student(String ime){if(ime==null||ime.isBlank())throw new IllegalArgumentException();this.ime=ime;}String opis(){return \"Student: \"+ime;}} public static void main(String[] args){System.out.println(new Student(\"Ana\").opis());} }",
    "expected": "Student: Ana",
    "hints": [
      "final postavljaš najkasnije u konstruktoru",
      "String.isBlank prepoznaje bjeline",
      "Nema settera."
    ],
    "check": "output"
  },
  {
    "module": "nasljedivanje",
    "id": "t16",
    "title": "Mačka JE životinja",
    "level": "Početna",
    "kind": "Dopuni kod",
    "prompt": "Napravi Macka extends Zivotinja, nadjačaj zvuk i ispiši Mijau.",
    "starter": "public class Main { static class Zivotinja {String zvuk(){return \"?\";}} /* Macka */ public static void main(String[] args){} }",
    "solution": "public class Main {static class Zivotinja{String zvuk(){return \"?\";}}static class Macka extends Zivotinja{@Override String zvuk(){return \"Mijau\";}}public static void main(String[] args){System.out.println(new Macka().zvuk());}}",
    "expected": "Mijau",
    "hints": [
      "Upotrijebi extends",
      "Dodaj @Override",
      "Pozovi zvuk na novom objektu Macka."
    ],
    "check": "output"
  },
  {
    "module": "nasljedivanje",
    "id": "t17",
    "title": "Konstruktor i super",
    "level": "Srednja",
    "kind": "Ispravi konstruktor",
    "prompt": "Nadklasa Vozilo nema prazan konstruktor. Izvedi Auto(String m) koji pravilno poziva super(m) i ispiši EV.",
    "starter": "public class Main { static class Vozilo{String model;Vozilo(String m){model=m;}} static class Auto extends Vozilo{Auto(String m){/* ? */}} public static void main(String[] args){} }",
    "solution": "public class Main {static class Vozilo{String model;Vozilo(String m){model=m;}}static class Auto extends Vozilo{Auto(String m){super(m);}}public static void main(String[] args){System.out.println(new Auto(\"EV\").model);}}",
    "expected": "EV",
    "hints": [
      "Nadklasa traži String",
      "super(m) je poziv konstruktoru",
      "Poziv mora biti na početku konstruktora u Javi 21."
    ],
    "check": "output"
  },
  {
    "module": "nasljedivanje",
    "id": "t18",
    "title": "HAS-A: automobil ima bateriju",
    "level": "Napredna",
    "kind": "Modeliraj",
    "prompt": "Automobil ima Baterija objekt; bez nasljeđivanja ispiši njezinih 85%.",
    "starter": "public class Main { /* Baterija, Auto */ public static void main(String[] args){} }",
    "solution": "public class Main {static class Baterija{int posto=85;}static class Auto{Baterija b=new Baterija();int baterija(){return b.posto;}}public static void main(String[] args){System.out.println(new Auto().baterija());}}",
    "expected": "85",
    "hints": [
      "Auto nije Baterija",
      "Koristi polje tipa Baterija",
      "Metoda na Auto delegira čitanje polju."
    ],
    "check": "output"
  },
  {
    "module": "polimorfizam",
    "id": "t19",
    "title": "Polje različitih oblika",
    "level": "Početna",
    "kind": "Polimorfizam",
    "prompt": "U polje tipa Oblik pohrani Kvadrat(16) i Pravokutnik(12), pa istom petljom ispiši njihove površine.",
    "starter": "public class Main { static class Oblik {int povrsina(){return 0;}} /* podklase */ public static void main(String[] args){} }",
    "solution": "public class Main{static class Oblik{int povrsina(){return 0;}}static class Kvadrat extends Oblik{@Override int povrsina(){return 16;}}static class Pravokutnik extends Oblik{@Override int povrsina(){return 12;}}public static void main(String[]args){Oblik[] a={new Kvadrat(),new Pravokutnik()};for(Oblik o:a)System.out.println(o.povrsina());}}",
    "expected": "16\n12",
    "hints": [
      "Obje klase extends Oblik",
      "Override metode povrsina",
      "Jedna for-each petlja radi za obje."
    ],
    "check": "output"
  },
  {
    "module": "polimorfizam",
    "id": "t20",
    "title": "Reference i logička jednakost",
    "level": "Srednja",
    "kind": "Predvidi izlaz",
    "prompt": "Napravi dva record Student s istim komponentama, ispiši == i equals.",
    "starter": "public class Main { record Student(String oib,String ime){} public static void main(String[] args){} }",
    "solution": "import java.util.*; public class Main{record Student(String oib,String ime){}public static void main(String[]args){Student a=new Student(\"123\",\"Ana\");Student b=new Student(\"123\",\"Ana\");System.out.println(a==b);System.out.println(a.equals(b));}}",
    "expected": "false\ntrue",
    "hints": [
      "Dva new poziva znače različite reference",
      "Record ima automatski equals",
      "== nije isto što i equals."
    ],
    "check": "output"
  },
  {
    "module": "polimorfizam",
    "id": "t21",
    "title": "Siguran downcasting",
    "level": "Napredna",
    "kind": "Ispravi bug",
    "prompt": "Za referencu Zivotinja koja pokazuje na Pas koristi instanceof pattern matching i ispiši Rex.",
    "starter": "public class Main { static class Zivotinja {} static class Pas extends Zivotinja {String ime=\"Rex\";} public static void main(String[] args){Zivotinja z=new Pas(); /* siguran pristup */} }",
    "solution": "public class Main{static class Zivotinja{}static class Pas extends Zivotinja{String ime=\"Rex\";}public static void main(String[]args){Zivotinja z=new Pas();if(z instanceof Pas p)System.out.println(p.ime);}}",
    "expected": "Rex",
    "hints": [
      "Ne znaš svugdje što stoji iza Zivotinja",
      "instanceof provjerava tip",
      "`if(z instanceof Pas p)` daje p."
    ],
    "check": "output"
  },
  {
    "module": "apstrakcija",
    "id": "t22",
    "title": "Apstraktni uređaj",
    "level": "Početna",
    "kind": "Implementiraj",
    "prompt": "Napravi abstract Uredaj s abstract status() i Punjač koji vraća ON.",
    "starter": "public class Main { abstract static class Uredaj { /* status */} /* Punjač */ public static void main(String[] args){} }",
    "solution": "public class Main{abstract static class Uredaj{abstract String status();}static class Punjač extends Uredaj{@Override String status(){return \"ON\";}}public static void main(String[]args){Uredaj u=new Punjač();System.out.println(u.status());}}",
    "expected": "ON",
    "hints": [
      "abstract metoda nema tijelo",
      "Podklasa koristi extends i @Override",
      "Referenca može biti tipa Uredaj."
    ],
    "check": "output"
  },
  {
    "module": "apstrakcija",
    "id": "t23",
    "title": "Dva sučelja na jednoj klasi",
    "level": "Srednja",
    "kind": "Implementiraj",
    "prompt": "Patka implementira Trci i Pliva, pa ispisuje `Trci i Pliva`.",
    "starter": "public class Main { interface Trci{String trci();} interface Pliva{String pliva();} /* Patka */ public static void main(String[] args){} }",
    "solution": "public class Main{interface Trci{String trci();}interface Pliva{String pliva();}static class Patka implements Trci,Pliva{public String trci(){return \"Trci\";}public String pliva(){return \"Pliva\";}}public static void main(String[]args){Patka p=new Patka();System.out.println(p.trci()+\" i \"+p.pliva());}}",
    "expected": "Trci i Pliva",
    "hints": [
      "implements Trci, Pliva",
      "Implementacije su public",
      "Kombiniraj rezultate metoda."
    ],
    "check": "output"
  },
  {
    "module": "apstrakcija",
    "id": "t24",
    "title": "Default implementacija",
    "level": "Napredna",
    "kind": "Objasni ponašanje",
    "prompt": "Napravi sučelje Opis s default tekst(), klasa Robot ne nadjačava metodu; ispiši `Osnovni opis`.",
    "starter": "public class Main { interface Opis { /* default */ } static class Robot implements Opis {} public static void main(String[] args){} }",
    "solution": "public class Main{interface Opis{default String tekst(){return \"Osnovni opis\";}}static class Robot implements Opis{}public static void main(String[]args){System.out.println(new Robot().tekst());}}",
    "expected": "Osnovni opis",
    "hints": [
      "default metoda ima tijelo",
      "Robot može koristiti gotovu implementaciju",
      "Nije potreban @Override u Robot."
    ],
    "check": "output"
  },
  {
    "module": "napredno",
    "id": "t25",
    "title": "Record mjerenje snage",
    "level": "Početna",
    "kind": "Napiši record",
    "prompt": "Record Mjerenje ima napon i struju; metoda snaga vraća produkt. Za 24 i 3 ispiši 72.",
    "starter": "public class Main { record Mjerenje(int napon,int struja) { /* snaga */ } public static void main(String[] args){} }",
    "solution": "public class Main{record Mjerenje(int napon,int struja){int snaga(){return napon*struja;}}public static void main(String[]args){System.out.println(new Mjerenje(24,3).snaga());}}",
    "expected": "72",
    "hints": [
      "Record ima automatska polja",
      "Komponente čitaj preko napon() i struja()",
      "Vrati njihov umnožak."
    ],
    "check": "output"
  },
  {
    "module": "napredno",
    "id": "t26",
    "title": "Lambda sortiranje silazno",
    "level": "Srednja",
    "kind": "Implementiraj",
    "prompt": "Sortiraj listu 3, 9, 1 silazno pomoću lambde i ispiši [9, 3, 1].",
    "starter": "import java.util.*; public class Main { public static void main(String[] args){List<Integer> a=new ArrayList<>(List.of(3,9,1));/* sort */} }",
    "solution": "import java.util.*;public class Main{public static void main(String[]args){List<Integer> a=new ArrayList<>(List.of(3,9,1));a.sort((x,y)->Integer.compare(y,x));System.out.println(a);}}",
    "expected": "[9, 3, 1]",
    "hints": [
      "Lista ima metodu sort",
      "Comparator uspoređuje dva broja",
      "Za silazni redoslijed usporedi y pa x."
    ],
    "check": "output"
  },
  {
    "module": "napredno",
    "id": "t27",
    "title": "Zatvorena hijerarhija stanja",
    "level": "Napredna",
    "kind": "Modeliraj",
    "prompt": "Modeliraj sealed Stanje s record Aktivno(int posto) i Iskljuceno(); ispiši 95 za aktivno stanje.",
    "starter": "public class Main { /* sealed + dva record podtipa */ public static void main(String[] args){} }",
    "solution": "public class Main{sealed interface Stanje permits Aktivno,Iskljuceno{}record Aktivno(int posto) implements Stanje{}record Iskljuceno() implements Stanje{}public static void main(String[]args){Stanje s=new Aktivno(95);System.out.println(s instanceof Aktivno a?a.posto():0);}}",
    "expected": "95",
    "hints": [
      "sealed + permits",
      "Recordi su final i smiju implements",
      "instanceof Aktivno a omogućuje a.posto()."
    ],
    "check": "output"
  },
  {
    "module": "uml",
    "id": "t28",
    "title": "UML odnos VCU–Baterija",
    "level": "Početna",
    "kind": "Modeliraj",
    "prompt": "Pretvori odnos „VCU ima Bateriju” u polje i konstruktor te ispiši napon 24.",
    "starter": "public class Main { /* Baterija, VCU */ public static void main(String[] args){} }",
    "solution": "public class Main{static class Baterija{int napon=24;}static class VCU{Baterija baterija;VCU(Baterija b){baterija=b;}int ocitaj(){return baterija.napon;}}public static void main(String[]args){System.out.println(new VCU(new Baterija()).ocitaj());}}",
    "expected": "24",
    "hints": [
      "Nema extends Baterija",
      "VCU drži Baterija polje",
      "Dohvati polje preko konstruktora."
    ],
    "check": "output"
  },
  {
    "module": "uml",
    "id": "t29",
    "title": "Knjiga ima autora",
    "level": "Srednja",
    "kind": "Refaktoriraj",
    "prompt": "Umjesto nasljeđivanja Autor, napravi Knjiga s atributom autor tipa Autor i ispiši Ivo.",
    "starter": "public class Main { static class Autor {String ime=\"Ivo\";} /* Knjiga */ public static void main(String[] args){} }",
    "solution": "public class Main{static class Autor{String ime=\"Ivo\";}static class Knjiga{Autor autor=new Autor();String opis(){return autor.ime;}}public static void main(String[]args){System.out.println(new Knjiga().opis());}}",
    "expected": "Ivo",
    "hints": [
      "Knjiga nije vrsta autora",
      "Odnos se izražava poljem",
      "Metoda opis() delegira na autor.ime."
    ],
    "check": "output"
  },
  {
    "module": "uml",
    "id": "t30",
    "title": "Dizajn ovisan o sučelju",
    "level": "Napredna",
    "kind": "Preuredi dizajn",
    "prompt": "Sustav treba primati Izvor sučelje u konstruktoru, ne konkretnu klasu Senzor; ispiši očitanje 7.",
    "starter": "public class Main { interface Izvor {int vrijednost();} /* Senzor, Sustav */ public static void main(String[] args){} }",
    "solution": "public class Main{interface Izvor{int vrijednost();}static class Senzor implements Izvor{public int vrijednost(){return 7;}}static class Sustav{private final Izvor i;Sustav(Izvor i){this.i=i;}int ocitaj(){return i.vrijednost();}}public static void main(String[]args){System.out.println(new Sustav(new Senzor()).ocitaj());}}",
    "expected": "7",
    "hints": [
      "Sučelje definira ugovor",
      "Senzor implements Izvor",
      "Sustav drži Izvor umjesto Senzor."
    ],
    "check": "output"
  },
  {
    "module": "iznimke",
    "id": "t31",
    "title": "Uhvatiti dijeljenje nulom",
    "level": "Početna",
    "kind": "Ispravi bug",
    "prompt": "Umjesto prekida programa, pri 9/0 ispiši `Nula nije dozvoljena`.",
    "starter": "public class Main { public static void main(String[] args){System.out.println(9/0);} }",
    "solution": "public class Main{public static void main(String[]args){try{System.out.println(9/0);}catch(ArithmeticException e){System.out.println(\"Nula nije dozvoljena\");}}}",
    "expected": "Nula nije dozvoljena",
    "hints": [
      "Rizičan izraz stavi u try",
      "Uhvatiti ArithmeticException",
      "Ispis u catch."
    ],
    "check": "output"
  },
  {
    "module": "iznimke",
    "id": "t32",
    "title": "Vlastita checked iznimka",
    "level": "Srednja",
    "kind": "Implementiraj",
    "prompt": "Napravi NegativanException extends Exception; metoda test(-1) treba baciti iznimku koja se hvata u main i ispisuje Negativan broj.",
    "starter": "public class Main { /* checked iznimka, metoda throws, catch */ public static void main(String[] args){} }",
    "solution": "public class Main{static class NegativanException extends Exception{NegativanException(){super(\"Negativan broj\");}}static void test(int x)throws NegativanException{if(x<0)throw new NegativanException();}public static void main(String[]args){try{test(-1);}catch(NegativanException e){System.out.println(e.getMessage());}}}",
    "expected": "Negativan broj",
    "hints": [
      "extends Exception znači checked",
      "Metoda deklarira throws",
      "Main treba try/catch."
    ],
    "check": "output"
  },
  {
    "module": "iznimke",
    "id": "t33",
    "title": "Zatvori čitač automatski",
    "level": "Napredna",
    "kind": "Koristi resurs",
    "prompt": "Pomoću try-with-resources pročitaj dva retka `A` i `B` iz StringReadera; spoji ih i ispiši AB.",
    "starter": "import java.io.*; public class Main { public static void main(String[] args)throws Exception{ /* try with resources */} }",
    "solution": "import java.io.*;public class Main{public static void main(String[]args)throws Exception{try(BufferedReader br=new BufferedReader(new StringReader(\"A\\nB\"))){System.out.println(br.readLine()+br.readLine());}}}",
    "expected": "AB",
    "hints": [
      "StringReader može glumiti datoteku",
      "BufferedReader je AutoCloseable",
      "Deklariraj ga u try(...) zaglavlju."
    ],
    "check": "output"
  },
  {
    "module": "javadoc",
    "id": "t34",
    "title": "Dokumentiraj metodu",
    "level": "Početna",
    "kind": "Napiši JavaDoc",
    "prompt": "Dodaj Javadoc metodi tri(int x): opis, @param x i @return. Za 4 ispiši 12.",
    "starter": "public class Main { /* TODO docs */ static int tri(int x){return 3*x;} public static void main(String[] args){System.out.println(tri(4));} }",
    "solution": "/** Primjer JavaDoc-a. */public class Main{/** Vraća trostruki broj. @param x ulaz @return trostruka vrijednost */static int tri(int x){return 3*x;}public static void main(String[]args){System.out.println(tri(4));}}",
    "expected": "12",
    "hints": [
      "Komentar počinje /**",
      "@param mora imenovati x",
      "@return opisuje povratnu vrijednost."
    ],
    "check": "output"
  },
  {
    "module": "javadoc",
    "id": "t35",
    "title": "Opiši iznimku metodom @throws",
    "level": "Srednja",
    "kind": "Dokumentiraj",
    "prompt": "Nad metodom provjeri napiši @throws IllegalArgumentException i razlog; za ulaz 8 ispiši 8.",
    "starter": "public class Main { static int provjeri(int n){if(n<0)throw new IllegalArgumentException();return n;} public static void main(String[] args){System.out.println(provjeri(8));} }",
    "solution": "/** Dokumentirani bankovni račun. */public class Main{/** @throws IllegalArgumentException za negativan iznos */static int provjeri(int n){if(n<0)throw new IllegalArgumentException();return n;}public static void main(String[]args){System.out.println(provjeri(8));}}",
    "expected": "8",
    "hints": [
      "@throws dokumentira uvjet bacanja",
      "Ne miješaj Javadoc @throws s ključnom riječju throws",
      "Komentar ne mijenja izvršavanje programa."
    ],
    "check": "output"
  },
  {
    "module": "javadoc",
    "id": "t36",
    "title": "Javadoc poveznica i inline kod",
    "level": "Napredna",
    "kind": "Dokumentiraj",
    "prompt": "Dodaj @see java.lang.Math i {@code x*x} u Javadoc komentarima; ispiši kvadrat 6.",
    "starter": "public class Main { static int k(int x){return x*x;} public static void main(String[] args){System.out.println(k(6));} }",
    "solution": "/** Glavna klasa. @see java.lang.Math */ public class Main{/** Potencija. {@code x*x} @param x ulaz @return kvadrat */static int k(int x){return x*x;}public static void main(String[]args){System.out.println(k(6));}}",
    "expected": "36",
    "hints": [
      "@see je block tag",
      "{@code ...} je inline tag",
      "javadoc -d docs Main.java generira HTML."
    ],
    "check": "output"
  },
  {
    "module": "projekt",
    "id": "t37",
    "title": "import i rad s List",
    "level": "Početna",
    "kind": "Napiši program",
    "prompt": "Napravi List<String> s tri imena datoteka i ispiši broj elemenata.",
    "starter": "public class Main { public static void main(String[] args){} }",
    "solution": "import java.util.*;public class Main{public static void main(String[]args){List<String> datoteke=List.of(\"Main.java\",\"Racun.java\",\"README.md\");System.out.println(datoteke.size());}}",
    "expected": "3",
    "hints": [
      "Potreban je import java.util.List",
      "List.of stvara listu",
      "size vraća broj elemenata."
    ],
    "check": "output"
  },
  {
    "module": "projekt",
    "id": "t38",
    "title": "Mali test bez JUnita",
    "level": "Srednja",
    "kind": "Testiraj",
    "prompt": "Implementiraj zbroji i provjeri za 2+3. Ako nije 5 baci AssertionError, inače ispiši Test OK.",
    "starter": "public class Main { static int zbroji(int a,int b){/* TODO */} public static void main(String[] args){} }",
    "solution": "public class Main{static int zbroji(int a,int b){return a+b;}public static void main(String[]args){if(zbroji(2,3)!=5)throw new AssertionError();System.out.println(\"Test OK\");}}",
    "expected": "Test OK",
    "hints": [
      "Provjeri očekivanu vrijednost",
      "if (rezultat != 5)",
      "Baci AssertionError u slučaju pogreške."
    ],
    "check": "output"
  },
  {
    "module": "projekt",
    "id": "t39",
    "title": "Mini-projekt: baterija vozila",
    "level": "Napredna",
    "kind": "Samostalno izradi",
    "prompt": "Napravi Vozilo s private stanjem baterije 50, punjenje odbija negativno i ograničava na 100. Nakon puni(40) ispiši 90.",
    "starter": "public class Main { /* Vozilo s poljem i metodama */ public static void main(String[] args){} }",
    "solution": "public class Main{static class Vozilo{private int stanje=50;int stanje(){return stanje;}void puni(int n){if(n<0)throw new IllegalArgumentException();stanje=Math.min(100,stanje+n);}}public static void main(String[]args){Vozilo v=new Vozilo();v.puni(40);System.out.println(v.stanje());}}",
    "expected": "90",
    "hints": [
      "Private atribut skriva stanje",
      "puni provjerava argument",
      "Math.min(100, stanje+n) drži gornju granicu."
    ],
    "check": "output"
  }
];
