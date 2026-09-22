import { Component, signal } from '@angular/core';
import { ICustomerType } from '../classes/ICustomerType';
import { CustomerHttpService } from '../services/customer-http-service';

@Component({
  selector: 'app-service-customer-http',
  standalone: false,
  styleUrl: './service-customer-http.css',
  templateUrl: './service-customer-http.html',
})
export class ServiceCustomerHttp {
  customerTypes = signal<ICustomerType[]>([]);
  constructor(private _service: CustomerHttpService) {}
  ngOnInit(): void {
    this._service.getCustomerList().subscribe({
      next: (data) => {
        this.customerTypes.set(data);
      },
      error: (err) => {
        console.log("Lỗi " + JSON.stringify(err));
        alert("Lỗi " + JSON.stringify(err));
      }
    });
  }
}