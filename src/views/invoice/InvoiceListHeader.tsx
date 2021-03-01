import React from 'react';
import Image from 'next/image';

import AddIcon from '../../components/icons/AddIcon';
import ButtonComp from '../../components/ButtonComp';

import InvoiceListFilter from './InvoiceListFilter';

interface ComponentProps {
  invoiceCount: number,
  onFilterChange: (checked: string[]) => void
}

function InvoiceListHeader(props: ComponentProps) {
  const onAddInvoice = React.useCallback(() => {
    // TODO: Navigate to add invoice page
  }, []);

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

      <div className="space-x-8 flex items-center">
        <InvoiceListFilter onChange={props.onFilterChange}/>
        <ButtonComp
          label={
            <span className="text-h4 font-bold text-white">
              New Invoice
            </span>
          }
          icon={
            <div className="w-8 h-8 rounded-full flex items-center justify-center bg-white">
              <AddIcon
                width="10px"
                height="10px"
                className="group-hover:fill-current group-hover:text-indigo-faded"/>
            </div>
          }
          className="group bg-indigo hover:bg-indigo-faded"
          onClick={onAddInvoice}
        />
      </div>
    </div>
  )
}

export default React.memo(InvoiceListHeader);
