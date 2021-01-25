import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsultaIBGEService {

  private urlLocalidades = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados';

  constructor(private http:HttpClient) { }

  consultaUFs(){
    return this.http.get(this.urlLocalidades);
  }
}


