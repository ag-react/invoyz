import React from "react";
import { observer } from "mobx-react";

import useStores from "../hooks/useStores";

import InvoiceList from "../views/invoice/InvoiceList";

function Home() {
  const { invoiceStore } = useStores();

  return (
    <div className="flex flex-col items-center py-18 px-6 md:px-12">
      <div className="max-w-3xl w-full">
        {/* {
          invoiceStore.currentInvoices &&
          <InvoiceList invoices={invoiceStore.currentInvoices} />
        } */}
      </div>
    </div>
  )
}

export default observer(Home);