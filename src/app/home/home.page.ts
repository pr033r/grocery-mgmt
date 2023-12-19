import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {IonicModule, RefresherCustomEvent} from '@ionic/angular';
import { DataService, PurchaseItem } from '../services/data.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {ListItemComponent} from "../list-item/list-item.component";

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListItemComponent,
  ]
})
export class HomePage {
  private data = inject(DataService);

  refresh(ev: any) {
    setTimeout(() => {
      (ev as RefresherCustomEvent).detail.complete();
    }, 3000);
  }

  getMessages(): PurchaseItem[] {
    return this.data.getMessages();
  }
}
