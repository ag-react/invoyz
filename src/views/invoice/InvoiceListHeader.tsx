import React from 'react';

import MemoAddIcon from '../../components/icons/AddIcon';
import ButtonComp from '../../components/ButtonComp';

import InvoiceListFilter from './InvoiceListFilter';

interface ComponentProps {
  invoiceCount: number,
  onFilterChange: (checked: string[]) => void,
  onAddInvoice: () => void;
}

function InvoiceListHeader(props: ComponentProps) {

  return (
    <div className="flex items-center justify-between">
      <div className="space-y-2">
        <div>
          <span className="text-h2 font-bold text-grayish-dark md:text-h1 dark:text-white">
            Invoices
          </span>
        </div>
        <div className="text-grayish-slick text-body1 font-medium dark:text-grayish-slick">
          <span className="hidden md:block">
            There are {props.invoiceCount} total invoices
          </span>
          <span className="block md:hidden">
            {props.invoiceCount} invoices
          </span>
        </div>
      </div>

      <div className="space-x-4 md:space-x-8 flex items-center">
        <InvoiceListFilter onChange={props.onFilterChange}/>
        <ButtonComp
          icon={
            <div className="flex-none w-8 h-8 rounded-full flex items-center justify-center bg-white">
              <MemoAddIcon
                width="10px"
                height="10px"
                className="group-hover:fill-current group-hover:text-indigo-faded"/>
            </div>
          }
          label={
            <div className="text-h4 font-bold text-white">
              <span className="hidden md:block">
                New Invoice
              </span>
              <span className="block md:hidden">
                New
              </span>
            </div>
          }
          className="group bg-indigo hover:bg-indigo-faded"
          onClick={props.onAddInvoice}
        />
      </div>
    </div>
  )
}

export default React.memo(InvoiceListHeader);
