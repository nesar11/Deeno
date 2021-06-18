import { Injectable, Injector } from '@angular/core';
import { HttpErrorResponse, HttpInterceptor, HttpResponse } from '@angular/common/http'
import { AuthService } from './auth.service';
import { throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
@Injectable()
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private authService: AuthService){}
  intercept(req, next) {
    let tokenizedReq = req.clone(
      {
        headers: req.headers.set('Authorization', 'bearer ' + this.authService.getToken())
      }
    )
    return next.handle(tokenizedReq)
            .pipe(
                tap(event => {
                    if (event instanceof HttpResponse) {
                        //any operation when success
                    }
                }),
                catchError(err => {
                    if (err instanceof HttpErrorResponse) {
                        if (err.status === 401) {
                            alert('Session Timeout...!');
                        }
                    }
                    return throwError(err);
                })
            );
  }

}
