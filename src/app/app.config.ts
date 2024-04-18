import { ApplicationConfig } from '@angular/core'
import { provideRouter, withComponentInputBinding } from '@angular/router'
import { routes } from './app.routes'
import { provideMarkdown } from 'ngx-markdown'
import { HttpClient, provideHttpClient, withFetch } from '@angular/common/http'

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(withFetch()),
    provideMarkdown({ loader: HttpClient }),
  ],
}
