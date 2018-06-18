import { Component } from '@angular/core';
import { StudyData } from './studyData.model';

@Component({
  selector: 'study-data-entry',
  templateUrl: './studyDataEntry.component.html',
  styleUrls: ['./studyDataEntry.component.css']
})
export class StudyDataEntryComponent {
  studyData = new StudyData();

  logModelValues() {
    console.log('Patient ID: ' + this.studyData.patientId);
    console.log('Patient name: ' + this.studyData.patientName);
    console.log('Patient sex: ' + this.studyData.patientSex);
    console.log('Patient birth date: ' + this.studyData.patientBirthDate);
    console.log('Study ID: ' + this.studyData.studyId);
    console.log('Accession number: ' + this.studyData.accessionNumber);
  }
}
