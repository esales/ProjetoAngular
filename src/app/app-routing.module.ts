import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultaIBGEComponent } from './ibge/consulta-ibge/consulta-ibge.component';
import { RankingUFComponent } from './ibge/ranking-uf/ranking-uf.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { ProdutoComponent } from './produto/produto.component';
import { PrimeiroComponent } from './rotas-componentes/primeiro/primeiro.component';
import { SegundoComponent } from './rotas-componentes/segundo/segundo.component';

const routes: Routes = [
  {path: 'primeiro-componente', component: PrimeiroComponent },
  {path: 'segundo-componente', component: SegundoComponent},
  {path: 'redirect-primeiro', redirectTo: '/primeiro-componente', pathMatch: 'full'},
  {path: 'ibge', component: ConsultaIBGEComponent },
  {path: 'produto', component: ProdutoComponent},
  {path: 'ciclo', component: LifecycleComponent},

  {path: 'ranking', component: RankingUFComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
