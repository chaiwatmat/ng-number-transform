import { Injectable } from '@angular/core';

@Injectable()
export class NumbertransformService {

  constructor() { }

  transform(number: number) {
    let message = Ten.getString(number);
    message += Unit.getString(number);

    return message;
  }

}

class Unit {
  public static validate(number: number){
    return number < 10;
  }

  public static getString(number: number) {
    if (!this.validate(number)) {
      return '';
    }
    let message = '';

    if (number === 0) {
      message = 'ศูนย์';
    }else if (number === 1) {
      message = 'หนึ่ง';
    }else if (number === 2) {
      message = 'สอง';
    }else if (number === 3) {
      message = 'สาม';
    }else if ( number === 4) {
      message = 'สี่';
    }else if (number === 5) {
      message = 'ห้า';
    }else if (number === 6) {
      message = 'หก';
    }else if (number === 7) {
      message = 'เจ็ด';
    }else if (number === 8) {
      message = 'แปด';
    }else if (number === 9) {
      message = 'เก้า';
    }

    return message;
  }
}

class Ten {
  public static validate(number: number){
    return number >= 10;
  }

  public static getString(number: number) {
    if (!this.validate(number)) {
      return '';
    }

    let message = '';
    let ten = 0;
    let numerator = 0;

    ten = Math.floor(number / 10);

    if (ten === 1) {
      message = 'สิบ';
    }else if (ten === 2) {
      message = 'ยี่สิบ';
    }else if (ten === 3) {
      message = 'สามสิบ';
    }else if (ten === 4) {
      message = 'สี่สิบ';
    }else if (ten === 5) {
      message = 'ห้าสิบ';
    }else if (ten === 6) {
      message = 'หกสิบ';
    }else if (ten === 7) {
      message = 'เจ็ดสิบ';
    }else if (ten === 8) {
      message = 'แปดสิบ';
    }else if (ten === 9) {
      message = 'เก้าสิบ';
    }

    numerator = number - (ten * 10);
    if (numerator > 1) {
      message += Unit.getString(numerator);
    }else if (numerator === 1) {
      message += 'เอ็ด';
    }

    return message;
  }
}
