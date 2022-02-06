import { Component, Input, OnInit } from '@angular/core';
import { Menu } from '../menu/menu';

@Component({
  selector: 'app-menu-items',
  templateUrl: './menuitems.component.html',
  styleUrls: ['./menuitems.component.css']
})
export class MenuItemsComponent implements OnInit {

  @Input() m!: Menu
  constructor() { }

  ngOnInit(): void {
  }

}
