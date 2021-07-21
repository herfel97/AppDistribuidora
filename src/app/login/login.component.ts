import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { ServWSService } from 'src/app/servicios/serv-ws.service'
import { runInThisContext } from 'vm';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ServWSService]
})
export class LoginComponent implements OnInit {
  login:any;
  loginList:any;

  constructor(private router:Router , private service:ServWSService) { }

  ngOnInit() {
    this.service.getLoginData()
    .subscribe(
      (data => this.login = data)
    );
  }

  loginSubmit(value: any){
    for(let i=0 ; i< this.login.length; i++)
    {
        if (this.login[i].username === value.username && this.login[i].password === value.password)
        {
            console.log("User Found" , this.login[i]);
            this.router.navigate(['register']);
        }
    }    


  }

}
