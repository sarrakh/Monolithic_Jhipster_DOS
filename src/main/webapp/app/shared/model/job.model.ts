import { IEmployee } from 'app/shared/model/employee.model';

export interface IJob {
  id?: number;
  jobTitle?: string;
  minSalary?: number;
  maxSalary?: number;
  employee?: IEmployee;
}

export class Job implements IJob {
  constructor(
    public id?: number,
    public jobTitle?: string,
    public minSalary?: number,
    public maxSalary?: number,
    public employee?: IEmployee
  ) {}
}
