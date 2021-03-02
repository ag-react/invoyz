import React, { createContext } from "react";
import { useLocalObservable } from "mobx-react";
import { AsyncTrunk } from 'mobx-sync';

import { kStorageKey } from "../config/storeConfig";

import { createInvoiceStore, TInvoiceStore } from "../stores/InvoiceStore";
import { createThemeStore, TThemeStore } from "../stores/themeStore";

import { InvoicesMock } from "../mocks/InvoiceMock";

export type TStore = {
  themeStore: TThemeStore,
  invoiceStore: TInvoiceStore,
}

export const storeContext = createContext<TStore | null>(null);

export const StoreProvider = ({ children }: any) => {
  const themeStore = useLocalObservable(createThemeStore);
  const invoiceStore = useLocalObservable(createInvoiceStore);

  const stores = {
    themeStore,
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

      let currentTheme = themeStore.theme;

      if (!currentTheme) {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
          currentTheme = 'dark';
        }
      }

      themeStore.updateTheme(currentTheme || 'light');
    });
  }

  return <storeContext.Provider value={stores}>{children}</storeContext.Provider>
}