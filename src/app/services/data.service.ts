import { Injectable } from '@angular/core';

export interface PurchaseItem {
  id: number;
  name: string;
  description: string;
  count: number,
  isAtHome: boolean;
  date: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public messages: PurchaseItem[] = [
    {
      id: 0,
      name: 'Apple',
      description: 'Take the green apples',
      count: 12,
      date: '9:32 AM',
      isAtHome: false
    },
    {
      id: 1,
      name: 'Beef meat',
      description: 'Meat for the grill',
      count: 2,
      date: '9:32 AM',
      isAtHome: false
    },
    {
      id: 2,
      name: 'Chicken meat',
      description: 'Meat for the salad',
      count: 5,
      date: '9:32 AM',
      isAtHome: true
    },
    {
      id: 3,
      name: 'Salt',
      description: '',
      count: 1,
      date: '9:32 AM',
      isAtHome: true
    },
    {
      id: 4,
      name: 'Liquids and heads',
      description: '2 Energy, 2 Blueberry, 2 Watermelon, 1 Orange, 3 Lemon',
      count: 10,
      date: '9:32 AM',
      isAtHome: false
    },
  ];

  constructor() { }

  public getMessages(): PurchaseItem[] {
    return this.messages;
  }

  public getMessageById(id: number): PurchaseItem {
    return this.messages[id];
  }
}
