import React, { createContext } from "react";
import { useLocalObservable } from "mobx-react";
import { AsyncTrunk } from 'mobx-sync';

import { kStorageKey } from "../config/storeConfig";

import { createInvoiceStore, TInvoiceStore } from "../stores/InvoiceStore";
import { InvoicesMock } from "../mocks/InvoiceMock";

export type TStore = {
  invoiceStore: TInvoiceStore,
}

export const storeContext = createContext<TStore | null>(null);

export const StoreProvider = ({ children }: any) => {
  const invoiceStore = useLocalObservable(createInvoiceStore);

  const stores = {
    invoiceStore,
  }

  if (typeof window !== "undefined") {
    const trunk = new AsyncTrunk(stores, {
      storage: localStorage,
      storageKey: kStorageKey,
    });

    trunk.init().then(() => {
      const storage: TStore = JSON.parse(localStorage.getItem(kStorageKey));
      const invoices = storage.invoiceStore.invoices;

      if (invoices && invoices.length === 0) {
        invoiceStore.initInvoices(InvoicesMock);
      }
    });
  }

  return <storeContext.Provider value={stores}>{children}</storeContext.Provider>
}