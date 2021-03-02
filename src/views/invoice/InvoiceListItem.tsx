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
    <div className="rounded-lg w-full grid grid-cols-list-banner auto-rows-auto bg-white cursor-pointer transition duration-150 ease-in-out border border-transparent hover:border-indigo gap-x-6 gap-y-6 p-6 px-6 md:py-4 md:grid-cols-list-big"
      onClick={() => onItemClick(props.invoice)}>
      <div className="col-start-1 col-end-1 md:col-start-1 md:col-end-2 font-bold flex items-center">
        <span className="text-body1 text-grayish-sky">#</span><span className="text-body1 text-grayish-dark">{ props.invoice.id }</span>
      </div>
      <div className="col-start-1 col-end-2 row-start-2 row-end-3 flex items-start md:row-span-1 md:col-start-2 md:col-end-3 md:items-center">
        <span className="text-body1 text-grayish-sky font-medium">
          {props.invoice.paymentDue ? 'Due ' + format(new Date(props.invoice.paymentDue), 'dd MMM yyyy') : '-'}
        </span>
      </div>
      <div className="col-start-2 col-end-3 md:col-start-3 flex items-center justify-end md:col-end-4 md:justify-start">
        <span className="text-body1 text-grayish-sky font-medium">
          { props.invoice.clientName || '-' }
        </span>
      </div>
      <div className="mt-6 col-start-1 col-end-2 row-start-2 row-end-3 flex items-center md:row-span-1 md:col-start-4 md:col-end-5 md:mt-0 md:justify-end">
        <span className="text-h3 text-grayish-dark font-bold">
          { '£ ' + props.invoice.total.toLocaleString('en-US', { minimumFractionDigits: 2 }) }
        </span>
      </div>
      <div className="col-start-2 col-end-3 row-start-2 row-end-3 md:row-span-1 md:col-start-5 md:col-end-6 flex items-center justify-end md:justify-start">
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
