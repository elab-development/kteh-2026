import React from "react";
import logo from "./logo.svg";
import { Osoba } from "./modules/Osoba";
import Student from "./components/Student";
import ButtonPotvrdi from "./components/ButtonPotvrdi";

function App() {
  const naslov:string = "Srećna radna subota";
  const broj=5;
  const osoba1 = new Osoba("Petar", 21);
    const osoba2 = new Osoba("Milica", 22);
  return (
    // 1. deo OSNOVE
    // <div>
    //   <h1> Hello World </h1>
    //   {/* u return se može vratiti samo jedan element, ali on može imati više dece */}
    //   <h2> {naslov}</h2>
    //   {/* promenljive se pisu u okviru {} */}
    //   <p>Ovo je termin broj {broj}</p>
    // </div>
    // 2. deo - KOMPONENTE
    <div>
      <h1>React + TypeScript</h1>
            
            {/* Korišćenje metode klase unutar TSX-a */}
            <p>{osoba1.predstaviSe()}</p>
            <p>{osoba2.predstaviSe()}</p>

            <hr />

            {/* Pozivanje komponente Student sa prosleđivanjem props-a */}
            <Student ime="Marko" prezime="Markovic" godine={19} />
            <Student ime="Ana" prezime="Anic" godine={23} />

            <hr />

            {/* Korišćenje neutralne komponente Button */}
            <ButtonPotvrdi text="Klikni me" />
    </div>
  );
}

export default App;
