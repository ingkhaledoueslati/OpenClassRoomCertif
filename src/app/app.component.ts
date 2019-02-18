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
 //create posts just for test :p  
 justOnePost1 = new post("POST 1","Lorem ipsum dolor sit amet, consectetuer adipiscing elit volutpat. Praesent mattis interdum arcu eu feugiat.",0,new Date());
    
  //inject the service into app component 
  constructor(Ps:GestionDePostService){
    Ps.addPost(this.justOnePost1);
    this.ListPosts = Ps.ListPosts;
  }
  
 
 
  ngOnInit(){
   console.log("init");
   // console.log("APP COMPONENET ListPOst:=>",this.ListPosts)
  }

  


}
