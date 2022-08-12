import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Banner de Destaque', cols: 2, rows: 1 },
          { title: 'LORA', cols: 2, rows: 1 },
          { title: 'Grafico', cols: 2, rows: 1 },
          { title: 'Ações', cols: 2, rows: 1 }
        ];
      }

      return [
        { title: 'Banner de Destaque', cols: 2, rows: 1 },
        { title: 'LORA', cols: 1, rows: 1 },
        { title: 'Grafico', cols: 1, rows: 2 },
        { title: 'Ações', cols: 1, rows: 1 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
