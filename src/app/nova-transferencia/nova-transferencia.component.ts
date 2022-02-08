import { Transferencia } from './../model/transferencia.model';
import { TransferenciaService } from './../service/transferencia.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent implements OnInit {

  @Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino: number;

  constructor(private service: TransferenciaService) { }

  ngOnInit(): void {
  }

  transferir(): void {
    console.log('Solicitada nova transferência');

    const valorEmitir: Transferencia = {valor: this.valor, destino: this.destino};

    this.service.adicionar(valorEmitir)
    .subscribe(response => {
      console.log(response);
      this.limparCampos();
    }, responseError => {
      console.log(responseError);
    })
  }

  limparCampos(): void {
    this.valor = 0;
    this.destino = 0;
  }

}
