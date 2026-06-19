import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { ZodError } from 'zod';
import type { ZodSchema } from 'zod';

@Injectable()
export class ZodValidationPipe implements PipeTransform {
  constructor(private readonly schema: ZodSchema<any>) {}

  async transform(value: unknown, metadata: ArgumentMetadata) {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      const parsedData = await this.schema.parseAsync(value);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return parsedData;
    } catch (error: unknown) {
      if (error instanceof ZodError) {
        throw new BadRequestException({
          success: false,
          message: 'Validation failed',
          errors: (error as ZodError).issues.map((issue) => ({
            path: issue.path.join('.'),
            message: issue.message,
          })),
        });
      }

      throw error;
    }
  }
}
