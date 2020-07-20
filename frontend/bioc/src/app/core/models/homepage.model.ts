import {PagerProduct} from './pagerproduct.model';
import {RecentProduct} from './recentProduct.model';
import {Testimony} from './testimony.model';

export interface Homepage {
  pagerProducts: PagerProduct[];
  recentProducts: RecentProduct[];
  testimonies: Testimony[];
  email: string,
  contact_no: string
}
