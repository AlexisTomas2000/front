import { Component, OnInit } from '@angular/core';
import {routes} from "../../app-routing.module";
import {HomeComponent} from "../home/home.component";
import {Router, RouterModule, Routes} from '@angular/router';

@Component({
  selector: 'app-navmenu',
  templateUrl:'./navmenu.component.html',
  styleUrls: ['./navmenu.component.css']
})
export class NavmenuComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  redirect(direccion:string) {
    this.router.navigate(['/'+direccion])
  }
}
