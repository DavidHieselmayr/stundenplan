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
    // TODO fix dg.getAllClasses
    /*
    * Grund: CORS header 'AccessGrund: CORS-Kopfzeile 'Access-Control-Allow-Origin' fehlt
    * */
    this.listofclasses = [
      {
        id: '3BHITM',
        room: '137'
      },
      {
        id: '4BHITM',
        room: '136'
      },
      {
        id: '5BHITM',
        room: '135'
      }
    ];
    this.title = 'stundenplan';
    // Zeile
    this.rows = 5;
    // Spalte
    this.columns = 5;
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    /*
    this.db.getAllClasses().subscribe(
      (val) => {
        console.log(val);
        this.listofclasses = val;
      }
    );*/
  }
}
