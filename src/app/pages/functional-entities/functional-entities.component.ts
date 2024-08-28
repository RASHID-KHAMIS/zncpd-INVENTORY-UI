import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-functional-entities',
  templateUrl: './functional-entities.component.html',
  styleUrls: ['./functional-entities.component.css']
})
export class FunctionalEntitiesComponent implements OnInit{

  constructor(private router:Router,
    private route:ActivatedRoute){}
  ngOnInit(): void {
 
  }

  onBack(){
    this.router.navigateByUrl('/system-configuration')
  }

}
