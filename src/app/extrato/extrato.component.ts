import { TransferenciaService } from './../service/transferencia.service';
import { Component, Input, OnInit } from '@angular/core';
import { Transferencia } from '../model/transferencia.model';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  transferencias: any[];

  constructor(private transferenciaService: TransferenciaService) {

  }

  ngOnInit(): void {
    this.transferenciaService.getAll()
    .subscribe((transferencias: Transferencia[]) => {
      console.log(transferencias);
      this.transferencias = transferencias;
    })
  }

}
