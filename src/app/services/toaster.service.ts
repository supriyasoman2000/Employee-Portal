import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  constructor(private toastr: ToastrService) { }

showSuccess(msg:any) {
  this.toastr.success('Success', msg);
}

showError(msg:any) {
  this.toastr.error('Error', msg);
}

showWarning(msg:any) {
  this.toastr.info('Warning', msg);
}

}
