import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WorklistItem } from './worklistItem.model';

@Injectable()
export class WorklistService {
  constructor(private http: HttpClient) { }

  getWorklist() {
    return this.http.get<WorklistItem[]>("localhost:8080/Worklist");
  }
}
