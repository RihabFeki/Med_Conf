import {Unite} from "./unite";

export class Recipient {
  public recipient_id: number;
  public label: string;
  public reference: string;
  public volume: number;
  public unite_id: number;
  public cout: number;
  public unite : Unite;
  public created_at: Date;
  public deleted_at: Date;
  public updated_at: Date;
}
