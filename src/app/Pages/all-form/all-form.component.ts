import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
@Component({
  selector: 'app-all-form',
  templateUrl: './all-form.component.html',
  styleUrls: ['./all-form.component.scss']
})
export class AllFormComponent implements OnInit {
  baseurl="https://tstageserver.com/aniruddh/wp-json/gf/v2/forms/"
  auth:any={
    consumer_key:'ck_5cae7c87d75b18cf62d07179e44f906969fd9f30',
    consumer_secret:'cs_6a2d4ae5ff8896f5277f0894a4f2e0990b31fb19'
  
  };
  allForm:any =[];

  constructor( private httpclient:HttpClient , private Route: Router , private ngxService: NgxUiLoaderService,) { }

  ngOnInit(): void {
    this.getAllFrom()

  }

  getAllFrom(){
    this.ngxService.start();
    this.httpclient.get(this.baseurl , {params:this.auth})
    .subscribe((res:any)=>{
      console.log(res);
      
      let pro = Object.values(res)
    console.log('http res',pro
    );    
    this.allForm = pro
     console.log(this.allForm)
    }
    // ,(err:any)=>{
    //   console.log(err)
    // }
    )
    this.ngxService.stop();
  }
  viewForm(id:any){
    this.ngxService.start()
    setTimeout(() => {
      console.log(id)
this.Route.navigate(['/employee'],{queryParams: {fromID : id}})
// this.ngxService.stop()
    }, 3000);

  }
  deleteForm(idd:any){
    this.httpclient.delete(this.baseurl + idd , {params:this.auth})
    .subscribe((res:any)=>{
      console.log(res);  
    },(err:any)=>{
      console.log( 'error',err)
    }
    )
  }

}
