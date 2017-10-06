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

});
