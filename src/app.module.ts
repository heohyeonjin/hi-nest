/*우리가 하는 모든걸 import*/
import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { AppController } from './app.controller';

@Module({
  imports: [MoviesModule],
  controllers: [AppController], //url을 가져오고 함수를 실행
  providers: [],
})
//데코레이터, 클래스에 함수 기능 추가 가능, 클래스 위의 함수, 클래스를 위해 움직인다.
export class AppModule {}
