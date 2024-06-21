import { Component, Output, EventEmitter } from '@angular/core';
import { ContactType } from '../model/contact.type';

@Component({
  selector: 'app-contact-type-selector',
  templateUrl: './contact-type-selector.component.html',
  styleUrls: ['./contact-type-selector.component.css'],
})
export class ContactTypeSelectorComponent {
  public contactTypes = ContactType;
  public selectedContactType: ContactType = ContactType.ALL;

  @Output() contactTypeChange = new EventEmitter<ContactType>();

  public onContactTypeChange(contactType: ContactType): void {
    this.selectedContactType = contactType;
    this.contactTypeChange.emit(contactType);
  }
}
