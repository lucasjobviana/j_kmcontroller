import { IServiceTask } from './IServiceTask';

export class ServiceTask implements IServiceTask {
  id: number=0;
  name: string;
  description: string='Nova descrição';

  constructor (name: string, description: string, id?: number) {
    this.name = name;
    this.description = description;
    if (id) {
      this.id = id;
    }
  }

}