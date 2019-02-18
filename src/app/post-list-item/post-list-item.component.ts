import { Component, OnInit, Input } from '@angular/core';
import { post } from '../model/post.model';
import { GestionDePostService } from '../Services/gestion-de-post.service';
@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
constructor(private Ps:GestionDePostService){} 

@Input() public justOnePost : post;
@Input() public index:any;

public setMyclass:any;

ngOnInit() {}

loveit(){ this.justOnePost.loveIts= this.justOnePost.loveIts +1;}

dontloveit(){console.log(this.justOnePost.loveIts); this.justOnePost.loveIts= this.justOnePost.loveIts-1;}

removePost(index:any){this.Ps.removePost(index)}

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
