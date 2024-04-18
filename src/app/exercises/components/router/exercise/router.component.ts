import { Component } from '@angular/core'
import { RouterOutlet, RouterLink, RouterLinkActive, Router } from '@angular/router'

@Component({
  selector: 'app-router',
  templateUrl: './router.component.html',
  styleUrl: './router.component.css',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
})
export class RouterComponent {
  constructor(private readonly router: Router) {}

  navega() {
    this.router.navigate(['router/exercise/page'])
  }
}
