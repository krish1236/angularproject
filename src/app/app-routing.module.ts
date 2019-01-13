import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { DetailsComponent } from './details/details.component';
import { PostsComponent } from './posts/posts.component';
import { ProfileComponent} from './profile/profile.component';


const routes: Routes = [
{
  path: '',
  component: UsersComponent
},
{
  path: 'details/:id',
  component: DetailsComponent
},
{
  path: 'posts',
  component: PostsComponent
},
{
  path : 'profile',
  component: ProfileComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
