import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-manage-work',
  templateUrl: './manage-work.component.html',
  styleUrls: ['./manage-work.component.css']
})
export class ManageWorkComponent implements OnInit{
  constructor(private router:Router,
    private route:ActivatedRoute
  ){}
  ngOnInit(): void {

  }

  onBack(){
    this.router.navigateByUrl('/asset-configuration')
  }

}
