import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Typemovie } from '../model/typemovie';
import { Type } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class TypeMovieService {

  private URL ='https://localhost:44356/typemovie/TypeMovies';
  constructor(private http:HttpClient) { }

  public GetDataAPI(){
    return this.http.get<Typemovie[]>(this.URL);
  }
}
