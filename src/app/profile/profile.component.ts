import { Component, OnInit } from '@angular/core';
import {DataService } from '../data.service';                      //copy as in users.component.ts
import {Observable} from 'rxjs';
//import { ActivatedRoute} from '@angular/router';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user$:object;  //property object

  constructor( private data: DataService) {   //create instance activated route
                                             
   }           //to get parameters in url

  ngOnInit() {
    this.data.getUser(this.user$).subscribe(           //passing the id that just defined
      data=>this.user$=data          //pass and combine the data
    );
  }

}
