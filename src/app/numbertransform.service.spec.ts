import { TestBed, inject } from '@angular/core/testing';

import { NumbertransformService } from './numbertransform.service';

describe('NumbertransformService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NumbertransformService]
    });
  });

  it('should be created', inject([NumbertransformService], (service: NumbertransformService) => {
    expect(service).toBeTruthy();
  }));

  describe('Unit', () => {
    it('input 0 should return ศูนย์', inject([NumbertransformService], (service: NumbertransformService) => {
      expect(service.transform(0)).toEqual('ศูนย์');
    }));

    it('input 1 should return หนึ่ง', inject([NumbertransformService], (service: NumbertransformService) => {
      expect(service.transform(1)).toEqual('หนึ่ง');
    }));

    it('input 2 should return สอง', inject([NumbertransformService], (service: NumbertransformService) => {
      expect(service.transform(2)).toEqual('สอง');
    }));
  });

  describe('Ten', () => {
    it('input 10 should return สิบ', inject([NumbertransformService], (service: NumbertransformService) => {
      expect(service.transform(10)).toEqual('สิบ');
    }));

    it('input 11 should return สิบเอ็ด', inject([NumbertransformService], (service: NumbertransformService) => {
      expect(service.transform(11)).toEqual('สิบเอ็ด');
    }));

    it('input 20 should return ยี่สิบ', inject([NumbertransformService], (service: NumbertransformService) => {
      expect(service.transform(20)).toEqual('ยี่สิบ');
    }));

    it('input 25 should return ยี่สิบห้า', inject([NumbertransformService], (service: NumbertransformService) => {
      expect(service.transform(25)).toEqual('ยี่สิบห้า');
    }));

    it('input 31 should return สามสิบเอ็ด', inject([NumbertransformService], (service: NumbertransformService) => {
      expect(service.transform(31)).toEqual('สามสิบเอ็ด');
    }));
  });


  describe('Hundred', () => {
    it('input 100 should return หนึ่งร้อย', inject([NumbertransformService], (service: NumbertransformService) => {
      expect(service.transform(100)).toEqual('หนึ่งร้อย');
    }));

    it('input 101 should return หนึ่งร้อยเอ็ด', inject([NumbertransformService], (service: NumbertransformService) => {
      expect(service.transform(101)).toEqual('หนึ่งร้อยเอ็ด');
    }));

    it('input 110 should return หนึ่งร้อยสิบ', inject([NumbertransformService], (service: NumbertransformService) => {
      expect(service.transform(110)).toEqual('หนึ่งร้อยสิบ');
    }));

    it('input 111 should return หนึ่งร้อยสิบเอ็ด', inject([NumbertransformService], (service: NumbertransformService) => {
      expect(service.transform(111)).toEqual('หนึ่งร้อยสิบเอ็ด');
    }));

    it('input 201 should return สองร้อยเอ็ด', inject([NumbertransformService], (service: NumbertransformService) => {
      expect(service.transform(201)).toEqual('สองร้อยเอ็ด');
    }));

    it('input 853 should return แปดร้อยห้าสิบสาม', inject([NumbertransformService], (service: NumbertransformService) => {
      expect(service.transform(853)).toEqual('แปดร้อยห้าสิบสาม');
    }));
  });

});
