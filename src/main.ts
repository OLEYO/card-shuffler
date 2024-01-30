// main.ts

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module'; // Adjust the import path

const bootstrap = () => platformBrowserDynamic().bootstrapModule(AppModule);

if (window['ngRef']) {
  // Support lazy loading
  window['ngRef'].bootstrapModule(AppModule).catch((err: any) => console.error(err));
} else {
  // Bootstrap normally
  enableProdMode();
  bootstrap();
}
