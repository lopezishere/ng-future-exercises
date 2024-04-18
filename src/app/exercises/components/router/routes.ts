import { Routes } from '@angular/router'
import { SolutionRedirectPageComponent } from './_solution/solution-redirect-page/solution-redirect-page.component'
import { RouterPageNotFoundSolutionComponent } from './_solution/not-fount-page/solution-router-page-not-found.component'
import { SolutionRouteParamsPageComponent } from './_solution/solution-route-params-page/solution-route-params-page.component'
import { DestinoRedirectPageComponent } from './exercise/destino-redirect-page/destino-redirect-page.component'
import { NotFoundPageComponent } from './exercise/not-found-page/not-found-page.component'
import { DestinoParametrosPageComponent } from './exercise/destino-parametros-page/destino-parametros-page.component'

export const routesOfRouterExercise: Routes = [
  {
    path: 'solution',
    children: [
      {
        title: 'Router solution with query params Page',
        path: 'page',
        component: SolutionRedirectPageComponent,
      },
      {
        title: 'Router solution with route params Page',
        path: 'page/:id',
        component: SolutionRouteParamsPageComponent,
      },
      {
        path: '**',
        component: RouterPageNotFoundSolutionComponent,
      },
    ],
  },
  {
    path: 'exercise',
    children: [
      {
        title: 'Ejercicio',
        path: 'page',
        component: DestinoRedirectPageComponent,
      },
      {
        title: 'Ejercicio con parámetros de URL',
        path: 'page/:param',
        component: DestinoParametrosPageComponent,
      },
      {
        path: '**',
        component: NotFoundPageComponent,
      },
    ],
  },
]
