import { Injectable } from '@angular/core';
import { post } from '../model/post.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GestionDePostService {
  constructor(private router: Router) { }
ListPosts =[];
//add post to array ;) 
public addPost(post:post){this.ListPosts.push(post); this.router.navigate(['/postes'])}
//remove post from Array posts array using index ;)    
public removePost(index){;this.ListPosts.splice(index,1); }

public getListArray(){
   return this.getListArray;
  
}


}
