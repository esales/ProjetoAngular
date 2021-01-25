import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../pessoa.model';
import { PessoaService } from '../pessoa.service';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit {
  pessoas: Pessoa[];

  constructor(private pessoaService:PessoaService) { }

  ngOnInit(): void {
  }
}
