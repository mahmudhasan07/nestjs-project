import { HttpException } from '@nestjs/common';

export type ErrorSource = {
  field?: string;
  message: string;
};

class ApiError extends HttpException {
  statusCode: number;
  errors?: ErrorSource[];

  constructor(statusCode: number, message: string, errors?: ErrorSource[]) {
    super(
      {
        success: false,
        message,
        statusCode,
        errors,
      },
      statusCode,
    );

    this.statusCode = statusCode;
    this.errors = errors;
  }
}

export default ApiError;
