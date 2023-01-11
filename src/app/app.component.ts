import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products:any=[
    {
      name:'Producto Uno',
      price: 123,
      image: '../assets/image/product.jpg',
      category: 'toys'
    },
    {
      name:'Producto dos',
      price: 485,
      image: '../assets/image/product.jpg'
    },
    {
      name:'Producto tres',
      price: 741,
      image: '../assets/image/product.jpg',
      category: 'tools'
    },
    {
      name:'Producto cuatro',
      price: 956,
      image: '../assets/image/product.jpg'
    },
    {
      name:'Producto cinco',
      price: 365,
      image: '../assets/image/product.jpg'
    },
  ]
  title = 'My-try';
  name= 'markos';
  age = 35;
  img = 'https://www.shutterstock.com/image-photo/cute-beagle-serious-face-lying-600w-1975831814.jpg';
  btnDisabled = true;
  emojis: string[] = ['😊','❤️','👍','🎶','😍'];
  newEmoji = '';
  toggleBtn(){
    this.btnDisabled= !this.btnDisabled
  }

  person = {
    name:'markos',
    age: 35,
  }

  add(){
    this.age +=1;
  }
  less(){
    this.age -=1;
  }
  onScroll(event: Event){
    const element = event.target as HTMLElement;
    console.log(element.scrollTop)
  }
  addEmoji(){
    this.emojis.push(this.newEmoji);
    this.newEmoji='';
  }
  delete(i: number){
    this.emojis.splice(i,1);
    
  }
}
