import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees() {
    return [
      {"id": 1, "name": "Andrew", "age": 30},
      {"id": 2, "name": "Brandon", "age": 31},
      {"id": 3, "name": "Christina", "age": 31},
      {"id": 4, "name": "Elene", "age": 32},
    ]
  }
}
