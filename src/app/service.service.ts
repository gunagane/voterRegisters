import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
ip : any = "http://localhost:8080"
  constructor(private http:HttpClient) { }

  postRegisters(registers:any){
    console.log(registers)
    return this.http.post(`${this.ip}/voter/postregister`,registers)
  }
  getVoters(){
    return this.http.get(`${this.ip}/voter/getVoters`)
  }
}
