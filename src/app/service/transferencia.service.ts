import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transferencia } from '../model/transferencia.model';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  private listaTransferencias: any[];
  private url = 'http://localhost:3000/transferencias';

  constructor(private httpClient: HttpClient) { 
    this.listaTransferencias = [];
  }

  get transferencias(){
    return this.listaTransferencias;
  }

  getAll(): Observable<Transferencia[]> {
    return this.httpClient.get<Transferencia[]>(this.url);
  }

  adicionar(transferencia: Transferencia): Observable<Transferencia> {
    this.configurar(transferencia);

    return this.httpClient.post<Transferencia>(this.url, transferencia);
  }

  configurar(transferencia: any){
    transferencia.data = new Date();
  }
}
