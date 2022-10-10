import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private baseUrl = "http://localhost:8080/todos";

  constructor(private http: HttpClient) { }

  public getTodos(): Observable<Todo[]>{
    return this.http.get<Todo[]>(`${this.baseUrl}`)
  }

  public save(todo: Todo) {
    return this.http.post(`${this.baseUrl}`, todo);
  }

  public deleteTodo(id: string) {
    console.log(id);
    console.log(`${this.baseUrl}/${id}`);
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}