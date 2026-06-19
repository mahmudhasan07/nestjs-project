import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import type { ZodIssue, ZodType } from 'zod';

type ZodValidationError = {
  path: string;
  message: string;
};

@Injectable()
export class ZodValidationPipe<T = unknown> implements PipeTransform<
  unknown,
  Promise<T>
> {
  constructor(private readonly schema: ZodType<T>) {}

  async transform(value: unknown): Promise<T> {
    const result = await this.schema.safeParseAsync(value);

    if (!result.success) {
      const errors: ZodValidationError[] = result.error.issues.map(
        (issue: ZodIssue) => ({
          path: issue.path.join('.'),
          message: issue.message,
        }),
      );

      throw new BadRequestException({
        success: false,
        message: 'Validation failed',
        errors,
      });
    }
    return result.data;
  }
}
