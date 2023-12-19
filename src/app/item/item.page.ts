import { CommonModule } from '@angular/common';
import {ChangeDetectionStrategy, Component, inject, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonicModule, Platform } from '@ionic/angular';
import { DataService, PurchaseItem } from '../services/data.service';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-view-message',
  templateUrl: './item.page.html',
  styleUrls: ['./item.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ]
})
export class ItemPage implements OnInit {
  public message!: PurchaseItem;
  private data = inject(DataService);
  private activatedRoute = inject(ActivatedRoute);
  private platform = inject(Platform);

  constructor() {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.message = this.data.getMessageById(parseInt(id, 10));
  }

  getBackButtonText() {
    const isIos = this.platform.is('ios')
    return isIos ? 'Inbox' : '';
  }
}
