import { Injectable, NestInterceptor, ExecutionContext, CallHandler, HttpStatus } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';



export interface ApiResponse<T> {
    status: number;
    success: boolean;
    data: T | null;
    message?: string;
    timestamp: number;
}

@Injectable()
export class ResponseInterceptor<T> implements NestInterceptor<T, ApiResponse<T>> {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        const ctx = context.switchToHttp();
        const response = ctx.getResponse();
        return next
            .handle().pipe(
                map(data => ({
                    status: response.statusCode || HttpStatus.OK,
                    success: true,
                    data,
                    timestamp: Date.now(),
                })),
            )

    }
}