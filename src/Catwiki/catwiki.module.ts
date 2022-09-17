import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { CatwikiServie } from "./Adapters/CatwikiService";
import { TopBreedSchema, TopBreed } from "./Infrastructure/database/topbreed.model";
import { CatwikiController } from './Infrastructure/web-service/controllers/catwiki.controller';


@Module({
  imports: [
    ConfigModule.forRoot(),
    HttpModule.register({
    baseURL : process.env.CAT_URL_API,
    headers : {
      "x-api-key": process.env.CAT_API_KEY
    },
  }),
  MongooseModule.forFeature([{ name:TopBreed.name, schema: TopBreedSchema }])
],
  controllers: [CatwikiController],
  providers: [
      { provide: 'ICatwikiServie', useClass: CatwikiServie },
  ],
})

export class Catwiki{}