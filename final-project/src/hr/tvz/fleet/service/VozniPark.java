package hr.tvz.fleet.service;

import hr.tvz.fleet.model.Vozilo;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Objects;

/** Evidencija vozila: primjer kompozicije i List sučelja. */
public final class VozniPark {
    private final List<Vozilo> vozila = new ArrayList<>();

    /** Stvara praznu evidenciju vozila. */
    public VozniPark() {}

    /**
     * Dodaje novo vozilo uz provjeru jedinstvene registracije.
     * @param vozilo vozilo koje se dodaje u evidenciju
     * @throws IllegalArgumentException za null ili postojeću registraciju
     */
    public void dodaj(Vozilo vozilo) {
        if (vozilo == null || vozila.contains(vozilo)) {
            throw new IllegalArgumentException("Vozilo je null ili registracija već postoji.");
        }
        vozila.add(vozilo);
    }

    /** Dohvaća popis bez dopuštanja izravne izmjene kolekcije.
     * @return nepromjenjivi pogled na evidenciju vozila */
    public List<Vozilo> popis() { return Collections.unmodifiableList(vozila); }

    /** Zbraja preostale domete svih evidentiranih vozila.
     * @return ukupni preostali procijenjeni domet svih vozila */
    public double ukupniDometKm() {
        return vozila.stream().filter(Objects::nonNull).mapToDouble(Vozilo::dometKm).sum();
    }
}
