import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OrderComparisonComponent } from './order-comparison/order-comparison.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, OrderComparisonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'order-confirmation-demo';
}
