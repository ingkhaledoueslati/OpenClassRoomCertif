import { Component, OnInit, Input } from '@angular/core';
import { post } from '../model/post.model';
import { GestionDePostService } from '../Services/gestion-de-post.service';
import { _ParseAST } from '@angular/compiler';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
 
  public jusOnePost:post;
  public  ListPosts = this._Ps.ListPosts
  
  

  constructor(private _Ps:GestionDePostService) { }

  ngOnInit() {   
   

  }

}
