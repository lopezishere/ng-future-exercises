import { Component, computed, effect, signal } from '@angular/core'

@Component({
  selector: 'app-signals-effect',
  templateUrl: './signals-effect.component.html',
  styleUrl: './signals-effect.component.css',
  standalone: true,
  imports: [],
})
export class SignalsEffectComponent {
  contador = signal(0)
  muestraAlerta = computed(() => this.contador() > 5)

  constructor() {
    effect(() => {
      if (this.muestraAlerta()) {
        alert('¡OJO!')
      }
    })
  }

  incrementar() {
    this.contador.update(contAnt => contAnt + 1)
  }

  decrementar() {
    this.contador.update(contAnt => contAnt - 1)
  }

  reset() {
    this.contador.set(0)
  }
}
