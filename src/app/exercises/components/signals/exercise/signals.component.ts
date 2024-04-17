import { Component, signal } from '@angular/core'

@Component({
  selector: 'app-signals',
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.css',
  standalone: true,
  imports: [],
})
export class SignalsComponent {
  contador = signal(0)

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
