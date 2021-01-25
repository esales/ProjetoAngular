import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProdutoComponent } from './produto/produto.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './components/user/user.component';
import { AppRoutingModule } from './app-routing.module';
import { PrimeiroComponent } from './rotas-componentes/primeiro/primeiro.component';
import { SegundoComponent } from './rotas-componentes/segundo/segundo.component';
import { FormReativoComponent } from './formulario/form-reativo/form-reativo.component';
import { ConsultaIBGEComponent } from './ibge/consulta-ibge/consulta-ibge.component';
import { RankingUFComponent } from './ibge/ranking-uf/ranking-uf.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from 'src/environments/environment';
import { PessoaComponent } from './firebase/pessoa/pessoa.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';

@NgModule({
  declarations: [
    AppComponent,
    ProdutoComponent,
    UserComponent,
    PrimeiroComponent,
    SegundoComponent,
    FormReativoComponent,
    ConsultaIBGEComponent,
    RankingUFComponent,
    PessoaComponent,
    LifecycleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
