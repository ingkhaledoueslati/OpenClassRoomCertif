import { Component, OnInit } from '@angular/core';
import { post } from '../model/post.model';
import { GestionDePostService } from '../Services/gestion-de-post.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {
  model: any = {};
  
  constructor(private Ps:GestionDePostService) { }
 
  ngOnInit() {
  }

  onSubmit(){
   let  p : post = new post(this.model["Title"],this.model["Content"],0,new Date)
    //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model));
     this.Ps.addPost(p);
  }
}
