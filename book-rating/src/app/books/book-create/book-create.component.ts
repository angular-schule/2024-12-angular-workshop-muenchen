import { Component, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Book } from '../shared/book';

@Component({
  selector: 'app-book-create',
  imports: [ReactiveFormsModule],
  templateUrl: './book-create.component.html',
  styleUrl: './book-create.component.scss'
})
export class BookCreateComponent {

  create = output<Book>();

  bookForm = new FormGroup({

    isbn: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(3)]
    }),

    title: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required]
    }),

    description: new FormControl('', {
      nonNullable: true
    })
  });

  isInvalid(c: FormControl) {
    return c.invalid && c.touched;
  }

  hasError(c: FormControl, errorCode: string) {
    return c.hasError(errorCode) && c.touched;
  }

  submitForm() {

    if (this.bookForm.invalid) {
      this.bookForm.markAllAsTouched();
      return;
    }

    const newBook: Book = {
      ...this.bookForm.getRawValue(),
      rating: 1
    }

    this.create.emit(newBook);
    this.bookForm.reset();
  }

}
