import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { WorklistViewerComponent } from './+worklist-viewer/worklistViewer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { WorklistService } from './+worklist-viewer/worklist.service';

@NgModule({
  declarations: [
    AppComponent,
    WorklistViewerComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [WorklistService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
