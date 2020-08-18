import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ApiService } from 'src/app/common/services/api.service';


@Injectable({
    providedIn: 'root'
})
export class SkillService extends ApiService {

    getSkillList(): Observable<any> {
        return this.http.get(this.apiServer + '/getSkillList')
            .pipe(
                catchError(this.errorHandler)
            )
    }

    getSkillById(id: any): Observable<any> {
        return this.http.get(this.apiServer + 'skill/' + id)
            .pipe(
                catchError(this.errorHandler)
            )
    }

    insertSkill(skill): Observable<any> {
        return this.http.post(this.apiServer + 'insertSkill', skill)
            .pipe(
                catchError(this.errorHandler)
            )
    }

    updateSkill(skill): Observable<any> {
        return this.http.put(this.apiServer + 'skill', skill)
            .pipe(
                catchError(this.errorHandler)
            )
    }

    deleteSkill(id: any): Observable<any> {
        console.log(id);
        return this.http.delete(this.apiServer + 'deleteSkill?id=' + id)
            .pipe(
                catchError(this.errorHandler)
            )
    }

    errorHandler(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        } else {
            // Get server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(errorMessage);
        return throwError(errorMessage);
    }
}
