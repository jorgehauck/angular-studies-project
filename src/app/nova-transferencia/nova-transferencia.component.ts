import { Transferencia } from './../models/transferencia.model';
import { Component, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { TransferenciaService } from 'src/services/transferencia.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.compent.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {

  @Output()
  aoTransferir = new EventEmitter<any>();

  transferencia: Transferencia;

  valor: number;
  destino: number;

  constructor(
    private service: TransferenciaService,
    private router: Router
    ) {}

  transferir(): void {
    console.log('Solicitado nova transferĂȘncia');
    const valorEmitir: Transferencia  = { valor: this.valor, destino: this.destino };
    this.service.adicionar(valorEmitir).subscribe(data => {
        console.log(data);
        this.limparCampos();
        this.router.navigateByUrl('extrato');
    },
    (error) => {
      console.error(error);
    })

  }
  private limparCampos(): void {
    this.valor = 0;
    this.destino = 0;
  }
}
