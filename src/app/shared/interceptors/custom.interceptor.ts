import { HttpHeaders, HttpInterceptorFn } from '@angular/common/http';

export const customInterceptor: HttpInterceptorFn = (req, next) => {
  // console.log(`Request is on its way to ${req.url}`);
  const bigBasketToken = sessionStorage.getItem('token');
  // const cloneRequest = req.clone({
  //   setHeaders: {
  //     Authorization: `Bearer ${bigBasketToken}`
  //   }
  // });
  // return next(cloneRequest);

  const authReq = req.clone({
    //headers: req.headers.set('Authorization', `Bearer ${bigBasketToken}`),
    headers:new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
      'key': 'x-api-key',
      'value': 'NNctr6Tjrw9794gFXf3fi6zWBZ78j6Gv3UCb3y0x',
      'Authorization': `Bearer ${bigBasketToken}`

  })
    
  });
  return next(authReq);
};
