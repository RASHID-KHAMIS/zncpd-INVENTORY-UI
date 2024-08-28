import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-administrative-entities',
  templateUrl: './administrative-entities.component.html',
  styleUrls: ['./administrative-entities.component.css']
})
export class AdministrativeEntitiesComponent implements OnInit{

  constructor(private router:Router,
    private route:ActivatedRoute){}
  ngOnInit(): void {
 
  }

  onBack(){
    this.router.navigateByUrl('/system-configuration')
  }

}
