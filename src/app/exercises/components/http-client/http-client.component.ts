import { HttpClient } from '@angular/common/http'
import { Component } from '@angular/core'
import { JsonPipe } from '@angular/common'
import { lastValueFrom } from 'rxjs'

interface Articulo {
  id: number
  title: string
  body: string
  userId: number
}

// Las peticiones de creación de artículos no llevan el ID del artículo
type CreaArticulo = Omit<Articulo, 'id'>

@Component({
  selector: 'app-http-client',
  standalone: true,
  templateUrl: './http-client.component.html',
  imports: [JsonPipe],
})
export class HttpClientComponent {
  constructor(private readonly httpClient: HttpClient) {}

  articulos: Articulo[] = []
  articuloCreado: Articulo | undefined

  limpiar() {
    this.articulos = []
    this.articuloCreado = undefined
  }

  async getPosts() {
    this.limpiar()
    const result = await lastValueFrom(this.httpClient.get<Articulo[]>('posts'))
    this.articulos = result
  }

  async creaPost() {
    this.limpiar()
    const articulo: CreaArticulo = {
      title: 'Prueba título',
      body: 'Prueba cuerpo',
      userId: 1,
    }
    this.articuloCreado = await lastValueFrom(this.httpClient.post<Articulo>('posts', articulo))
  }

  async generaError() {
    this.limpiar()
    await lastValueFrom(this.httpClient.get('non_existent_url'))
  }
}
