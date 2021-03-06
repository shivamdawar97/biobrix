import { AbstractControl } from '@angular/forms';
import { Observable, Observer } from 'rxjs';

export const mimeType = (control: AbstractControl):
Promise<{[key:string]: any}> | Observable<{[key:string]: any}> => {
  const isUrl = typeof control.value === "string"
  const fileReader = new FileReader();
  const frObs = Observable.create( (observer: Observer<{[key:string]: any}>) => {
    if(isUrl) {
      observer.next(null);
      observer.complete()
    }
    else fileReader.addEventListener("loadend", () => {
      const arr = new Uint8Array(fileReader.result as ArrayBuffer).subarray(0, 4);
      let header = '';
      let isValid;
      for (let i=0; i< arr.length; i++)
        header +=arr[i].toString(16); //concert this to a hexadecimal string
      switch(header) {
        case "89504e47":
            isValid = true;
            break;
          case "ffd8ffe0":
          case "ffd8ffe1":
          case "ffd8ffe2":
          case "ffd8ffe3":
          case "ffd8ffe8":
            isValid = true;
            break;
          default:
            isValid = false; // Or you can use the blob.type as fallback
            break;
      }
      if(isValid) observer.next(null);
      else observer.next({invalidMimeType: true});
      observer.complete();
    });
    if(!isUrl) {
      const file = control.value as File;
      fileReader.readAsArrayBuffer(file);
    }

  } );
  return frObs
};
