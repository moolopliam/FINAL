import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../model/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private URL = 'https://localhost:44356/movie/Movies';
  constructor(private http:HttpClient) { }

  public GetDataAPI(){
    return this.http.get<Movie[]>(this.URL);
  }


  CreateMovie(Movie)
  {
    let promise = new Promise((resolve, reject) => {
      this.http.post(this.URL, Movie)
        .toPromise()
        .then(
          res => {
            //sec
            //this.router.navigate(['/', 'home']);
            console.log(res);
            resolve(Movie);
          }
        );
      });
      return promise;
  }

  getOneProduct(id){
    return this.http.get<Movie[]>(this.URL+'/'+id);
  }

  deleteMoive(data:any) {
 
    const promise = new Promise((resolve, reject) => {
      this.http.delete(this.URL+'/'+data)
        .toPromise()
        .then(
          res => {
            console.log(res);
            resolve(data);
          }
        );
    });
    console.log(data);
    return promise;
  }
  updateMovie(id:any,data) {
    const promise = new Promise((resolve, reject) => {
    const api = this.URL;
      this.http.put(api+'/'+id,data)
        .toPromise()
        .then(
          res => {
            console.log(res);
            resolve(id);
          }
        );
      });
      return promise;
  }

}
