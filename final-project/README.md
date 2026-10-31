# Electric Fleet Manager — Java 21

Završni konzolni projekt iz Java Learning Lab aplikacije. Klase i testovi mogu se prevesti bez Mavena i vanjskih biblioteka.

Pokreni u mapi `final-project` (Linux, macOS, PowerShell s JDK 21):

```sh
mkdir out
javac -encoding UTF-8 -d out src/hr/tvz/fleet/model/*.java src/hr/tvz/fleet/service/*.java src/hr/tvz/fleet/Main.java
java -cp out hr.tvz.fleet.Main
javac -encoding UTF-8 -cp out -d out tests/FleetTest.java
java -cp out FleetTest
javadoc -encoding UTF-8 -docencoding UTF-8 -charset UTF-8 -d docs -sourcepath src -subpackages hr.tvz.fleet
```

Za Windows PowerShell, gdje `javac` ne proširuje `*.java` u argumente kao Bash, koristi:

```powershell
New-Item -ItemType Directory -Force out | Out-Null
$files = Get-ChildItem -Recurse src -Filter *.java | ForEach-Object FullName
javac -encoding UTF-8 -d out $files
java -cp out hr.tvz.fleet.Main
javac -encoding UTF-8 -cp out -d out tests/FleetTest.java
java -cp out FleetTest
javadoc -encoding UTF-8 -docencoding UTF-8 -charset UTF-8 -d docs -sourcepath src -subpackages hr.tvz.fleet
Start-Process ./docs/index.html
```

Zadatak za učenje: prije čitanja implementacije prvo nacrtaj UML, sam napiši `Vozilo`, `Punjivo` i `ElektricniAuto`, dodaj zaštitu od pogrešnih ulaza pa usporedi rješenja.
