import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UsersComponent } from './users/users.component';
import { ProfileComponent } from './profile/profile.component';
import { PostsComponent } from './posts/posts.component';

import{ HttpClientModule} from '@angular/common/http';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    UsersComponent,
    ProfileComponent,
    PostsComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
