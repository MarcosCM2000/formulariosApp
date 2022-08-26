import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  public emailPattern          : string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
  public nombreApellidoPattern : string = '([a-zA-Z]+) ([a-zA-Z]+)'; 

  constructor() { }

  test(argumento: FormControl) : ValidationErrors | null {
    const value: string = argumento.value?.trim().toLowerCase();
    if (value === 'strider') {
      //  ERROR
      return { noStrider: true }  //RETORNAR OBJETO = ERROR
    }
    return null; //RETORNAR NULL = OK
  }

  camposIguales(campo1: string, campo2: string) {
    return (formGroup: AbstractControl): ValidationErrors | null  => {
      const pass1 = formGroup.get(campo1)?.value;
      const pass2 = formGroup.get(campo2)?.value;
      if (pass1 !== pass2) {
        formGroup.get(campo2)?.setErrors({noIguales: true})
        return {noIguales: true}
      } else {
        formGroup.get(campo2)?.setErrors(null);
      }
      return null;
    }
  }
}
