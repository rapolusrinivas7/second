import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() participentname;
  constructor(private _route: Router) { }

  ngOnInit(): void {
  }
  signout() {
    localStorage.clear();
    this._route.navigate(['/register'])
  }

}
