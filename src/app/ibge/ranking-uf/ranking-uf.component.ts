import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConsultaIBGEService } from '../consulta-ibge.service';

@Component({
  selector: 'app-ranking-uf',
  templateUrl: './ranking-uf.component.html',
  styleUrls: ['./ranking-uf.component.css']
})
export class RankingUFComponent implements OnInit {

  // constructor(private activatedRoute:ActivatedRoute, private consultaIbgeService:ConsultaIBGEService) {  }

  constructor(private consultaIbgeService:ConsultaIBGEService) {  }

  ngOnInit(): void {
  }
}
