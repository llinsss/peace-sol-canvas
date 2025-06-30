export type User = {
  id: string;
  name: string;
  email: string;
};

export interface Transaction {
  id: string;
  amount: number;
  sender: User;
  receiver: User;
  timestamp: Date;
}

export type ContractState = {
  totalSupply: number;
  owner: User;
  transactions: Transaction[];
};