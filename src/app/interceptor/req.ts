import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';

export class ReqInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log(`modified int`);
    const modifiedReq = req.clone({
      headers: req.headers.set(
        'user-agent',
        `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML,like Gecko) Chrome/90.0.4430.93 Safari/537.36`
      )
    });
    return next.handle(modifiedReq);
  }
}
