import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  // eslint-disable-next-line @typescript-eslint/typedef
  .catch(err => console.error(err));
