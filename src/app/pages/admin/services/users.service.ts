import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { User } from '@app/shared/models/user.interface';
import { Pasante } from '@app/shared/models/intern.interface';
import { UserResponse } from '@shared/models/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<User[]> {
    return this.http
      .get<User[]>(`${environment.API_URL}/users`)
      .pipe(catchError(this.handlerError));
  }

  getById(userId: number): Observable<User> {
    return this.http
      .get<any>(`${environment.API_URL}/users/${userId}`)
      .pipe(catchError(this.handlerError));
  }

  new(user: User): Observable<User> {
    return this.http
      .post<User>(`${environment.API_URL}/users`, user)
      .pipe(catchError(this.handlerError));
  }

  update(userId: number, user: User): Observable<User> {
    return this.http
      .patch<User>(`${environment.API_URL}/users/${userId}`, user)
      .pipe(catchError(this.handlerError));
  }

  delete(userId: number): Observable<{}> {
    return this.http
      .delete<User>(`${environment.API_URL}/users/${userId}`)
      .pipe(catchError(this.handlerError));
  }

  
  /* ----------------------- METODOS HTTP PARA EL PASANTE ----------------- */
  
  
  getAllPasantes(): Observable<Pasante[]> {
    return this.http
      .get<Pasante[]>(`${environment.API_URL}/interns`)
      .pipe(catchError(this.handlerError));
      
  }

  getByCiPasante(userCi: string): Observable<Pasante[]> {
    return this.http
      .get<any>(`${environment.API_URL}/interns/ci/${userCi}`)
      .pipe(catchError(this.handlerError));
  }

  
  getByNamePasante(userName: string): Observable<Pasante[]> {
    return this.http
      .get<any>(`${environment.API_URL}/interns/name/${userName}`)
      .pipe(catchError(this.handlerError));
  }


  getByProyectPasante(userProyect: string): Observable<Pasante[]> {
    return this.http
      .get<any>(`${environment.API_URL}/interns/project/${userProyect}`)
      .pipe(catchError(this.handlerError));
  }



  newPasante(user: Pasante): Observable<Pasante> {
    return this.http
      .post<Pasante>(`${environment.API_URL}/interns`, user)
      .pipe(catchError(this.handlerError));
  }




  updatePasante(userId: number, user: Pasante): Observable<Pasante> {
    return this.http
      .put<Pasante>(`${environment.API_URL}/interns/${userId}`, user)
      .pipe(catchError(this.handlerError));
  }


  deletePasantes(userId: number): Observable<{}> {
    return this.http
      .delete<Pasante>(`${environment.API_URL}/interns/${userId}`)
      .pipe(catchError(this.handlerError));
  }
  


  handlerError(error): Observable<never> {
    let errorMessage = 'Error unknown';
    if (error) {
      errorMessage = `Error ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
