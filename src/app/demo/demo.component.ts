import { Component } from '@angular/core';
import { NumberService } from '../number.service';
import { StringService } from '../string.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {

  public iRet:any;
  public iRet1:any;
  constructor(public hobj:NumberService,public hobj1:StringService)
{

}
ngOnInit()
{
  this.iRet=this.hobj.ChkPrime();
  this.iRet1=this.hobj1.countCapital();
}
}
