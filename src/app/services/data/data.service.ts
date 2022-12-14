import { IData } from './../../model/data.model';
import { IResponse } from './../../model/res.model';
import { Observable, map, startWith } from 'rxjs';
import { ConfigurationUrl } from './../../config/api.config';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http:HttpClient,
    private toastService: ToastrService
  ) { }

  private domain = ConfigurationUrl.host;
  private urlSample:string = this.domain + `${ConfigurationUrl.list.data}`;
  private sampleData:any;

  private getData():Observable<IResponse< IData>>{
    this.sampleData =  this.http.get<IResponse<IData>>(this.urlSample).pipe(map(res => res));
    this.sampleData.subscribe((next:IResponse<IData>) => {
      if(next.status === 200){
        localStorage['sampleData'] = JSON.stringify(next.data)
      }
      return  this.toastService.error("Cannot get the sample data") && null;
    })
    return this.sampleData.pipe(startWith(JSON.parse(localStorage['sampleData' || '[]'])))
  }

  public get getSample():Observable<IResponse<IData>>{
    return this.getData();
  }
}
