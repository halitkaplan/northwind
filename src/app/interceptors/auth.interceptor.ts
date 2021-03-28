import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let token = localStorage.getItem("token"); // tokeni yakalıyorum
    let newRequest : HttpRequest<any>; // bizim yaptığımız istek bu
    newRequest=request.clone({          // kullanıcın yapmaya çalıştığı requesti klonla
      headers:request.headers.set("Authorization","Bearer " + token)  // ekstra bir şeyler eklemek
    })                                          
                                      
                                        

    return next.handle(newRequest);
  }
}
