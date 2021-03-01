import React from "react";
import { observer } from "mobx-react";

import useStores from "../hooks/useStores";

import InvoiceList from "../views/invoice/InvoiceList";
import PopupContainer from "../views/popup/PopupContainer";

function Home() {
  const { invoiceStore } = useStores();

  const [showAddInvoiceView, setShowAddInvoiceView] = React.useState(false);

  const onAddInvoice = React.useCallback(() => {
    setShowAddInvoiceView(true);
  }, []);

  return (
    <>
      <div className="h-full flex flex-col items-center py-8 md:py-18 px-6 md:px-12">
        <div className="h-full max-w-3xl w-full">
          {
            <InvoiceList
              invoices={invoiceStore.currentInvoices}
              onAddInvoice={onAddInvoice}
            />
          }
        </div>
      </div>

      {
        showAddInvoiceView &&
        <PopupContainer>
          <div>Test</div>
        </PopupContainer>
      }
    </>
  )
}

export default observer(Home);