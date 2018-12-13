import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie.service';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  form: FormGroup;
  movieId: any;
  Detail =[];
  errMsg:string;
  constructor(
    private builder: FormBuilder,
    private router: Router,
    private MovieSV: MovieService,

    private activatedRouter: ActivatedRoute
  ) {

    this.activatedRouter.params.forEach(
      params => {
        this.movieId = params.id;
       // this.form.controls['PERSION_CODE'].setValue(this.movieID);
        console.log(this.movieId);
      })
   }

  ngOnInit() {
    this.showProductDetail();
  }
  showProductDetail(){  
    this.MovieSV.getOneProduct(this.movieId)
    .subscribe(data=> this.Detail  = data,
     error => this.errMsg = error);
  }

}
