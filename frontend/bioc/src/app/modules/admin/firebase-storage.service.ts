import {Injectable} from "@angular/core";
import {AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask} from "@angular/fire/storage";
import {catchError, finalize} from "rxjs/operators";

@Injectable()
export class FirebaseStorageService {

  constructor(private storage: AngularFireStorage) {}


   uploadFile(file: File)  {
    return new Promise<string>( (resolve,reject) => {
      const id = `${Math.random().toString(36).substring(2)}_${Date.now()}`;
      const ref: AngularFireStorageReference = this.storage.ref('product_images').child(id);
      const task: AngularFireUploadTask = ref.put(file)

      task.snapshotChanges().pipe(
        finalize( async() => {
          const downloadURL = await ref.getDownloadURL().toPromise();
          console.log(downloadURL)
          resolve(downloadURL)
        }),
        catchError(_ => reject)
      ).subscribe();

    } )

  }

}
