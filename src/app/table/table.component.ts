import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IData } from '../../assets/utils';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})

export class TableComponent {
  @Input() data!: IData[];

  @Input() editRowIndex: string | undefined;
  @Output() editRowIndexChange = new EventEmitter();

  addUserHandler() {
    this.editRowIndexChange.emit(undefined);
  }

  editDataHandler(index: number) {
    this.editRowIndexChange.emit(index.toString());
  }
  
  deleteDataHandler(index: number) {
    this.data.splice(index, 1);
  }
}
