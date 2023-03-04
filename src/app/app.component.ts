import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from './services/ui/custom-toastr.service';
declare var $: any
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ETicaretClient';
  constructor(private toastrService: CustomToastrService) {
    toastrService.message("Mesajimiz", "Title", {
      messageType: ToastrMessageType.Error,
      position: ToastrPosition.BottomCenter
    });
    toastrService.message("Mesajimiz", "Title", {
      messageType: ToastrMessageType.Info,
      position: ToastrPosition.BottomFullWidth
    });
    toastrService.message("Mesajimiz", "Title", {
      messageType: ToastrMessageType.Success,
      position: ToastrPosition.TopRight
    });
    toastrService.message("Mesajimiz", "Title", {
      messageType: ToastrMessageType.Warning,
      position: ToastrPosition.TopFullWidth
    });
  }
}
