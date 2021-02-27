export enum InvoiceStatusEnum {
  DRAFT = 'draft',
  PENDING = 'pending',
  PAID = 'paid'
}

export type TAddress = {
  street: string,
  city: string,
  postCode: string,
  country: string,
};

export type TInvoiceItem = {
  name: string,
  quantity: number,
  price: number,
  total: number
}

export type TInvoice = {
  id: string,
  createdOn: Date,
  paymentDue: Date,
  description: string,
  paymentTerms: number,
  clientName: string,
  clientEmail: string,
  status: InvoiceStatusEnum,
  senderAddress: TAddress,
  clientAddress: TAddress,
  items: TInvoiceItem[],
  total: number,
}
