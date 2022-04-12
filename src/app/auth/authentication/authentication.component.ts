import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ConnectableObservable } from 'rxjs';
import { AuthentificationService } from './authentication.service';

@Component({
  selector: 'dsg-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  constructor(private auth: AuthentificationService) { }

  ngOnInit(): void {
  }

  onSubmit(data:NgForm) {
    console.log("Button Clicked");
    console.log(data);
    this.auth.signup(data.value.email, data.value.password).subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      }
    )
    data.reset();
  }

}
