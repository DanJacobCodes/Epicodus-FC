import { Component, OnInit } from '@angular/core';
import { Member } from '../member.model';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  submitForm(name: string, position: string) {
   var newMember: Member = new Member(name, position);
  //  this.memberService.addMember(newMember);
 }

}
