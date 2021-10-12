import { Component } from '@angular/core';
import { UserService } from './servicios/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PrimerParcialLab4BustosGilFelipe';

  constructor(public user : UserService, public router : Router)
  {}
}
