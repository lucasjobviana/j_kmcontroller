import { Request, Response } from 'express';

export interface ISearchAbleByName {
  findAllLikeByName(req: Request, res:Response):Promise<Response<any, Record<string, any>>>,
}
