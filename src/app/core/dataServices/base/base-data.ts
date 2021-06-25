import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '@env/environment';

export interface GetAllOptions {
  params?:
    | HttpParams
    | {
        [param: string]: string | string[];
      };
}

export class BaseData<T> {
  constructor(private endPoint: string, private http: HttpClient) {}

  getOne(id: number): Observable<T> {
    return this.http.get<T>(
      `${environment.webApiBaseUrl}/${this.endPoint}/${id}`
    );
  }

  getAll(options?: GetAllOptions): Observable<T[]> {
    return this.http.get<T[]>(`${environment.webApiBaseUrl}/${this.endPoint}`, {
      params: options?.params,
    });
  }

  create(data: Partial<T>): Observable<T> {
    return this.http.post<T>(
      `${environment.webApiBaseUrl}/${this.endPoint}`,
      data
    );
  }

  update(id: number, data: Partial<T>): Observable<T> {
    return this.http.put<T>(
      `${environment.webApiBaseUrl}/${this.endPoint}/${id}`,
      data
    );
  }

  delete(id: number): Observable<T> {
    return this.http.delete<T>(
      `${environment.webApiBaseUrl}/${this.endPoint}/${id}`
    );
  }
}
