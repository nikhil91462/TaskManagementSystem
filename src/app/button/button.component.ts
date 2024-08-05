import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() label : string = '';
  @Input() style : string = '';
  // @Input() label : string = '';
  @Output() click = new EventEmitter<Event>();

  handleClick(Event:Event){

  }
}
