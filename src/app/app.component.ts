import { Component, OnInit } from '@angular/core';
import { post } from './model/post.model';
import { GestionDePostService } from './Services/gestion-de-post.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
   title = 'blog';
  public ListPosts = new Array();
     
  //inject the service into app component 
  constructor(Ps:GestionDePostService){
  this.ListPosts = Ps.ListPosts;
  }
  
 
  ngOnInit(){    }

  


}
