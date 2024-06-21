import { Component } from '@angular/core';
import { ContactType } from './model/contact.type';
import { ContactsService } from './contacts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private contactsService: ContactsService) {}

  public onContactTypeChange(type: ContactType): void {
    this.contactsService.setTypeOfContacts(type);
  }
}
