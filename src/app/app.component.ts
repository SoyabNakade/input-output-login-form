import { Component, OnInit } from '@angular/core';
import { ConnectionService } from 'ng-connection-service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'input-output-login';
  status="Check Status";
  isConnected=true;

  

  constructor(private connectionService:ConnectionService){
    
  }
  ngOnInit(): void {
 
  window.onfocus = (event:Event)=>{
  let online = navigator.onLine;

    if (online == true)
      this.status="user is online"
    else
      this.status="user is offline"
  //  {
     
  //  }
  //  else{
  //  alert(this.status="user is offline") 
  //  }
  }

  }
}
