import { Component, OnInit } from '@angular/core';
import { Team } from '../Team';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  constructor() { }

   // team = ['Portugal','France','Brazil','Spain'];   array of teams

   team : Team = {                        //  Refactor the component's team property to be of type Team

        name : 'Portugal',
        continent : 'Europe '
   }

  ngOnInit()   // The ngOnInit is a lifecycle hook Angular calls ngOnInit shortly after creating a component. 
  {
  }

}
