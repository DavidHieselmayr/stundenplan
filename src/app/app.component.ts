import {Component, OnInit} from '@angular/core';
import {Repository} from './repository';
import {ESchoolclass} from './entity/ESchoolclass';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title: string;
  public rows: number;
  public columns: number;
  public listofclasses: Array<ESchoolclass>;

  constructor(private db: Repository) {
    this.db = db;
    this.listofclasses = [];
    this.title = 'stundenplan';
    // Zeile
    this.rows = 5;
    // Spalte
    this.columns = 5;
  }

  ngOnInit(): void {
    this.db.getAllClasses().subscribe(
      (val) => {
        console.log(val)
        this.listofclasses = val;
      }
    );
  }

  // @ts-ignore
  getAllClasses(): Array<ESchoolclass> {
    this.db.getAllClasses().subscribe(
      (val) => {
        return val;
      }
    );
    return null;
  }
}
