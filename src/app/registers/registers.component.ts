import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { from } from 'rxjs';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-registers',
  templateUrl: './registers.component.html',
  styleUrls: ['./registers.component.scss']
})
export class RegistersComponent implements OnInit {
  form!:FormGroup;
  constructor(private fb:FormBuilder, private regService:ServiceService) { 
    this.form = this.fb.group({
      firstName:[''],
      lastName:[''],
      age:[null],
      adharNo:[null],
      gender:['']
    })
  }

  ngOnInit(): void {
  }
  submit(){
    console.log(this.form.value)
    this.regService.postRegisters(this.form.value).subscribe(res=>{
      console.log(res)
    })
  }

}
