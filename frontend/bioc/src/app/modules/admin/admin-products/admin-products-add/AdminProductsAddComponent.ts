import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-admin-products-add',
  templateUrl: './admin-products-add.component.html',
  styleUrls: ['./admin-products-add.component.scss']
})
export class AdminProductsAddComponent implements OnInit {
  constructor() { }
  isUploading = false;
  isFileUploaded = false;
  ngOnInit(): void {
  }
}
