import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-define-items',
  templateUrl: './define-items.component.html',
  styleUrls: ['./define-items.component.css']
})
export class DefineItemsComponent implements  OnInit{

  constructor(private router:Router,
    private route:ActivatedRoute){}
  ngOnInit(): void {

  }
  onBack(){
    this.router.navigateByUrl('/asset-configuration')
  }

}
