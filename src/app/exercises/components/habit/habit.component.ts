import { Component, input } from '@angular/core'

@Component({
  selector: 'app-habit',
  styleUrl: './habit.component.css',
  templateUrl: './habit.component.html',
  standalone: true,
  imports: [],
})
export class HabitComponent {
  texto = input<string>('Unknown') // Valor por defecto 'Unknown'
}
