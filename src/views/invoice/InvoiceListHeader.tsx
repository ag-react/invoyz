import React from 'react';

import InvoiceListFilter from './InvoiceListFilter';

interface ComponentProps {
  invoiceCount: number,
  onFilterChange: (checked: string[]) => void
}

function InvoiceListHeader(props: ComponentProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="space-y-2">
        <div>
          <span className="text-grayish-dark text-h1 font-bold">
            Invoices
          </span>
        </div>
        <div>
          <span className="text-grayish-slick text-body1 font-medium">
            There are {props.invoiceCount} total invoices
          </span>
        </div>
      </div>

      <div className="space-x-8">
        <div>
          <InvoiceListFilter onChange={props.onFilterChange}/>
        </div>
      </div>
    </div>
  )
}

export default React.memo(InvoiceListHeader);
