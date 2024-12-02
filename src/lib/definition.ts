export type AxiosError = {
  statusText: string;
  name: string;
  message: string;
  code: string;
  config: object;
  request: object;
  status: number;
  response: { data: any };
};

export type Users = {
  name: string;
  role: string;
  avatar: string;
};

export type UsersData = {
  id: number;
  name: string;
  username: string;
  email: string;
  password?: string;
  role: string;
  createdAt: string;
};

export type LoginResponse = {
  auth: boolean;
  token: string;
  data: Omit<UsersData, "id">;
};

export type Register = {
  name: string;
  username: string;
  email: string;
  password: string;
};

export type Admin = {
  id: number;
  name: string;
  email: string;
  role: string;
};

export type Products = {
  id: number;
  name: string;
  price: number | string;
  createdAt: string;
  type: string;
};

export type Product = {
  id: number;
  name: string;
  price: number | string;
  type: string;
};

export type Customers = {
  id: number;
  name: string;
  phoneNumber: string;
  address: string;
  createdAt: string;
};

export type Customer = {
  id: number;
  name: string;
  phoneNumber: string;
  address: string;
};

export type TranscDetail = {
  products: Product;
  qty: number;
  totalPrice: string | number;
};

export type Transactions = {
  id: number;
  transcDate: string;
  customer: Customer;
  admin: Admin;
  transcDetail: TranscDetail;
};

export type TransctCol = {
  id: number;
  custId: number;
  custName: string;
  totalTransc: string;
};

export type TransctColDetail = {
  custId?: number;
  transcDate: string;
  product: string;
  amount: number;
  totalPayment: string | number;
};
