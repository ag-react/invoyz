import React from "react";
import { observer } from "mobx-react";

import useStores from "../hooks/useStores";

import InvoiceList from "../views/invoice/InvoiceList";

function Home() {
  const { invoiceStore } = useStores();

  return (
    <div className="h-full flex flex-col items-center py-8 md:py-18 px-6 md:px-12">
      <div className="h-full max-w-3xl w-full">
        {
          <InvoiceList invoices={invoiceStore.currentInvoices} />
        }
      </div>
    </div>
  )
}

export default observer(Home);