import { Component, OnInit } from '@angular/core';

//Iconos
import { faCalendarDay } from '@fortawesome/free-solid-svg-icons';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { faChartBar } from '@fortawesome/free-solid-svg-icons';
import { faHistory } from '@fortawesome/free-solid-svg-icons';
import { faCalendarWeek } from '@fortawesome/free-solid-svg-icons';
import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons';
import { faFileInvoice } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {

  //ICONOS
  faCalendarDay=faCalendarDay;
  faCalendarAlt=faCalendarAlt;
  faChartBar=faChartBar;
  faHistory=faHistory;
  faCalendarWeek=faCalendarWeek;
  faExchangeAlt=faExchangeAlt;
  faFileInvoice=faFileInvoice;
  //ICONOS

  //VARIABLES

  change:string;

  constructor() { }

  ngOnInit(): void {
  }

  singlePage(value:string){
      this.change= value;
      localStorage.setItem('cambio',this.change); 
  }

}
