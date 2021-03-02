import { toJS } from 'mobx';
import _ from 'lodash';

import {
  TInvoice,
  InvoiceStatusEnum,
} from '../types/InvoiceTypes';

export const createInvoiceStore = () => {
  return {
    invoice: null as TInvoice,
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
    setCurrentInvoice(id: string): TInvoice {
      const invoice = _.find(this.invoices, { id });
      this.invoice = invoice;
      return invoice;
    },
    clearCurrentInvoice() {
      this.invoice = null;
    },
    get currentInvoices(): TInvoice[] {
      return toJS(this.invoices);
    },
    get currentInvoice(): TInvoice {
      return toJS(this.invoice);
    },
  };
}

export type TInvoiceStore = ReturnType<typeof createInvoiceStore>;
