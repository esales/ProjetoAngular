import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ConsultaIBGEService } from '../consulta-ibge.service';

@Component({
  selector: 'app-consulta-ibge',
  templateUrl: './consulta-ibge.component.html',
  styleUrls: ['./consulta-ibge.component.css']
})
export class ConsultaIBGEComponent implements OnInit {

  constructor(private consultaIbgeService:ConsultaIBGEService) { }

  localidades: Observable<any>;

  ngOnInit(): void {
    this.localidades = this.consultaIbgeService.consultaUFs();
  }
}

