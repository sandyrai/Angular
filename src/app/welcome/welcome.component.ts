import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {AppComponent} from '../app.component';
import { WelcomeDataService } from '../service/data/welcome-data.service';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  message='some welcome message' ;
  name='';

  constructor(private route:ActivatedRoute,
    private service:WelcomeDataService
    ) { }

  ngOnInit(): void {
    console.log(this.message);
    this.name=this.route.snapshot.params['name'];
  }

  getwelcomemessage(){
    console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanService().subscribe();
  }

}


