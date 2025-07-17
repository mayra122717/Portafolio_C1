// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-reflexion',
//   imports: [],
//   templateUrl: './reflexion.component.html',
// })
// export class ReflexionComponent {
//   title = '';
//   subtitle = '';

//   private fullTitle = 'Reflexiones';
//   private fullSubtitle = 'REACT';

//   ngOnInit(): void {
//     this.typeWriter(this.fullTitle, 'title', 100).then(() => {
//       this.typeWriter(this.fullSubtitle, 'subtitle', 50);
//     });
//   }

//   async typeWriter(text: string, property: 'title' | 'subtitle', speed: number) {
//     for (let i = 0; i <= text.length; i++) {
//       this[property] = text.substring(0, i);
//       await new Promise(resolve => setTimeout(resolve, speed));
//     }
//   }
// }
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reflexion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reflexion.component.html',
})
export class ReflexionComponent implements OnInit {
  reflexiones = [
    {
      semana: 2,
      texto: `Esta semana fue fundamental para entender cómo funciona el desarrollo web de forma integral...`,
    },
    {
      semana: 3,
      texto: `Descubrir Emmet fue una experiencia muy útil...`,
    },
    {
      semana: 4,
      texto: `Esta semana reforcé mis conocimientos en HTML...`,
    }
  ];

  flippedCards: boolean[] = [];

  ngOnInit(): void {
    this.flippedCards = Array(this.reflexiones.length).fill(false);
  }

  flipCard(index: number): void {
    this.flippedCards[index] = !this.flippedCards[index];
  }
}
