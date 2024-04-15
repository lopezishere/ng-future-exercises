import { formatDate } from '@angular/common'
import { Component } from '@angular/core'
import { FormBuilder, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms'

interface CreateHabit {
  nombre: string
  fecha: Date
}

//type CreteHabitFormModel = FormModel<CreateHabit>
@Component({
  selector: 'app-forms',
  standalone: true,
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css',
  imports: [ReactiveFormsModule],
})
export class FormsComponent {
  habitos: {
    nombre: string
    fecha: string
  }[] = []

  mensajeError: string = ''

  /* API FormBuilder - Recomendada */
  // Al poner nonNullable, todas las variables generadas no podrán ser nulas
  fb = new FormBuilder().nonNullable
  formulario = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(2)]],
  })

  /* API Form Groups  
  formulario =  new FormGroup({    
    nombre: new FormControl('', [Validators.required, Validators.min(2)])
  })
  */

  crearHabito() {
    console.log(this.formulario)
    if (this.formulario.valid) {
      this.mensajeError = ''
      this.habitos.push({
        nombre: this.formulario.value.nombre ?? '',
        fecha: formatDate(Date.now(), 'MMM dd, YYYY', 'en-US'),
      })
      this.formulario.reset()
    } else {
      if (this.formulario.controls.nombre.errors?.['required']) {
        this.mensajeError = 'El nombre del hábito es obligatorio'
      }
      if (this.formulario.controls.nombre.errors?.['minlength']) {
        this.mensajeError = 'El nombre del hábito debe tener, al menos, 2 letras'
      }
    }
  }
}
