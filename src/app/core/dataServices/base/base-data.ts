import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '@env/environment';

export class BaseData<T> {
  constructor(private endPoint: string, private http: HttpClient) {}

  getOne(id: number): Observable<T> {
    return this.http.get<T>(
      `${environment.webApiBaseUrl}/${this.endPoint}/${id}`
    );
  }

  getAll(): Observable<T[]> {
    return this.http.get<T[]>(`${environment.webApiBaseUrl}/${this.endPoint}`);
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
