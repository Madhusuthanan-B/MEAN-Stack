import { NgModule, ErrorHandler } from '@angular/core';
import { ERROR_LOGGING_PROVIDER_KEY } from './error-logger.constants';
import { CustomErrorHandler } from './error-logger';

@NgModule({})
export class ErrorLoggerModule {
  static provideLoggingConfig(config: IErrorLoggerConfig) {
    const ERROR_LOGGER_PROVIDER = [
      {
        provide: ERROR_LOGGING_PROVIDER_KEY,
        useValue: config
      },
      {
          provide: ErrorHandler,
          useClass: CustomErrorHandler
      }
    ];

    return {
      ngModule: ErrorLoggerModule,
      providers: [ERROR_LOGGER_PROVIDER]
    };
  }
}
