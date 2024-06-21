import { Injectable, Inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ContactType } from './model/contact.type';
import { Contact } from './model/contact';
import { contactsInjectionToken } from './contacts';

@Injectable()
export class ContactsService {
  private contactsSubject = new BehaviorSubject<Contact[]>([]);
  private selectedType: ContactType = ContactType.ALL;

  constructor(@Inject(contactsInjectionToken) private contactsList: Contact[]) {
    this.filterContacts();
  }

  public getContacts(): Observable<Contact[]> {
    return this.contactsSubject.asObservable();
  }

  public setTypeOfContacts(type: ContactType): void {
    this.selectedType = type;
    this.filterContacts();
  }

  private filterContacts(): void {
    const filteredContacts = this.selectedType === ContactType.ALL
      ? this.contactsList
      : this.contactsList.filter(contact => contact.contactType === this.selectedType);
    this.contactsSubject.next(filteredContacts);
  }
}
