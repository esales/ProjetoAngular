import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ProdutoService } from './produto.service';



@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {
  produtos = null;
  listagemProdutos: Observable<any>;

  esconder = true;
  estilo = "azul";
  numero = 10;
  exemplo = 5;
  booleano = true;
  listaDeClasses = "azul negrito";

  altura = "100px";

  alturaSemUnidadeMedida = 100;

  colecaoDePropriedades = { "width":"100px",
                            "height":"200px",
                            "background-color":"blue" };

  colecaoDePropriedades2 = { "width":"300px",
                      "height":"500px",
                      "background-color":"green" };


  nome = "";

  contadorClique = 0;

  pessoas = [{nome:'Fulano', idade: 20},
             {nome:'Sicrano', idade: 30},
             {nome:'Beltrano', idade: 40}];

  classes = {azul:this.booleano, negrito: !this.booleano };

  opcao = "h1";

  constructor(private service: ProdutoService) { }

  ngOnInit(): void {
  }

  alternar(){
    this.esconder = !this.esconder;
    this.booleano = this.esconder;
    this.classes = {azul:this.booleano, negrito: !this.booleano };
  }

  clicou(){
    this.contadorClique++;
  }

  chamarServico(){
    this.produtos = this.service.listarProdutos();
  }

  teste(){
    this.listagemProdutos = this.service.metodoServico();
    console.log(this.listagemProdutos);
  }
}

