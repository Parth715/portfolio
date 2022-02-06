import { Component, OnInit } from '@angular/core';
import { Menu } from './menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menus: Menu[] = [
    new Menu("About Me", "/userlist"),
    new Menu("Education", "/vendorlist"),
    new Menu("Work Experience", "/productlist"),
    new Menu("Interests", "/requestlist"),
    new Menu("Projects", "/review")
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
