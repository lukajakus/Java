# Nastavni izvori i korekcije

## Dostupni materijali

1. **„2 - OOP u Javi.pptx”**, korisnička prezentacija, 34 stranice. Pokriveno: klase, enkapsulacija, nasljeđivanje, `super`, `@Override`, UML IS-A/HAS-A, `equals/hashCode`, polimorfizam, casting, wrapper klase, apstraktne klase, sučelja (`default`, `static`, `private`), lambde, funkcionalna sučelja, `final`, `record` i `sealed`.
2. **„3 - Iznimke u Javi.pptx”**, korisnička prezentacija, 21 stranica. Pokriveno: hijerarhija `Throwable`, stack trace, `try/catch/finally`, multi-catch, try-with-resources, checked/unchecked, `throw` i `throws`, vlastite i ulančane iznimke, obrada pri API pozivima.
3. **JavaDoc** — korisnik je naveo da nedostaje prezentacija. Samostalno obrađeni `/** ... */`, oznake `@param`, `@return`, `@throws`, `@see`, inline `{@code}` i `{@link}`, razlika od Java anotacija, `javadoc -d docs` i primjeri za PowerShell.
4. **Dopunsko gradivo** — osnove Jave, nizovi, `List`, `ArrayList`, metode, paketi i testiranje potrebno za razumijevanje prezentacija.

## Zabilježene korekcije iz prezentacija

- **OOP, stranica 13:** korijenska Java klasa je `java.lang.Object`, ne `java.util.Object`.
- **OOP, stranica 27:** records su uvedeni kao preview u Java 14, a postali trajna značajka u **Java 16**. Metode `name()` i `address()` zovu se record accessor metode, ne obični JavaBean getteri `getName()`.
- **OOP, stranica 17:** wrapper klase nasljeđuju `java.lang.Object`; ne može se nadjačati proizvoljna metoda neke tuđe klase, a equality metode već su definirane na wrapperima.
- **Iznimke, stranica 9:** naziv sučelja je `AutoCloseable`, ne `AutoClosable`.
- **Iznimke, stranica 11:** checked/unchecked **nije** pravilo "vanjski faktor → checked". Podjelu određuje hijerarhija (`RuntimeException` i `Error` unchecked); npr. `InputMismatchException` pri unosu korisnika je unchecked.
- **Iznimke, stranica 8:** `finally` se izvršava pri normalnom izlasku iz `try`/`catch`, ali ne jamči izvršenje pri nenormalnom prekidu JVM-a ili nekim izvanrednim uvjetima.
- **OOP, stranica 32:** `final` varijabla koja sadrži referencu ne znači da je objekt nepromjenjiv.

## Primarna tehnička referenca

- Java SE 21 API: https://docs.oracle.com/en/java/javase/21/docs/api/
- Javadoc Tool: https://docs.oracle.com/en/java/javase/21/javadoc/javadoc.html
- Java 16 records: https://openjdk.org/jeps/395
- Java 17 sealed classes: https://openjdk.org/jeps/409

Sve isporučene primjere potrebno je provjeriti s JDK 21; nije predviđeno izvršavanje primjera prilagođenih drugačijoj verziji bez prilagodbe.
