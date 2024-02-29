import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
})
export class EmployeeComponent implements OnInit {
  hello:string='india'
  jsonForm: any;  
  leaveForm: FormGroup;
  leaverequest: any = [];
  grouptext: any = {
    name: 'ashu',
    pandey: 'pandey',
  };
  selctValue: any;
  rules: any = [];
  formId:any;
constructor(private FormBuilder: FormBuilder,     private route: ActivatedRoute, private Route: Router,
   private httpclient:HttpClient , private ngxService: NgxUiLoaderService)  {
    this.leaveForm = this.FormBuilder.group({
      nameEmployee: [''],
      purposeLeave: [''],
      dateLeave: [''],
    });
  }
baseurl="https://tstageserver.com/aniruddh/wp-json/gf/v2/forms/"
auth:any={
  consumer_key:'ck_5cae7c87d75b18cf62d07179e44f906969fd9f30',
  consumer_secret:'cs_6a2d4ae5ff8896f5277f0894a4f2e0990b31fb19'

};

    ngOnInit() {
   this.route.queryParams.subscribe((params:any) =>{
      console.log( 'idd', params.fromID)
      this.formId =params.fromID
      console.log(this.formId)
    } ); // output: 
   this.getoneFrom();
this.ngxService.stop()
    // this.jsonForm.fields.forEach((res: any) => {
    //   this.rules = res.conditionalLogic.rules;
    //   console.log('rules', this.rules);
    //   console.log('resss', res.conditionalLogic.rules);
    // });
  }

  getoneFrom(){
this.httpclient.get(this.baseurl + this.formId,{ params:this.auth}).subscribe((res)=>{
console.log('http res',res)
this.jsonForm = res;
console.log('jsonForm' , this.jsonForm)
})
  }

  backButton(){
    this.Route.navigate(['/allFrom'])
  }



  onChangeradion(selectValue: any) {
    this.selctValue = selectValue;
    // this.jsonForm.fields[0].Name = selectValue.value

    // console.log('selectValue', this.jsonForm.fields[0]);
  }

  formSubmit(form:any){
    console.log('Submitted Form', form.value)
    console.log('keys Form')

    console.log( 'before',this.jsonForm);
    this.jsonForm.fields.forEach((item:any) => { item['value'] = form.value[item.id] });
    console.log('after', this.jsonForm);

    // console.log( 'submit form', form.value)
    // // this.jsonForm.fields[0].Name = form.value.Name
    // console.log( 'submit form',this.jsonForm.fields[0] )

  }

//   async leaveSub() {
//     console.log(this.leaveForm.value);
//     await this.leaverequest.push(this.leaveForm.value);
//     console.log('leaverequest', this.leaverequest);
//     this.Route.navigate(['/hr'], { queryParams: this.grouptext });
//   }
 }
