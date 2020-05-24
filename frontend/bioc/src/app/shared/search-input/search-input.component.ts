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
  @Input() placeholder = 'Search';

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

    this.searchInput.valueChanges.pipe(distinctUntilChanged(), debounceTime(300)).subscribe(res => {
      this.navigate({[this.paramKeyword]: res});
    });

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
      this.router.navigate([], { queryParams: updatedParams});
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
