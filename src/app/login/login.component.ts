import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide = true;

  constructor(private authentification: AuthentificationService) { }

  ngOnInit(): void {
  }

  guestEnter() {
    
  }

}