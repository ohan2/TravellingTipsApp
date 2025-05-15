import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';


@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.page.html',
  styleUrls: ['./tickets.page.scss'],
  // additions
  standalone: true,
  imports: [IonicModule]

})
export class TicketsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
