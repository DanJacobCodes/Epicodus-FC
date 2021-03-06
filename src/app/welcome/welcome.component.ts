import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Member } from '../member.model';
import { MemberService } from '../member.service';
import { FirebaseListObservable } from 'angularfire2/database';
import {Pipe, PipeTransform} from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  providers: [MemberService]
})

export class WelcomeComponent implements OnInit {
  members:FirebaseListObservable<any[]>;
  filterByYear: number;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private memberService: MemberService) { }

  ngOnInit() {
  this.members = this.memberService.getMembers();
}

  goToDetailPage(clickedMember) {
   this.router.navigate(['members', clickedMember.$key]);
  };

  onChange(option){
    this.filterByYear = option;
  }


}
