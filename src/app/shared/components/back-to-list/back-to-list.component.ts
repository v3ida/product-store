import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-back-to-list',
  standalone: true,
  imports: [RouterLink, MatButtonModule],
  templateUrl: './back-to-list.component.html',
  styleUrl: './back-to-list.component.scss'
})
export class BackToListComponent {

}
