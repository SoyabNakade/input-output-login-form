import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-output-data',
  templateUrl: './output-data.component.html',
  styleUrls: ['./output-data.component.css']
})
export class OutputDataComponent {
  @Input() information:any;

}
