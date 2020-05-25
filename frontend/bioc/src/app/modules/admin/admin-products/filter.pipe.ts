import { PipeTransform, Pipe } from "@angular/core";
import { ProductDetail } from 'src/app/core/models/product-detail.model';

@Pipe({
  name:'filter'
})
export class FilterPipe implements PipeTransform {
  transform = (value: ProductDetail[], filterString: string) =>
  value===undefined ? value
  : value.filter(p => p.product_name.toLowerCase().match(filterString.toLowerCase()))

}
