import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { AvancesServiceService } from 'src/app/shared/service/avances-service.service';

@Component({
  selector: 'app-grafica-avances',
  templateUrl: './grafica-avances.component.html',
  styleUrls: ['./grafica-avances.component.css']
})
export class GraficaAvancesComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
  };

  public barChartLabels: Label[] = ['Avances'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];
  /*  public barChartData: ChartDataSets[];  */
  datos: any;

  private cantidades =[];
  private nombres=[]

  constructor(private avanceSerivce: AvancesServiceService) {
    
  }

  ngOnInit(): void {
    this.getDatos();
  }

  public getDatos() {
    this.avanceSerivce.getReportAdvance().subscribe((res: any) => {
      this.datos = res;
      console.log(this.datos);
     /*  this.barChartData = []; */

      for (const dato of this.datos) {
         this.cantidades.push(dato.cantidad);
         this.nombres.push(dato.nombreProyecto);

       // this.barChartData.push({ data: dato.cantidad, label: dato.nombreProyecto });
      }   
        console.log(this.nombres);
      // this.barChartData[0].data= [8];
        this.cargarDatos(this.cantidades,this.nombres);
    })
  }

  cargarDatos(cantidades, nombres){
     for(const i in cantidades){
       console.log(cantidades[i]);
      this.barChartData[i].data= [cantidades[i]];
      this.barChartData[i].label=[nombres[i]];
     }
    
  }

    public barChartData: ChartDataSets[] = [
     
     { data: [4], label: 'Proyecto D' },
     { data: [3], label: 'Proyecto B' },
     { data: [2], label: 'Proyecto C' }
   ]; 

}
