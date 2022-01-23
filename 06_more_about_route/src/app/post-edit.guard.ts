import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';

export interface PostEditGuardInterface {
  canDeactivate: () => Observable<boolean> | boolean;
}

@Injectable({
  providedIn: 'root'
})
export class PostEditGuard implements CanDeactivate<PostEditGuardInterface> {
  canDeactivate(
    component: PostEditGuardInterface,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean> | boolean {
    return component.canDeactivate ? component.canDeactivate() : true;
  }

}
