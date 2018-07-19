import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import {AngularFireDatabase} from 'angularfire2/database';
import { Observable } from '../../node_modules/rxjs/internal/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  items: Observable<any[]>;
  constructor(private db: AngularFireDatabase){
    this.items = db.list('/User').valueChanges();
  }

  submitValue(data: HTMLInputElement){
    this.db.list('/User').push(data.value);
    data.value = '';
  }
}
