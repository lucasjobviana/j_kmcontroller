import { Request, Response } from 'express';
import ServiceTaskService from '../services/ServiceTaskService';
import { extend } from 'joi';
import BaseController from './BaseController';

export default class ServiceTaskController{
  constructor(
    private serviceTaskService = new ServiceTaskService(),
  ) {  }

  // public async findById(req: Request, res: Response) {
  //   const { id } = req.params;
  //   const team = await this.fleetService.getById(Number(id));
  //   res.status(200).json(team);
  // }

  // public async findAll(_req: Request, res: Response) {
  //   const fleet = await this.fleetService.getAll();
  //   res.status(200).json(fleet);
  // }

  public async findAllLikeByName(req: Request, res: Response) {
    const { search } = req.query;//search?.toString()||''
    const services = await this.serviceTaskService.findAllLikeByName(search?.toString()||'');
    res.status(200).json(services);
  }

  public async deleteServiceTask(req: Request, res:Response) {
    const { id } = req.params;
    await this.serviceTaskService.deleteServiceTask(id);
    return res.status(204).json({hasDeleted:true})
  }

  public async updateServiceTask(req: Request, res:Response) {
    const { id } = req.params;
    const serviceTask = req.body;
    const updatedTask = await this.serviceTaskService.updateServiceTask(id,serviceTask);
    return res.status(200).json(updatedTask)
  }

  public async createServiceTask(req: Request, res:Response) {
    const serviceTask = req.body;
    const createdTask = await this.serviceTaskService.createServiceTask(serviceTask);
    return res.status(201).json(createdTask) 
  }

}
