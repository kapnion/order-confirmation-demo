import { CurrencyPipe, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';

interface OrderItem {
  id: string;
  name: string;
  menge: number;
  preis: number;
  lieferzeit: string;
  rabatt: number;
}

interface Order {
  id: string;
  datum: string;
  kundenName: string;
  kundenNummer: string;
  lieferadresse: string;
  zahlungsmethode: string;
  gesamtbetrag: number;
  mwst: number;
  artikel: OrderItem[];
}

@Component({
  selector: 'app-order-comparison',
  templateUrl: './order-comparison.component.html',
  styleUrls: ['./order-comparison.component.scss'],
  standalone: true,
  imports: [CurrencyPipe, NgFor, NgIf]
})
export class OrderComparisonComponent implements OnInit {
  bestellung: Order = {
    id: 'BEST-001',
    datum: '2023-05-15',
    kundenName: 'Max Mustermann',
    kundenNummer: 'KD-12345',
    lieferadresse: 'Musterstraße 123, 12345 Berlin',
    zahlungsmethode: 'Rechnung',
    gesamtbetrag: 1500,
    mwst: 285,
    artikel: [
      { id: 'ART-1', name: 'Produkt A', menge: 2, preis: 500, lieferzeit: '3-5 Tage', rabatt: 0 },
      { id: 'ART-2', name: 'Produkt B', menge: 1, preis: 500, lieferzeit: '1-2 Tage', rabatt: 5 },
      { id: 'ART-3', name: 'Produkt C', menge: 3, preis: 100, lieferzeit: '5-7 Tage', rabatt: 0 }
    ]
  };

  bestaetigung: Order = {
    id: 'BEST-001',
    datum: '2023-05-16',
    kundenName: 'Max Mustermann',
    kundenNummer: 'KD-12345',
    lieferadresse: 'Musterstraße 123, 12345 Berlin',
    zahlungsmethode: 'Rechnung',
    gesamtbetrag: 1600,
    mwst: 304,
    artikel: [
      { id: 'ART-1', name: 'Produkt A', menge: 2, preis: 550, lieferzeit: '3-5 Tage', rabatt: 0 },
      { id: 'ART-2', name: 'Produkt B', menge: 1, preis: 500, lieferzeit: '2-3 Tage', rabatt: 5 },
      { id: 'ART-3', name: 'Produkt C', menge: 3, preis: 100, lieferzeit: '5-7 Tage', rabatt: 2 }
    ]
  };

  expandedItems: boolean[] = [];

  ngOnInit() {
    this.expandedItems = new Array(this.bestellung.artikel.length).fill(false);
  }

  hatUnterschiede(index: number): boolean {
    const bestellungItem = this.bestellung.artikel[index];
    const bestaetigungItem = this.bestaetigung.artikel[index];
    return bestellungItem.menge !== bestaetigungItem.menge ||
           bestellungItem.preis !== bestaetigungItem.preis ||
           bestellungItem.lieferzeit !== bestaetigungItem.lieferzeit ||
           bestellungItem.rabatt !== bestaetigungItem.rabatt;
  }

  hatUnterschiedeDetails(): boolean {
    return this.bestellung.id !== this.bestaetigung.id ||
           this.bestellung.datum !== this.bestaetigung.datum ||
           this.bestellung.kundenName !== this.bestaetigung.kundenName ||
           this.bestellung.kundenNummer !== this.bestaetigung.kundenNummer ||
           this.bestellung.lieferadresse !== this.bestaetigung.lieferadresse ||
           this.bestellung.zahlungsmethode !== this.bestaetigung.zahlungsmethode ||
           this.bestellung.gesamtbetrag !== this.bestaetigung.gesamtbetrag ||
           this.bestellung.mwst !== this.bestaetigung.mwst;
  }

  toggleDetails(index: number) {
    this.expandedItems[index] = !this.expandedItems[index];
  }
}
