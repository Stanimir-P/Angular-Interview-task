import { Component } from '@angular/core';
import { IData } from '../../assets/utils';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrl: './data.component.css'
})

export class DataComponent {
  editRowIndex: string | undefined;
  data: IData[] = [];

  getIndex() {
    return this.editRowIndex
  }
}
