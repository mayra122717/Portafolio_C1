import { Routes } from '@angular/router';
import { MainComponent } from './layout/main/main.component';
import { Semana1Component,  } from './pages/semanas/semana1/semana1.component';
import { Semana2Component } from './pages/semanas/semana2/semana2.component';
import { Semana3Component } from './pages/semanas/semana3/semana3.component';
import { Semana4Component } from './pages/semanas/semana4/semana4.component';
import { Semana5Component } from './pages/semanas/semana5/semana5.component';
import { Semana6Component } from './pages/semanas/semana6/semana6.component';
import { Semana7Component } from './pages/semanas/semana7/semana7.component';
import { Semana8Component } from './pages/semanas/semana8/semana8.component';
import { Semana9Component } from './pages/semanas/semana9/semana9.component';
import { Semana10Component } from './pages/semanas/semana10/semana10.component';
import { Semana11Component } from './pages/semanas/semana11/semana11.component';
import { Semana12Component } from './pages/semanas/semana12/semana12.component';
import { Semana13Component } from './pages/semanas/semana13/semana13.component';
import { Semana14Component } from './pages/semanas/semana14/semana14.component';

export const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        children: [
            {
                path: 'home',
                loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
            },
            {
                path: 'semanas',
                loadComponent: () => import('./pages/semanas/semanas.component').then(m => m.SemanasComponent),
            },
            {
                path: 'reflexion',
                loadComponent: () => import('./pages/reflexion/reflexion.component').then(m => m.ReflexionComponent),
            },
            {
                path: 'bibliografia',
                loadComponent: () => import('./pages/bibliografia/bibliografia.component').then(m => m.BibliografiaComponent),
            },
            {
                path: 'semanas/1',
                loadComponent: () => import('./pages/semanas/semana1/semana1.component').then(m => Semana1Component)
            },
            {
                path: 'semanas/2',
                loadComponent: () => import('./pages/semanas/semana2/semana2.component').then(m => Semana2Component)
            },
            {
                path: 'semanas/3',
                loadComponent: () => import('./pages/semanas/semana2/semana2.component').then(m => Semana3Component)
            },
            {
                path: 'semanas/4',
                loadComponent: () => import('./pages/semanas/semana2/semana2.component').then(m => Semana4Component)
            },
            {
                path: 'semanas/5',
                loadComponent: () => import('./pages/semanas/semana2/semana2.component').then(m => Semana5Component)
            },
            {
                path: 'semanas/6',
                loadComponent: () => import('./pages/semanas/semana2/semana2.component').then(m => Semana6Component)
            },
            {
                path: 'semanas/7',
                loadComponent: () => import('./pages/semanas/semana2/semana2.component').then(m => Semana7Component)
            },
            {
                path: 'semanas/8',
                loadComponent: () => import('./pages/semanas/semana2/semana2.component').then(m => Semana8Component)
            },
            {
                path: 'semanas/9',
                loadComponent: () => import('./pages/semanas/semana2/semana2.component').then(m => Semana9Component)
            },
            {
                path: 'semanas/10',
                loadComponent: () => import('./pages/semanas/semana2/semana2.component').then(m => Semana10Component)
            },
            {
                path: 'semanas/11',
                loadComponent: () => import('./pages/semanas/semana2/semana2.component').then(m => Semana11Component)
            },
            {
                path: 'semanas/12',
                loadComponent: () => import('./pages/semanas/semana2/semana2.component').then(m => Semana12Component)
            },
            {
                path: 'semanas/13',
                loadComponent: () => import('./pages/semanas/semana2/semana2.component').then(m => Semana13Component)
            },
            {
                path: 'semanas/14',
                loadComponent: () => import('./pages/semanas/semana2/semana2.component').then(m => Semana14Component)
            },
            {
                path: '**',
                redirectTo: 'home',
            }
          
        ]
    }
];
