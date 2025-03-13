import { Component, Input } from '@angular/core';

@Component({
  selector: 'text-box',
  templateUrl: './text-box.component.html',
  styleUrl: './text-box.component.css'
})
export class TextBoxComponent {

  @Input() ctrlType: string = 'email';
  @Input() ctrlClass: string = 'form-control';
  @Input() ctrlPlaceholder: string = 'Enter value';
  @Input() ctrlName: string = 'value';
  
}
