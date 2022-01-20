import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";


@Component({
  selector: 'app-base-converter',
  templateUrl: './base-converter.component.html',
  styleUrls: ['./base-converter.component.css']
})
export class BaseConverterComponent implements OnInit {
  converterForm = new FormGroup({
    decimal: new FormControl(''),
    octal: new FormControl(''),
    binary: new FormControl(''),
    hexadecimal: new FormControl('')
  });

  constructor() {
  }

  ngOnInit(): void {
  }

  onDecimalChange(value: string) {
    if (value !== '') {
      this.converterForm.patchValue({
        binary: parseInt(value, 10).toString(2),
        hexadecimal: parseInt(value, 10).toString(16),
        octal: parseInt(value, 10).toString(6)
      })
    } else {
      this.emptyConverterForm()
    }
  }

  isCalled = false;

  onBinaryChange(value: string) {
    this.isCalled = !this.isCalled;
    if (this.isCalled) {
      if (value !== '') {
        this.converterForm.patchValue({
          decimal: parseInt(value, 2).toString(10),
          hexadecimal: parseInt(value, 2).toString(16),
          octal: parseInt(value, 2).toString(6)
        })
      } else {
        this.emptyConverterForm()
      }
    }
    this.isCalled = false;
  }


  onHexCalled = false;

  onHexadecimalChange(value: string) {
    this.onHexCalled = !this.onHexCalled;
    if (this.isCalled) {
      if (value !== '') {
        this.converterForm.patchValue({
          decimal: parseInt(value, 16).toString(10),
          binary: parseInt(value, 16).toString(2),
          octal: parseInt(value, 16).toString(6)
        })
      } else {
        this.emptyConverterForm()
      }
    }
    this.onHexCalled = false;
  }

  isOctalCalled = false;

  onOctalChange(value: string) {
    this.isOctalCalled = !this.isOctalCalled;
    if (this.isCalled) {
      if (value !== '') {
        this.converterForm.patchValue({
          decimal: parseInt(value, 6).toString(10),
          hexadecimal: parseInt(value, 6).toString(16),
          binary: parseInt(value, 6).toString(2)
        })
      } else {
        this.emptyConverterForm()
      }
    }
    this.isOctalCalled = false;
  }

  emptyConverterForm() {
    this.converterForm.patchValue({
      binary: '',
      hexadecimal: '',
      octal: '',
      decimal: ''
    })
  }

}
