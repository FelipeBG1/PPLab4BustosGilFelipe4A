import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public https : HttpClient,private firebase : AngularFirestore) { }
  
  traerDatosGitHub()
  {
    return this.https.get("https://api.github.com/users/FelipeBG1");
  }

  traerPaises()
  {
    return this.https.get('https://restcountries.com/v2/alpha?codes=ng,za,esp,fr');
  }

  traerRepartidores()
  {
    return this.firebase.collectionGroup('repartidores').valueChanges();
  }

  traerPedidos()
  {
    return this.firebase.collection('pedidos').valueChanges({idField: 'id'});
  }

  modificar(pedido : any, id : any)
  {
    return this.firebase.collection('pedidos').doc(id).update(pedido);
  }

}


