import {ApplicationConfig, inject, provideAppInitializer} from '@angular/core';
import {provideRouter, withComponentInputBinding} from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import {EnvironmentConfigService} from "./services/environment-config.service";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(),
    provideAppInitializer(() => {
      const runtimeConfig: EnvironmentConfigService = inject(EnvironmentConfigService);
       return runtimeConfig.load()
    }),

  ]
};
