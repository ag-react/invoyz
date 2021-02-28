import React from 'react';

import _ from 'lodash';

import { TInvoice } from '../../types/InvoiceTypes';
import InvoiceListHeader from './InvoiceListHeader';

import InvoiceLIstItem from './InvoiceLIstItem';

interface ComponentProps {
  invoices: TInvoice[]
}

function InvoiceList(props: ComponentProps) {
  const [statusFilters, setstatusFilters] = React.useState([]);
  const [filteredInvoices, setfilteredInvoices] = React.useState<TInvoice[]>([]);

  const onFilterChange = (statuses: string[]) => {
    setstatusFilters(statuses);
  };

  React.useEffect(() => {
    const invoices = _.chain(props.invoices)
      .filter(invoice => {
        if (statusFilters.length > 0) {
          return _.find(statusFilters, filter => filter === invoice.status);
        } else {
          return true;
        }
      })
      .value();

      setfilteredInvoices(invoices);
  }, [statusFilters])

  return (
    <div className="space-y-16">
      <div>
        <InvoiceListHeader invoiceCount={filteredInvoices.length} onFilterChange={onFilterChange}/>
      </div>

      <div className="space-y-4">
        {
          _.map(filteredInvoices, (invoice) => (
            <InvoiceLIstItem key={invoice.id} invoice={invoice} />
          ))
        }
      </div>
    </div>
  )
}

export default React.memo(InvoiceList);
