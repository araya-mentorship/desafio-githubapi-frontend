import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-users',
  templateUrl: './search-users.component.html',
  styleUrls: ['./search-users.component.scss']
})
export class SearchUsersComponent {

  @Output() public search = new EventEmitter()

  formUser = this.formBuilder.group({
    name: ['', Validators.required]
  })

  name = new FormControl('');

  constructor(private formBuilder: FormBuilder) { }

  input(): void {
    this.name.setValue('');
  }

  enviar(): void {
    this.search.emit(this.name.value)
  }
}
