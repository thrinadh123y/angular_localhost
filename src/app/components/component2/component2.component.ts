import { Component, OnInit } from '@angular/core';
import { CommonserviceService } from '../commonservice.service'
@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {
user;
  constructor(private commonService:CommonserviceService) { }

  ngOnInit() {
this.commonService.communicate.subscribe((res)=>{
  this.user=res;
  console.log(res)
})
  }

}
