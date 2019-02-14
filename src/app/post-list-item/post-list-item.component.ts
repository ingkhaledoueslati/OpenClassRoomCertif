import { Component, OnInit, Input } from '@angular/core';
import { post } from '../model/post.model';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
@Input() public justOnePost : post;

public setMyclass;

constructor() { }

ngOnInit() {console.log(this.justOnePost)}

loveit(){ this.justOnePost.loveIts= this.justOnePost.loveIts +1;}
dontloveit(){console.log(this.justOnePost.loveIts); this.justOnePost.loveIts= this.justOnePost.loveIts-1;}


//set my class logic here
setMyClasses(){
if (this.justOnePost.loveIts>0)
{this.setMyclass =  "list-group-item-success";}
else if  (this.justOnePost.loveIts<0)
 { this.setMyclass =  "list-group-item-danger";}  
else if (this.justOnePost.loveIts==0)
 { this.setMyclass =  "";}
  return this.setMyclass
}


}
