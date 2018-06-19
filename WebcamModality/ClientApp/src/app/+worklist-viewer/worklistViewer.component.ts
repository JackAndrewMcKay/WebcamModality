import { Component } from '@angular/core';
import { WorklistService } from './worklist.service';
import { WorklistItem } from './worklistItem.model';
import { MatTableDataSource } from '@angular/material';
@Component({
  selector: 'worklist-viewer',
  templateUrl: './worklistViewer.component.html'
})
export class WorklistViewerComponent {
  
  constructor(private worklist: WorklistService) { }

  selectedWorklistItem: WorklistItem;

  toggleSelection(item: WorklistItem) {
    if (this.selectedWorklistItem === item) {
      this.selectedWorklistItem = null;
    } else {
      this.selectedWorklistItem = item;
    }
  }


  displayedColumns = [
    'patientId',
    'patientName',
    'patientSex',
    'patientBirthDate',
    'studyId',
    'accessionNumber'];
  items = new MatTableDataSource(new Array<WorklistItem>(
    {
      patientName: 'A',
      patientId: '1',
      patientSex: 'M',
      patientBirthDate: new Date("3/3/1995"),
      studyId: 'test',
      accessionNumber: 'acc'
    },
    {
      patientName: 'A',
      patientId: '1',
      patientSex: 'M',
      patientBirthDate: new Date("3/3/1995"),
      studyId: 'test',
      accessionNumber: 'acc'
    },
    {
      patientName: 'A',
      patientId: '1',
      patientSex: 'M',
      patientBirthDate: new Date("3/3/1995"),
      studyId: 'test',
      accessionNumber: 'acc'
    },
    {
      patientName: 'A',
      patientId: '1',
      patientSex: 'M',
      patientBirthDate: new Date("3/3/1995"),
      studyId: 'test',
      accessionNumber: 'acc'
    },
    {
      patientName: 'A',
      patientId: '1',
      patientSex: 'M',
      patientBirthDate: new Date("3/3/1995"),
      studyId: 'test',
      accessionNumber: 'acc'
    },
    {
      patientName: 'A',
      patientId: '1',
      patientSex: 'M',
      patientBirthDate: new Date("3/3/1995"),
      studyId: 'test',
      accessionNumber: 'acc'
    },
    {
      patientName: 'A',
      patientId: '1',
      patientSex: 'M',
      patientBirthDate: new Date("3/3/1995"),
      studyId: 'test',
      accessionNumber: 'acc'
    },
    {
      patientName: 'A',
      patientId: '1',
      patientSex: 'M',
      patientBirthDate: new Date("3/3/1995"),
      studyId: 'test',
      accessionNumber: 'acc'
    },
    {
      patientName: 'A',
      patientId: '1',
      patientSex: 'M',
      patientBirthDate: new Date("3/3/1995"),
      studyId: 'test',
      accessionNumber: 'acc'
    },
    {
      patientName: 'A',
      patientId: '1',
      patientSex: 'M',
      patientBirthDate: new Date("3/3/1995"),
      studyId: 'test',
      accessionNumber: 'acc'
    },
    {
      patientName: 'A',
      patientId: '1',
      patientSex: 'M',
      patientBirthDate: new Date("3/3/1995"),
      studyId: 'test',
      accessionNumber: 'acc'
    },
    {
      patientName: 'A',
      patientId: '1',
      patientSex: 'M',
      patientBirthDate: new Date("3/3/1995"),
      studyId: 'test',
      accessionNumber: 'acc'
    },
    {
      patientName: 'A',
      patientId: '1',
      patientSex: 'M',
      patientBirthDate: new Date("3/3/1995"),
      studyId: 'test',
      accessionNumber: 'acc'
    },
    {
      patientName: 'A',
      patientId: '1',
      patientSex: 'M',
      patientBirthDate: new Date("3/3/1995"),
      studyId: 'test',
      accessionNumber: 'acc'
    },
    {
      patientName: 'A',
      patientId: '1',
      patientSex: 'M',
      patientBirthDate: new Date("3/3/1995"),
      studyId: 'test',
      accessionNumber: 'acc'
    },
    {
      patientName: 'A',
      patientId: '1',
      patientSex: 'M',
      patientBirthDate: new Date("3/3/1995"),
      studyId: 'test',
      accessionNumber: 'acc'
    },
    {
      patientName: 'A',
      patientId: '1',
      patientSex: 'M',
      patientBirthDate: new Date("3/3/1995"),
      studyId: 'test',
      accessionNumber: 'acc'
    },
    {
      patientName: 'A',
      patientId: '1',
      patientSex: 'M',
      patientBirthDate: new Date("3/3/1995"),
      studyId: 'test',
      accessionNumber: 'acc'
    }
    )); 
}
