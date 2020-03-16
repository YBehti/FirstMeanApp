import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { MatDialog } from '@angular/material';
import { ErrorComponent } from './error/error.component';
import { Injectable } from '@angular/core';

@Injectable()

export class ErrorInterceptor implements HttpInterceptor {

  constructor(private dialog: MatDialog) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = 'Unknown error';
        let errorStatus: number;
        if (error.message) {
          errorMessage = error.error.message;
          errorStatus = error.status;
        }
        console.log(error);
        this.dialog.open(ErrorComponent, {data: {message: errorMessage, status: errorStatus}});
        return throwError(error);
      })
    );
  }
}
