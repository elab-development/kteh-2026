// Eksportujemo klasu kako bismo je mogli koristiti u drugim fajlovima
export class Osoba {
    ime: string;
    godine: number;

    // Konstruktor služi za inicijalizaciju objekta klase
    constructor(ime: string, godine: number) {
        this.ime = ime;
        this.godine = godine;
    }

    // Metoda koja vraća string sa podacima o osobi
    predstaviSe(): string {
        return `Ja sam ${this.ime} i imam ${this.godine} godina.`;
    }
}