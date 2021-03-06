import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {debounceTime, distinctUntilChanged, take} from 'rxjs/operators';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit, OnDestroy {

  searchInput = new FormControl('');
  @Input() paramKeyword = '';
  placeholder = 'Search';

  @Output() searchChanged = new EventEmitter<string>();

  subscription = null;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    if (this.paramKeyword) {
      const param = this.activatedRoute.snapshot.queryParamMap.get(this.paramKeyword);

      if (this.searchInput.value !== param) {
        this.searchInput.patchValue(param);
      }
    }

    this.subscription = this.activatedRoute.queryParams.subscribe(res => {
      this.searchChanged.emit(res[this.paramKeyword]);
    });
  }

  navigate(val) {
    this.activatedRoute.queryParams.pipe(take(1)).subscribe(res => {
      // getting all the params
      const newParams = {...res, ...val};

      // remove empty params
      const updatedParams = Object.keys(newParams).filter(key => !!newParams[key]).reduce((pre, key) => {
        return {...pre, [key]: newParams[key]};
      }, {});
      this.router.navigate(['/products/all'], { queryParams: updatedParams});
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  searchNext(value: string) {
    if ( value !== '') {
      this.navigate({[this.paramKeyword]: value});
    }
  }

  searchButtonClicked(search) {
    if (!this.searchInput.value) {
      search.focus();
    } else {
      this.searchNext(this.searchInput.value);
    }
  }

  onEnterPressed(event: KeyboardEvent) {
    if (event.keyCode === 13) {
      this.searchNext(this.searchInput.value);
    }
  }

}
