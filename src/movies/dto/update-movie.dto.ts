/*dto: 데이터 전송 객체*/
import { IsNumber, IsString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateMovieDto } from './create-movie.dto';
export class UpdateMovieDto extends PartialType(CreateMovieDto) {}

