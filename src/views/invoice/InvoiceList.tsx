import React from 'react';

import { TInvoice } from '../../types/InvoiceTypes';

import InvoiceLIstItem from './InvoiceLIstItem';

interface ComponentProps {
  invoices: TInvoice[]
}

function InvoiceList(props: ComponentProps) {
  return (
    <div className="space-y-4">
      {
        props.invoices.map((invoice) => (
          <InvoiceLIstItem key={invoice.id} invoice={invoice} />
        ))
      }
    </div>
  )
}

export default React.memo(InvoiceList);
