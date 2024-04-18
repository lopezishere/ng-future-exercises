import { ChangeDetectionStrategy, Component, input } from '@angular/core'

@Component({
  selector: 'app-destino-parametros-page',
  standalone: true,
  imports: [],
  templateUrl: './destino-parametros-page.component.html',
  styleUrl: './destino-parametros-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DestinoParametrosPageComponent {
  param = input<number>()
}
