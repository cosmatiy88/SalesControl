import { formatDate } from '../../jsScripts/formatDate';
import { Item } from './item';

export class Order{
    constructor(order){
        this.id = order._id;
        this.date = order.date;
        this.items = order.items.map(item => new Item(item));
    }

    addItem(){
      this.items.push(
        new Item({
          id: this.items.length,
          code: '',
          product: '',
          quantity: '',
        })
      );
    }

    getOrderDate(){
        return formatDate(this.date);
    }

    getModel(){
        return {
            id: this.id,
            date: this.date,
            items: this.items
        };
    }
    
    getListModel(){
        return [
            {
                type: 'avatarInitials',
                value: this.id,
            },
            {
                type: 'lbl',
                label: `Order on day ${this.getOrderDate()}`
            }
        ];
    }

    getOrderDataForTable(){
        return {
            order: this,
            rowKey: "code"
        };
    }
}