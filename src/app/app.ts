import { Component, signal } from '@angular/core';

interface Type {
  one?: {
    two: {
      three: {
        array?: {
          name: string;
        }[];
      };
    };
  };
}

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
})
export class App {
  readonly type = signal<Type>({});
}
