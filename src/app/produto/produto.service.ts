import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produto } from './produto.model';
import * as _ from 'lodash';

import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  baseUrl = "https://gorest.co.in/public-api/products";

  constructor(private http: HttpClient) { }

  listarProdutos(){
    let lista = new Array();
    lista.push({"descricao":"Produto 1", "preco":"10"});
    lista.push({"descricao":"Produto 2", "preco":"20"});
    lista.push({"descricao":"Produto 3", "preco":"30"});

    return lista;
  }

  metodoServico(): Observable<Produto[]>{
      return this.http.get<any>(this.baseUrl).pipe(map((data:any) => data.data));
  }
}
