package hr.tvz.fleet.model;

import java.util.Objects;

/**
 * Apstraktni model vozila s jedinstvenom registracijom.
 * Primjer enkapsulacije, apstrakcije i ugovora equals/hashCode.
 */
public abstract class Vozilo {
    private final String registracija;
    private final String model;

    /**
     * Stvara zajedničke identifikacijske podatke vozila.
     * @param registracija jedinstveni identifikator vozila
     * @param model naziv modela
     * @throws IllegalArgumentException ako su parametri prazni
     */
    protected Vozilo(String registracija, String model) {
        if (registracija == null || registracija.isBlank()
                || model == null || model.isBlank()) {
            throw new IllegalArgumentException("Registracija i model ne smiju biti prazni.");
        }
        this.registracija = registracija.trim();
        this.model = model.trim();
    }

    /** Dohvaća jedinstveni identifikator.
     * @return registracija vozila */
    public final String getRegistracija() { return registracija; }

    /** Dohvaća naziv modela.
     * @return naziv modela vozila */
    public final String getModel() { return model; }

    /** Procjenjuje preostali domet prema stanju vozila.
     * @return preostali procijenjeni domet u kilometrima */
    public abstract double dometKm();

    /**
     * Izvršava vožnju i mijenja raspoloživu energiju.
     * @param kilometri prevaljena udaljenost; ne smije biti negativna
     */
    public abstract void vozi(double kilometri);

    @Override
    public final boolean equals(Object other) {
        if (this == other) return true;
        if (!(other instanceof Vozilo v)) return false;
        return registracija.equals(v.registracija);
    }

    @Override
    public final int hashCode() { return Objects.hash(registracija); }

    @Override
    public String toString() { return model + " [" + registracija + "]"; }
}
