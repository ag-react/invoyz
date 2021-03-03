import React from 'react';
import Image from 'next/image'
import { useRouter } from 'next/router'

import { format } from 'date-fns';

import { TInvoice } from '../../types/InvoiceTypes';

import InvoiceStatus from './InvoiceStatus';

interface ComponentProps {
  invoice: TInvoice
}

function InvoiceListItem(props: ComponentProps) {
  const router = useRouter();

  const onItemClick = (invoice: TInvoice) => {
    router.push('invoice/' + invoice.id)
  };

  return (
    <div className="rounded-lg w-full grid grid-cols-4 gap-y-4 xs:grid-cols-list-banner md:grid-cols-list-big auto-rows-auto bg-white dark:bg-indigo-darker cursor-pointer transition duration-150 ease-in-out border border-transparent hover:border-indigo gap-x-6 xs:gap-y-6 p-6 px-6 md:py-4"
      onClick={() => onItemClick(props.invoice)}>
      <div className="flex items-start col-start-1 col-end-2 row-start-1 row-end-2 xs:col-start-1 xs:col-end-1 md:col-start-1 md:col-end-2 font-bold xs:items-center">
        <span className="text-body1 text-grayish-sky dark:text-grayish-sky">#</span>
        <span className="text-body1 text-grayish-dark dark:text-white">{ props.invoice.id }</span>
      </div>
      <div className="flex items-center col-start-1 col-end-3 row-start-3 row-end-4 xs:items-start xs:col-start-1 xs:col-end-2 xs:row-start-2 xs:row-end-3 md:row-span-1 md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-2 md:items-center">
        <span className="text-body1 text-grayish-sky dark:text-grayish font-medium">
          {props.invoice.paymentDue ? 'Due ' + format(new Date(props.invoice.paymentDue), 'dd MMM yyyy') : '-'}
        </span>
      </div>
      <div className="flex items-center justify-end col-start-2 col-end-5 row-start-1 row-end-2 xs:col-start-2 xs:col-end-3 md:col-start-3 md:col-end-4 md:justify-start text-right md:text-left">
        <span className="text-body1 text-grayish-sky dark:text-white font-medium">
          { props.invoice.clientName || '-' }
        </span>
      </div>
      <div className="flex items-center col-start-1 col-end-5 row-start-2 row-end-3 xs:mt-6 xs:col-start-1 xs:col-end-2 xs:row-start-2 xs:row-end-3 md:col-start-4 md:col-end-5 md:row-start-1 md:row-end-2 md:justify-end">
        <span className="text-h3 text-grayish-dark dark:text-white font-bold">
          { '£ ' + props.invoice.total.toLocaleString('en-US', { minimumFractionDigits: 2 }) }
        </span>
      </div>
      <div className="flex items-center justify-end col-start-3 col-end-5 row-start-3 row-end-4 xs:col-start-2 xs:col-end-3 xs:row-start-2 xs:row-end-3 md:row-span-1 md:col-start-5 md:col-end-6 md:justify-start">
        <InvoiceStatus status={props.invoice.status}/>
      </div>
      <div className="hidden md:col-start-6 md:col-end-7 md:flex items-center justify-end">
        <Image
          src="/assets/icon-arrow-right.svg"
          alt="Arrow right icon"
          width="8px"
          height="12px" />
      </div>
    </div>
  )
}

export default React.memo(InvoiceListItem);
