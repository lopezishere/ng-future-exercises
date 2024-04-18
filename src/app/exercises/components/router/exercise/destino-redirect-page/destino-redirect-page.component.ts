import { ChangeDetectionStrategy, Component, computed } from '@angular/core'
import { toSignal } from '@angular/core/rxjs-interop'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-destino-redirect-page',
  standalone: true,
  imports: [],
  templateUrl: './destino-redirect-page.component.html',
  styleUrl: './destino-redirect-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DestinoRedirectPageComponent {
  constructor(private route: ActivatedRoute) {}

  queryParams = toSignal(this.route.queryParams, { initialValue: { title: '' } })
  title = computed(() => this.queryParams().title)
}
