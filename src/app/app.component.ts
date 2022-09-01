import { Component } from '@angular/core';
import { TokenService } from './shared/services/token.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  isConnect:boolean=false
  constructor(private perm:TokenService) {}
  ngOnInit(): void {
    this.perm.hasperm.asObservable().subscribe(
      data =>{
        this.isConnect=data
      }
    )
  }

  deconnexion(){
    this.perm.hasperm.next(false) 
    this.perm.clearToken()  
  }
}
