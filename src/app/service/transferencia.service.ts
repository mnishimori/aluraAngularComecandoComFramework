import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  private listaTransferencias: any[];

  constructor() { 
    this.listaTransferencias = [];
  }

  get transferencias(){
    return this.listaTransferencias;
  }

  adicionar(transferencia: any): void {
    this.configurar(transferencia);
    
    this.transferencias.push(transferencia);
  }

  configurar(transferencia: any){
    transferencia.data = new Date();
  }
}
