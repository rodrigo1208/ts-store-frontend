import {Component, Input, OnInit} from '@angular/core';
import {IconProp} from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'ts-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  @Input() buttons: SidenavButton[];
}

export interface SidenavButton {
  icon: string | string[];
  command: () => {};
}
