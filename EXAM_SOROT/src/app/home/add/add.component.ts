import { Component, OnInit } from '@angular/core';
import { TypeMovieService } from '../../services/type-movie.service';
import { MovieService } from '../../services/movie.service';

import { Typemovie } from 'src/app/model/typemovie';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  movieId:any;
  datalisttype = [];
  errorMsg: string;
  Form: FormGroup;
  submitted = false;
  items: any;
  constructor(private TypeSV: TypeMovieService,
    private MovieSV: MovieService,
    private builder: FormBuilder,
    private router: Router,
    private activatedRouter: ActivatedRoute ) {
    
      this.activatedRouter.params.forEach(
        
        params => {
          this.movieId = params.id;
          //this.Form.controls['movieId'].setValue(this.movieId);
          console.log(this.movieId);
        });
     
       
      }

  ngOnInit() {
    this.LopGetDATA();
    this.initialCreateFromDate();
    this.initialUpdateFormData();

  }
  private initialUpdateFormData() {
    if (!this.movieId) { return; }
    this.MovieSV.getOneProduct(this.movieId)
      .subscribe((data => {
        this.items = data;
        this.Form.controls['movieId'].setValue(this.items.movieId);
        this.Form.controls['movieName'].setValue(this.items.movieName);
        this.Form.controls['getDate'].setValue(this.items.getDate);
        this.Form.controls['movieDetail'].setValue(this.items.movieDetail);
        this.Form.controls['movieImg'].setValue(this.items.movieImg);
        this.Form.controls['movieTypeId'].setValue(this.items.movieTypeId);

      }));

  }

  private initialCreateFromDate() {
    this.Form = this.builder.group({
      movieTypeId: ['', [Validators.required]],
      movieImg: ['', [Validators.required]],
      movieDetail: ['', [Validators.required]],
      getDate: ['', [Validators.required]],
      movieName: ['', [Validators.required]],
      movieId:[0]
    
    });
  }


  onSubmit() {

    this.submitted = true;
       if (this.Form.invalid) {
         return;
      }
    console.log(this.Form.value);
     if (this.Form.get('movieId').value === 0) {
      this.MovieSV
        .CreateMovie(this.Form.value)
        .then(res => {
       console.log(res);
         // this.alertSV.notify('เพิ่มข้อมูลเรียบร้อยแล้ว','info')
         this.router.navigate(['/', 'home']);
        })
        .catch(err => this.errorMsg = err);
    } //แก้ไข
    else  (this.Form.get('movieId').value ) 
      this.MovieSV
        .updateMovie(this.Form.get('movieId').value,this.Form.value)
        .then(res => {
              console.log(res);
        //  this.alert.notify('แก้ไขข้อมูลสำเร็จ', 'success');
          this.router.navigate(['/', 'home']);
        })
        .catch(err => this.errorMsg = err);
    }
  
 // onSubmit() {
 //   this.submitted = true;
 //   if (this.Form.invalid) {
 //     return;
 //   }

 //   console.log(this.Form.value);
 //   this.MovieSV
  //    .CreateMovie(this.Form.value)
  //     .then(res => {
  //        this.alertSV.notify('เพิ่มข้อมูลเรียบร้อยแล้ว', 'success')
  //       this.router.navigate(['/', 'home']);
  //     })
  //     .catch(err => this.errorMsg = err);

  // }


  private LopGetDATA() {
    this.TypeSV.GetDataAPI().subscribe(data => {
      this.datalisttype = data;
    });
  }
}
