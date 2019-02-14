import { Component, OnInit } from '@angular/core';
import { post } from './model/post.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'blog';
  public ListPosts = new Array();
  //create posts  
  justOnePost1 = new post("POST 1","Lorem ipsum dolor sit amet, consectetuer adipiscing elit volutpat. Praesent mattis interdum arcu eu feugiat.",0,new Date());
  justOnePost2 = new post("POST 2","Lorem ipsum dolor sit amet, consectetuer adipiscing elit volutpat. Praesent mattis interdum arcu eu feugiat.",0,new Date());
  justOnePost3 = new post("POST 3","Lorem ipsum dolor sit amet, consectetuer adipiscing elit volutpat. Praesent mattis interdum arcu eu feugiat.",0,new Date());
    
  ngOnInit(){
    this.ListPosts.push(this.justOnePost1,this.justOnePost2,this.justOnePost3);
    console.log("APP COMPONENET ListPOst:=>",this.ListPosts)
  }

  


}
