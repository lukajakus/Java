package hr.tvz.fleet.model;

/** Konkretnu implementaciju električnog automobila čini baterija i potrošnja. */
public final class ElektricniAuto extends Vozilo implements Punjivo {
    private final double kapacitetKWh;
    private final double potrosnjaKWhNa100Km;
    private double stanjeKWh;

    /**
     * Stvara automobil uz kapacitet baterije, potrošnju i početnu napunjenost.
     * @param reg jedinstvena registracija
     * @param model naziv modela
     * @param kapacitetKWh kapacitet baterije, pozitivan
     * @param potrosnjaKWhNa100Km potrošnja pri vožnji, pozitivna
     * @param pocetniPostotak početna napunjenost od 0 do 100
     */
    public ElektricniAuto(String reg, String model, double kapacitetKWh,
                          double potrosnjaKWhNa100Km, double pocetniPostotak) {
        super(reg, model);
        if (!Double.isFinite(kapacitetKWh) || kapacitetKWh <= 0
                || !Double.isFinite(potrosnjaKWhNa100Km) || potrosnjaKWhNa100Km <= 0
                || !Double.isFinite(pocetniPostotak)
                || pocetniPostotak < 0 || pocetniPostotak > 100) {
            throw new IllegalArgumentException("Neispravni parametri baterije.");
        }
        this.kapacitetKWh = kapacitetKWh;
        this.potrosnjaKWhNa100Km = potrosnjaKWhNa100Km;
        this.stanjeKWh = kapacitetKWh * pocetniPostotak / 100;
    }

    /** Računa razinu napunjenosti.
     * @return trenutačno stanje napunjenosti u postocima */
    public double postotakBaterije() { return 100 * stanjeKWh / kapacitetKWh; }

    @Override
    public double dometKm() { return stanjeKWh / potrosnjaKWhNa100Km * 100; }

    @Override
    public void vozi(double kilometri) {
        if (!Double.isFinite(kilometri) || kilometri < 0) {
            throw new IllegalArgumentException("Udaljenost mora biti nenegativan konačan broj.");
        }
        double potrebno = kilometri * potrosnjaKWhNa100Km / 100;
        if (potrebno > stanjeKWh + 1e-9) {
            throw new IllegalStateException("Nema dovoljno energije za vožnju.");
        }
        stanjeKWh = Math.max(0, stanjeKWh - potrebno);
    }

    @Override
    public void napuni(double postotak) {
        if (!Double.isFinite(postotak) || postotak <= 0) {
            throw new IllegalArgumentException("Postotak punjenja mora biti pozitivan konačan broj.");
        }
        stanjeKWh = Math.min(kapacitetKWh, stanjeKWh + kapacitetKWh * postotak / 100);
    }

    @Override
    public String toString() {
        return super.toString() + String.format(" (%.1f%% baterije, domet %.1f km)", postotakBaterije(), dometKm());
    }
}
