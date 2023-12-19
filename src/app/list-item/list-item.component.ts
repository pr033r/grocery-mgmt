import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { Platform } from '@ionic/angular';
import { PurchaseItem } from '../services/data.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {RouterLink, RouterModule} from '@angular/router';
import { IonicModule } from '@ionic/angular';


@Component({
  standalone: true,
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterLink,
  ]
})
export class ListItemComponent {
  @Input({required: true}) item?: PurchaseItem;
  private platform = inject(Platform);

  isIos() {
    return this.platform.is('ios')
  }
}
