import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent  {
  @Input() firstName: string = '';
  @Input() lastName: string = '';
  @Input() gender: string = '';
  @Input() email: string = '';
  @Input() city: string = '';
  @Input() country: string = '';
  @Input() userIcon: string = '';
}
