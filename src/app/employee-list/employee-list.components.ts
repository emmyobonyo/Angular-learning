import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'employee-list',
  template: `
    <h2>Employee List</h2>
    <ul *ngFor="let employee of employees">
        <li>{{ employee.id }}. {{ employee.name }} - {{ employee.age }}</li>
    </ul>
  `,
  // styleUrls: ['./app.component.css'],
  styles: [`
    h3 {
      color: dodgerblue;
    }
  `]
})
export class EmployeeListComponent {
  public employees:any = []
  constructor(private _employeeService: EmployeeService) {
    this.employees = this._employeeService.getEmployees()
  }
}
