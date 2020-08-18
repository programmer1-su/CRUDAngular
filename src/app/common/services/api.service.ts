import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';

@Injectable()
export class ApiService {

    protected apiServer: string = environment.apiServer;

    constructor(
        protected http: HttpClient
    ) { }

    // protected handleError(error: Response | any) {
    //     return Observable.throw(error);
    // }
}
