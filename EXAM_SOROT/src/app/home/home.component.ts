import { Component, OnInit } from '@angular/core';
import {  MovieService } from '../services/movie.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  datalist=[];
  ERRORMSG :string;
  constructor(private MovieSV:MovieService) { }

  ngOnInit() {
    this.LopGetDATA();
  }

  private LopGetDATA(){
    this.MovieSV.GetDataAPI().subscribe(data=>{
      this.datalist = data;
    });
  }
  deletePerson(personID) {
    const result = confirm('ยืนยันการลบ?');
    if (result) {
      this.MovieSV
        .deleteMoive(personID)
        .then(res => {
         // this.alert.notify('ลบข้อมูลแล้ว', 'success');
          this.LopGetDATA();
        })
        .catch(err => this.ERRORMSG = err);
    }
  }
}
