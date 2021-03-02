import { toJS } from 'mobx';
import _ from 'lodash';

import {
  TInvoice,
  InvoiceStatusEnum,
} from '../types/InvoiceTypes';

export const createInvoiceStore = () => {
  return {
    invoices: [] as TInvoice[],
    initInvoices(data: TInvoice[]) {
      this.invoices = data;
    },
    getInvoice(id: string): TInvoice {
      return _.find(this.invoices, {id });
    },
    addInvoice(invoice: TInvoice) {
      this.invoices = _.concat(this.invoices, invoice);
    },
    updateInvoice(id: string, invoice: TInvoice) {
      const index = _.findIndex(this.invoices, (invoice: TInvoice) => invoice.id === id);
      if (index >= 0) {
        this.invoices[index] = invoice;
      }
    },
    updateInvoiceStatus(id: string, status: InvoiceStatusEnum) {
      _.set(_.find(this.invoices, { id }), "status", status);
    },
    deleteInvoice(id: string) {
      _.remove(this.invoices, (invoice: TInvoice) => invoice.id === id);
    },
    get currentInvoices(): TInvoice[] {
      return toJS(this.invoices);
    },
  };
}

export type TInvoiceStore = ReturnType<typeof createInvoiceStore>;
