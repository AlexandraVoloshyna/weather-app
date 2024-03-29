import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saved-users',
  templateUrl: './saved-users.component.html',
  styleUrls: ['./saved-users.component.css']
})
export class SavedUsersComponent implements OnInit {
 savedUsers:any[] = []

 ngOnInit() {
  const savedUserDetailsJSON = localStorage.getItem('savedUserDetails');
      if (savedUserDetailsJSON) {
        this.savedUsers = JSON.parse(savedUserDetailsJSON);
      }
}


}
