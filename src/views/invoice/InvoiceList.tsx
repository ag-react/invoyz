import React from 'react';

import _ from 'lodash';

import { TInvoice } from '../../types/InvoiceTypes';

import InvoiceListHeader from './InvoiceListHeader';
import InvoiceListItem from './InvoiceListItem';
import InvoiceListEmpty from './InvoiceListEmpty';

interface ComponentProps {
  invoices: TInvoice[],
  onAddInvoice: () => void;
}

function InvoiceList(props: ComponentProps) {
  const [statusFilters, setStatusFilters] = React.useState([]);
  const [filteredInvoices, setFilteredInvoices] = React.useState<TInvoice[]>([]);

  const onFilterChange = (statuses: string[]) => {
    setStatusFilters(statuses);
  };

  const updateFilteredList = () => {
    const invoices = _.chain(props.invoices)
      .filter(invoice => {
        if (statusFilters.length > 0) {
          return _.find(statusFilters, filter => filter === invoice.status);
        } else {
          return true;
        }
      })
      .value();

      setFilteredInvoices(invoices);
  };

  React.useEffect(() => {
    updateFilteredList();
  }, [props.invoices])

  React.useEffect(() => {
    updateFilteredList();
  }, [statusFilters])

  return (
    <div className="h-full flex flex-col space-y-8 md:space-y-16">
      <div>
        <InvoiceListHeader
          invoiceCount={filteredInvoices.length}
          onFilterChange={onFilterChange}
          onAddInvoice={props.onAddInvoice}/>
      </div>

      <div className="flex-1 space-y-4 pb-6">
        {
          filteredInvoices &&
          filteredInvoices.length > 0
          ? _.map(filteredInvoices, (invoice) => (
            <InvoiceListItem key={invoice.id} invoice={invoice} />
          ))
          : <InvoiceListEmpty />
        }
      </div>
    </div>
  )
}

export default React.memo(InvoiceList);
