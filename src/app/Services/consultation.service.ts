import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConsultationService {

    ConsultationDomain = environment.ConsultationMockURL
  constructor(private http:HttpClient) { }
  roleName = "vet";
  roleId = 1;
  getAllAppointmentsByRole(roleId:number,roleName:string){
    return this.http.get(
        `${this.ConsultationDomain}api/appointments/getappointments/${roleId}/${roleName}`
    );
  }
}
