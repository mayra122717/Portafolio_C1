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
      semana: 1,
      texto: `Durante esta primera semana, pude conocer el plan de estudios completo. Esto me permitió visualizar todo el camino que iba a recorrer y organizarme mental y académicamente. Comprendí la importancia de tener claridad en los objetivos desde el inicio y me comprometí a mantener constancia en el aprendizaje.`
    },
    {
      semana: 2,
      texto: `Esta semana fue fundamental para entender cómo funciona el desarrollo web de forma integral...`,
    },
    {
      semana: 3,
      texto: `Descubrir Emmet fue una experiencia muy útil. Pude ver cómo algo tan simple como usar atajos puede hacer mi trabajo más rápido y eficiente. Me motivó a seguir explorando herramientas que me ayuden a mejorar mi productividad como desarrollador.`,
    },
    {
      semana: 4,
      texto: `Esta semana reforcé mis conocimientos en HTML, comprendiendo que no se trata solo de escribir etiquetas, sino de estructurar correctamente el contenido. Aprendí sobre etiquetas semánticas y buenas prácticas, lo cual es fundamental para la accesibilidad y el posicionamiento web.`,
    },
    {
      semana: 5,
      texto: `Con CSS pude dar vida a mis proyectos. Aprendí a aplicar estilos, a trabajar con selectores, flexbox y a organizar mejor mi código. También entendí que el diseño visual requiere paciencia, atención al detalle y mucha práctica.`,
    },
    {
      semana: 6,
      texto: `Esta semana fue intensa pero muy enriquecedora. Bootstrap y Tailwind me permitieron maquetar interfaces de manera más rápida y profesional. Al mismo tiempo, empecé a programar con JavaScript, lo que me introdujo al mundo de la lógica y la interacción con el usuario. Fue el primer paso hacia pensar como desarrollador.`,
    },
    {
      semana: 7,
      texto: `Aprender React fue un gran desafío y a la vez un logro importante. Comprendí cómo funcionan los componentes, el estado y el ciclo de vida. Me di cuenta de lo potente que puede ser esta biblioteca para construir interfaces dinámicas. Esta semana me sentí mucho más cerca de poder desarrollar aplicaciones reales.`,
    },
    {
      semana: 8,
      texto: `Explorar los Hooks en React fue un cambio de paradigma. Comprendimos cómo useState, useEffect y otros hooks nos permiten escribir componentes funcionales más limpios y reutilizables, sin depender de clases. Esto mejora la legibilidad y mantiene mejor el estado y los efectos secundarios. Usarlos en casos reales nos permitió apreciar la modularidad que React ofrece para crear interfaces dinámicas y reactivas.`,
    },
    {
      semana: 9,
      texto: `Aprender sobre lenguajes backend nos permitió entender mejor la lógica que ocurre "detrás de escena" en una aplicación. Profundizamos en las diferencias entre PHP, Python, Java y Node.js. Esta visión nos ayudó a conectar el frontend con el servidor y a comprender la importancia de REST, controladores, enrutamiento y bases de datos en la arquitectura de sistemas web.`,
    },
    {
      semana: 10,
      texto: `Implementar un sistema de login con PHP fue clave para comprender los conceptos de autenticación y gestión de sesiones. Vimos la importancia de proteger las credenciales, validar entradas del usuario, y manejar correctamente la persistencia del login. También reflexionamos sobre las vulnerabilidades comunes (como inyecciones SQL) y la necesidad de aplicar buenas prácticas de seguridad.`,
    },
    {
      semana: 11,
      texto: `Revisar artículos relacionados con el impacto del software nos permitió reflexionar sobre cómo las decisiones técnicas influyen no solo en el rendimiento, sino también en la experiencia del usuario, la escalabilidad y la ética en el desarrollo. Aprendimos a analizar críticamente casos reales y teorías aplicadas, destacando la responsabilidad del desarrollador en entornos complejos y cambiantes.`,
    },
    {
      semana: 12,
      texto: `Con Jakarta JPA y Spring aprendimos a abstraer el acceso a bases de datos con una capa ORM, lo que mejora la productividad y mantenimiento del código. La combinación con Spring Boot nos permitió construir APIs de manera estructurada y profesional. Esta semana fue clave para acercarnos al desarrollo empresarial moderno, enfocado en escalabilidad y reutilización de componentes.`,
    },
    {
      semana: 13,
      texto: `Laravel nos mostró cómo un framework puede simplificar tareas complejas en PHP como rutas, autenticación, migraciones y vistas. El uso de Eloquent ORM facilitó la interacción con la base de datos, y Blade como motor de plantillas nos ayudó a separar lógica y presentación. Laravel se convirtió en una herramienta poderosa para construir proyectos rápidos pero robustos.`,
    },
    {
      semana: 14,
      texto: `Flask nos abrió las puertas al mundo del desarrollo web con Python. Su enfoque minimalista nos permitió entender con claridad cómo funciona una aplicación web desde el enrutamiento hasta la conexión con la base de datos. También trabajamos con Jinja2 y request, lo que reforzó la importancia del backend ligero pero funcional, ideal para proyectos ágiles o educativos.`,
    },
    {
      semana: 15,
      texto: `La incorporación de sistemas inteligentes en diversas áreas representa un avance significativo en la forma en que interactuamos con la tecnología. A través de su capacidad para aprender, adaptarse y tomar decisiones, estos sistemas permiten automatizar procesos complejos, optimizar recursos y mejorar la toma de decisiones basada en datos.`,
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
