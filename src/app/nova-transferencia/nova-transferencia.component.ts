import { Transferencia } from './../models/transferencia.model';
import { HttpClient } from '@angular/common/http';
import { Component, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { TransferenciaService } from 'src/services/transferencia.service';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.compent.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {
  @Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino: number;

  constructor(private service: TransferenciaService) {}

  transferir(): void {
    console.log('Solicitado nova transferência');
    const valorEmitir: Transferencia  = { valor: this.valor, destino: this.destino };
    this.service.adicionar(valorEmitir).subscribe(resultado => {
      console.log(resultado);
      this.limparCampos();
    },
    (error) => {
      console.error(error);
    });
  }

  limparCampos(): void {
    this.valor = 0;
    this.destino = 0;
  }
}
