import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { IContact } from '../../interfaces/contact.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  data!: IContact;
  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  constructor(public contactService: ContactService) {
    this.contactService.getContacts().subscribe((data) => {
      this.data = data;
    });
  }
}
