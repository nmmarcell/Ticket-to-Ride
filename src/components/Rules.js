import { Container } from "react-bootstrap";
import "../index.css";
import LinkButton from "./LinkButton";

const Rules = () => {
    return ( 
        <div className="mainStyle">
            <Container className="preLobbyStyle ruleStyle">
                <h1 style={{textAlign: "center"}}>A játék szabályai</h1>
                <h3>A játék célja</h3>
                Vasútvonalak építésével minél több pontot szerezni. Pontot a megépített vasútvonalak hossza után, illetve a játék közben húzott célok (menetjegy-kártyák) teljesítésével lehet kapni, illetve a játék végén plusz pont jár a leghosszabb összefüggő vasútvonalért is. A nem teljesített célok pontjai levonásra kerülnek. 
                <hr/>
                <h3>A játék kezdete</h3>
                A játék elején minden játékos kap 1 hosszú célt és 3 rövid célt. A 3 rövid célból legalább 1-et meg kell tartani. A célok mellett kapunk még 4 vasútkocsi-kártyát is. Az asztalon elő van készítve 5 felfedett vasútkocsi kártya, a vasútkocsi-kártyák talonja, valamint a célok talonja. Minden játékosnak emellett van 45 vagonja is.
                <hr/>
                <h3>A játék menete</h3>
                Egy játékos a körében a következő három lehetőség közül választ:
                <ul>
                    <li><b>Vasútkocsi-kártyát húz:</b> ezt megteheti a felfedett kártyák közül (ilyenkor húzás után azonnal pótolni kell a lapot), 
                        vagy a talonból is húzhat. A mozdony két kártyát ér, így azt másodikként nem lehet húzni a felfedettek közül. 
                        Ha a felfedett lapok között 3 mozdony van, akkor az 5 lap megy a dobópakliba, és 5 újat kell osztani.
                    </li>
                    <li><b>Útvonalat épít:</b> ekkor az útvonal színének megfelelő mennyiségű lapot kell kijátszania a kezéből. Szürke utak bármilyen, 
                        de egyféle színből megépíthetők. A mozdonyt ábrázoló utakhoz legalább annyi mozdonyt kell kijátszani, ahányat az út ábrázol. 
                        A mozdony egyébként joker, bármilyen vonatkocsi-kártyát helyettesíthet. A vagonokat fel kell helyezni a táblára. Az épített út 
                        pontértéke azonnal feltüntetésre kerül. A dupla sínpárokat az alap feladatból kihagyjuk, azaz minden várost csak egy sínpár 
                        köt össze. Plusz pontért lehet a dupla sínpárokat figyelembe venni: ahol dupla sínpár van két város között, oda ugyanaz a játékos
                         nem építhet kétszer. Továbbá 1-3 játékos esetén pedig csak az egyik sínpár építhető meg, de ezt a szabályt is plusz pontért 
                         lehet alkalmazni.
                    </li>
                    <li><b>Új célkártyákat húz:</b> 3 új célkártya húzható, ebből legalább 1-et (legfeljebb 3-at) meg kell tartani.</li>
                </ul>
                <hr/>
                <h3>A játék vége</h3>
                A játék akkor ér véget, ha valamelyik játékos raktárában a vagonok száma 2 vagy kevesebb lesz. Ekkor az összes játékosnak van még egy utolsó köre, beleértve azt is, akinek először lefogyott ennyire. Ezután a pontok kiszámítása következik:

                <ul>
                    <li>az utak pontértéke hozzáadásra kerül</li>
                    <li>a teljesített célok pontértéke hozzáadásra kerül</li>
                    <li>a nem teljesített célok értéke levonásra kerül</li>
                    <li>a leghosszabb összefüggő út tulajdonosa +10 pontot kap</li>
                </ul>

                <div style={{textAlign: "center"}}>
                    <LinkButton whereto="/" txt="Vissza a menübe" size="200px"/>
                </div>
            </Container>
        </div>
     );
}
 
export default Rules;