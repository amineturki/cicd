import { Broker } from 'src/app/broker/broker';


export interface IReclamation{
  id?: number;
  titre?: string;
  sujet?: string;
  date?: Date;
  reponse?: string;
 admin?: Broker;
  user?: Broker;
  status?: string;


}

export class Reclamation implements IReclamation{


  constructor(
    public id?: number,
  public   titre?: string,
  public sujet?: string,
  public date?: Date,
  public reponse?: string,
    public admin?: Broker,
    public user?: Broker,
    public status?: string


  ) {
  }
}
