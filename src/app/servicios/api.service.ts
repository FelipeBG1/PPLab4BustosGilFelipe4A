import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public https : HttpClient) { }
  
  traerDatosGitHub()
  {
    return this.https.get("https://api.github.com/users/FelipeBG1");
  }

  traerPaises()
  {
    return this.https.get('https://restcountries.com/v2/alpha?codes=ng,za,esp,fr');
  }

}


