package hr.tvz.fleet;

import hr.tvz.fleet.model.ElektricniAuto;
import hr.tvz.fleet.model.Vozilo;
import hr.tvz.fleet.service.VozniPark;
import java.util.Scanner;

/** Konzolni demonstracijski ulaz za Electric Fleet Manager. */
public final class Main {
    private Main() {}

    /**
     * Pokreće jednostavan tekstualni izbornik.
     * @param args argumenti naredbenog retka (trenutačno se ne koriste)
     */
    public static void main(String[] args) {
        VozniPark park = new VozniPark();
        park.dodaj(new ElektricniAuto("ZG-001", "EV One", 60, 15, 50));
        park.dodaj(new ElektricniAuto("ZG-002", "EV Two", 48, 16, 70));
        System.out.println("ELECTRIC FLEET MANAGER");
        System.out.println("1 - Popis | 2 - Vožnja | 3 - Punjenje | 0 - Izlaz");
        Scanner scanner = new Scanner(System.in);
        while (scanner.hasNextLine()) {
            String izbor = scanner.nextLine().trim();
            if (izbor.equals("0")) break;
            if (izbor.equals("1")) {
                for (Vozilo v : park.popis()) System.out.println(v);
                System.out.printf("Ukupni domet: %.1f km%n", park.ukupniDometKm());
            } else if (izbor.equals("2") || izbor.equals("3")) {
                System.out.println("Redni broj vozila (1 ili 2):");
                if (!scanner.hasNextLine()) break;
                String broj = scanner.nextLine();
                System.out.println(izbor.equals("2") ? "Udaljenost (km):" : "Dodaj postotnih bodova:");
                if (!scanner.hasNextLine()) break;
                String value = scanner.nextLine();
                try {
                    int indeks = Integer.parseInt(broj.trim()) - 1;
                    if (indeks < 0 || indeks >= park.popis().size()) throw new IllegalArgumentException("Nepoznato vozilo");
                    double iznos = Double.parseDouble(value.replace(',', '.').trim());
                    ElektricniAuto auto = (ElektricniAuto) park.popis().get(indeks);
                    if (izbor.equals("2")) auto.vozi(iznos); else auto.napuni(iznos);
                    System.out.println("Ažurirano: " + auto);
                } catch (IllegalArgumentException | IllegalStateException ex) {
                    System.out.println("Greška: " + ex.getMessage());
                }
            } else System.out.println("Nepoznati izbornik. Odaberi 0, 1, 2 ili 3.");
            System.out.println("1 - Popis | 2 - Vožnja | 3 - Punjenje | 0 - Izlaz");
        }
        System.out.println("Doviđenja!");
    }
}
