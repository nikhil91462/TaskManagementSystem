import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss']
})
export class InputFieldComponent {

  @Input() type!: string;
  @Input() value: any;
  @Input() name!: string;
  @Input() placeholder!: string;
  
}
