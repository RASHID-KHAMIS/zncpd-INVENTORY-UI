import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-organizational-entities',
  templateUrl: './organizational-entities.component.html',
  styleUrls: ['./organizational-entities.component.css']
})
export class OrganizationalEntitiesComponent implements OnInit{

constructor(private router:Router,
  private route:ActivatedRoute
){}
  ngOnInit(): void {

  }

  onBack(){
    this.router.navigateByUrl('/system-configuration')
  }

}
