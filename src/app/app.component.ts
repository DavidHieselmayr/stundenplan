import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string;
  public rows: number;
  public columns: number;
  constructor() {
    this.title = 'stundenplan';
    // Zeile
    this.rows = 5;
    // Spalte
    this.columns = 5;
  }
}
