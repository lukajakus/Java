import hr.tvz.fleet.model.ElektricniAuto;
import hr.tvz.fleet.model.Vozilo;
import hr.tvz.fleet.service.VozniPark;

public class FleetTest {
    public static void main(String[] args) {
        ElektricniAuto a = new ElektricniAuto("ZG-1", "Test", 50, 10, 50);
        assertNear(a.dometKm(),250);
        a.vozi(100);
        assertNear(a.postotakBaterije(),30);
        a.napuni(50);
        assertNear(a.postotakBaterije(),80);
        a.napuni(100);
        assertNear(a.postotakBaterije(),100);
        try { a.vozi(9999); throw new AssertionError("Očekivana iznimka"); }
        catch (IllegalStateException ok) { /* očekivano */ }
        try { a.vozi(-1); throw new AssertionError("Očekivana iznimka"); }
        catch (IllegalArgumentException ok) { /* očekivano */ }
        Vozilo b = new ElektricniAuto("ZG-1", "Drugi", 90, 12, 10);
        if (!a.equals(b)||a.hashCode()!=b.hashCode()) throw new AssertionError("equals/hashCode");
        VozniPark park = new VozniPark();park.dodaj(a);
        try { park.dodaj(b); throw new AssertionError("Duplikat"); }
        catch (IllegalArgumentException ok) { /* očekivano */ }
        try { park.popis().clear(); throw new AssertionError("Promjenjiva lista"); }
        catch (UnsupportedOperationException ok) { /* očekivano */ }
        System.out.println("FleetTest: 9 provjera uspješno.");
    }
    private static void assertNear(double actual,double expected){
        if(Math.abs(actual-expected)>1e-7)throw new AssertionError(actual+" != "+expected);
    }
}
