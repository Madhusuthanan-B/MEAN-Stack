import { ErrorHandler, Inject } from '@angular/core';
import { ERROR_LOGGING_PROVIDER_KEY } from './error-logger.constants';

export class CustomErrorHandler {
  constructor(@Inject(ERROR_LOGGING_PROVIDER_KEY) config: IErrorLoggerConfig) {}

  public handleError(error: any): void {
    console.log('Error to be logged some where into external resource', error);
  }
}
