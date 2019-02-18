import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NewPostComponent } from './new-post/new-post.component';
import { PostListComponent } from './post-list/post-list.component';

//routing here :p 
const routes:Routes=[
    {path: 'postes',component:PostListComponent },
    {path: 'new',component:NewPostComponent},
    {path: '',component:PostListComponent}
   
   
]
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponent=[AppComponent,NewPostComponent,PostListComponent]