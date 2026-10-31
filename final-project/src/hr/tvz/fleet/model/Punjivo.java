package hr.tvz.fleet.model;

/** Ugovor za vozila koja je moguće puniti. */
public interface Punjivo {
    /**
     * Puni bateriju za zadani broj postotnih bodova.
     * @param postotak dodana razina napunjenosti, mora biti pozitivna
     * @throws IllegalArgumentException ako je postotak neispravan
     */
    void napuni(double postotak);
}
