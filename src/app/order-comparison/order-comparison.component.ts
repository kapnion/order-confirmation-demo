import { CurrencyPipe, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';

interface OrderItem {
  id: string;
  name: string;
  menge: number;
  preis: number;
}

interface Order {
  id: string;
  datum: string;
  kundenName: string;
  gesamtbetrag: number;
  artikel: OrderItem[];
}

@Component({
  selector: 'app-order-comparison',
  templateUrl: './order-comparison.component.html',
  styleUrls: ['./order-comparison.component.scss'],
  standalone: true,
  imports: [CurrencyPipe, NgFor]
})
export class OrderComparisonComponent implements OnInit {
  bestellung: Order = {
    id: 'BEST-001',
    datum: '2023-05-15',
    kundenName: 'Max Mustermann',
    gesamtbetrag: 1500,
    artikel: [
      { id: 'ART-1', name: 'Produkt A', menge: 2, preis: 500 },
      { id: 'ART-2', name: 'Produkt B', menge: 1, preis: 500 }
    ]
  };

  bestaetigung: Order = {
    id: 'BEST-001',
    datum: '2023-05-15',
    kundenName: 'Max Mustermann',
    gesamtbetrag: 1600,
    artikel: [
      { id: 'ART-1', name: 'Produkt A', menge: 2, preis: 550 },
      { id: 'ART-2', name: 'Produkt B', menge: 1, preis: 500 }
    ]
  };

  ngOnInit() {
    // Initialization logic if needed
  }

  hatUnterschiede(index: number): boolean {
    const bestellungItem = this.bestellung.artikel[index];
    const bestaetigungItem = this.bestaetigung.artikel[index];
    return bestellungItem.menge !== bestaetigungItem.menge ||
           bestellungItem.preis !== bestaetigungItem.preis;
  }
}
