import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bytebank';
  transferencia: any;

  valor: number;
  destino: number;

  transfere($event) {
    console.log($event);
    this.transferencia = $event;
  }
}
