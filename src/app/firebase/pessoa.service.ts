import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { Pessoa } from './pessoa.model';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor(private firestore: AngularFirestore) { }

  getPessoas(){
    return this.firestore.collection('pessoas').snapshotChanges();
  }

  createPessoa(pessoa: Pessoa){
    this.firestore.collection('pessoas').add(pessoa);
  }

  deletePessoa(pessoa: Pessoa){
    this.firestore.doc('pessoas/' + pessoa.id).delete();
  }
}
