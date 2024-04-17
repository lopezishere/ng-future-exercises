import { Component, WritableSignal, computed, signal } from '@angular/core'

@Component({
  selector: 'app-signals-computed',
  templateUrl: './signals-computed.component.html',
  styleUrl: './signals-computed.component.css',
  standalone: true,
  imports: [],
})
export class SignalsComputedComponent {
  incremento = signal(1)
  contador = signal(0)
  dobleCont = computed(() => this.contador() * 2)

  incrementar(elemento: WritableSignal<number>) {
    elemento.update(contAnt => contAnt + this.incremento())
  }

  decrementar(elemento: WritableSignal<number>) {
    elemento.update(contAnt => contAnt - this.incremento())
  }

  reset(elemento: WritableSignal<number>, value: number) {
    elemento.set(value)
  }
}
