import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  getAll():Observable<any>{
    return this.http.get(environment.url + 'books')
  }

  add(data: any){
    // @ts-ignore
    return this.http.post(environment.url + 'books',data)
  }

  delete(id: any){
    return this.http.delete(environment.url + 'books/'+id)
  }

  detail(id:any){
    return this.http.get(environment.url + 'books/'+ id)
  }

  update(id:any,data:any){
    return this.http.put(environment.url +'books/' + id,data)
  }
}

