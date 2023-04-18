export interface CoverEntity {
  id?: number;
  registerDate: Date;
  historicalNumber: string;
  totalAmount: number;
  iteration: number;
  invoiced: boolean;
  updatedAt?: Date;
  createdAt?: Date;
}
