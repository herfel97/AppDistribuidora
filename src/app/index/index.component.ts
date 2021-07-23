import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  username: string;

  constructor( private actRoute: ActivatedRoute) { 
    this.username = this.actRoute.snapshot.params.user;
  }

  ngOnInit(): void {
  }

}
