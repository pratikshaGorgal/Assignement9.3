import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService {

public countCapital():any
{

  var str="HEllo My Name Is";
  var numUpper=(str.match(/[A-Z]/g)||[]).length;
  return numUpper;
}


  constructor() { }
}