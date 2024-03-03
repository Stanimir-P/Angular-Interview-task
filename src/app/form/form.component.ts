import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IData, getCurrentDate } from '../../assets/utils';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})

export class FormComponent {
  @Input() editRowIndex: string | undefined;
  @Input() data!: IData[];
  @Output() dataChange = new EventEmitter();

  submitFormHandler(form: NgForm): void {
    
    this.editRowIndex 
      ? this.editData(form.value) 
      : this.addData(form.value)

    form.reset();

    this.dataChange.emit(this.data);
  }

  editData(formValue: IData) {
    if (!this.editRowIndex) { return; }

    const result: IData = {
      ...formValue,
      lastEdited: getCurrentDate(),
      addedOn: this.data[Number(this.editRowIndex)].addedOn
    }

    this.data[Number(this.editRowIndex)] = result;
  }

  addData(formValue: IData) {
    const result: IData = {
      ...formValue,
      addedOn: getCurrentDate(),
      lastEdited: getCurrentDate()
    }

    this.data.push(result)
  }

  get editRowNumber() {
    return Number(this.editRowIndex) + 1;
  }
}
