import { Component, OnInit } from '@angular/core';
import { Menu } from './menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menus: Menu[] = [
    new Menu("Home", "/project"),
    new Menu("About Me", "/about-me"),
    new Menu("Education", "/education"),
    new Menu("Work Experience", "/work-experience"),
    new Menu("Interests", "/interests")
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
