import {
  windowHeightSelector,
  windowWidthSelector,
  isMobile
} from '@caiu/library';
import { Store } from '@ngrx/store';
import { Observable, combineLatest } from 'rxjs';

export function isMobileSelector(store: Store<any>): Observable<boolean> {
  return combineLatest(
    windowHeightSelector(store),
    windowWidthSelector(store),
    (h, w) => {
      console.log(h, w, isMobile());
      return w < h || isMobile();
    }
  );
}
