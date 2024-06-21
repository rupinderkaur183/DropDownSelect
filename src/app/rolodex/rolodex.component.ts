import { Component, OnDestroy, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';
import { Subject } from 'rxjs';
import { Contact } from '../model/contact';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-rolodex',
  templateUrl: './rolodex.component.html',
  styleUrls: ['./rolodex.component.css'],
})
export class RolodexComponent implements OnInit, OnDestroy {
  public contacts: Contact[];
  public contact: Contact = null;
  private destroyed: Subject<any> = new Subject();

  constructor(private contactsService: ContactsService) {
  }

  public ngOnInit() {
    this.contactsService.getContacts()
      .pipe(takeUntil(this.destroyed))
      .subscribe(contacts => this.contacts = contacts);
  }

  public ngOnDestroy() {
    this.destroyed.next(null);
  }

  public setContact(contact: Contact): void {
    this.contact = contact;
  }
}
