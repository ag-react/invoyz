import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router'

import _ from 'lodash';

import { format } from 'date-fns';

import useStores from '../../hooks/useStores';

import { TInvoice } from '../../types/InvoiceTypes';

import ButtonComp from '../../components/ButtonComp';
import InvoiceStatus from '../../views/invoice/InvoiceStatus';

function InvoiceDetailPage() {
  const router = useRouter();
  const { invoiceStore } = useStores();

  const [invoice, setInvoice] = React.useState<TInvoice>();

  const backToList = () => {
    router.push('/');
  };

  React.useEffect(() => {
    if (router.query?.id) {
      const invoiceId = router.query.id as string;
      const item = invoiceStore.getInvoice(invoiceId);
      setInvoice(item);
    }
  }, [router.query])

  return (
    <div className="h-full flex flex-col">
      <div className="h-full flex-1 flex flex-col items-center overflow-y-auto">
        <div className="px-6 md:px-12 py-8 md:py-18 h-full max-w-3xl w-full">
          <div className="mb-8 flex items-center space-x-6 cursor-pointer hover:opacity-75"
            onClick={backToList}>
            <Image
              src="/assets/icon-arrow-left.svg"
              alt="Arrow left icon"
              width="8px"
              height="12px"
            />

            <div>
              <span className="text-h4 text-grayish-dark font-bold">
                Go back
              </span>
            </div>
          </div>

          {
            invoice &&
            <>
              <div className="rounded-lg flex items-center justify-between bg-white px-8 py-6">
                <div className="flex-1 flex items-center space-x-4 justify-between md:justify-start md:flex-none">
                  <span className="text-grayish-slick text-body1 font-medium">
                    Status
                  </span>
                  <InvoiceStatus status={invoice.status}/>
                </div>

                <div className="hidden md:flex md:items-center space-x-2">
                  <ButtonComp
                    label={
                      <div className="text-h4 font-bold text-grayish-sky">
                        <span>
                          Edit
                        </span>
                      </div>
                    }
                    className="group bg-grayish-light hover:bg-grayish"
                    onClick={() => {

                    }}
                  />

                  <ButtonComp
                    label={
                      <div className="text-h4 font-bold text-white">
                        <span>
                          Delete
                        </span>
                      </div>
                    }
                    className="group bg-redish hover:bg-redish-faded"
                    onClick={() => {

                    }}
                  />

                  <ButtonComp
                    label={
                      <div className="text-h4 font-bold text-white">
                        <span>
                          Mark as Paid
                        </span>
                      </div>
                    }
                    className="group bg-indigo hover:bg-indigo-faded"
                    onClick={() => {

                    }}
                  />
                </div>
              </div>

              <div className="mt-4 rounded-lg bg-white px-8 py-6 md:mt-6">
                <div className="flex flex-col space-y-8 md:flex-row md:space-y-0 md:justify-between">
                  <div className="flex flex-col space-y-1">
                    <div className="text-h3 font-bold">
                      <span className="text-grayish-sky">#</span><span className="text-grayish-dark">{ invoice.id || '-'}</span>
                    </div>
                    <span className="text-body1 text-grayish-sky font-medium">
                      { invoice.description || '-'}
                    </span>
                  </div>

                  <div className="flex flex-col items-start md:items-end text-body2 text-grayish-sky font-medium space-y-1">
                    <span>
                      { invoice.senderAddress.street || '-'}
                    </span>
                    <span>
                      { invoice.senderAddress.city || '-'}
                    </span>
                    <span>
                      { invoice.senderAddress.postCode || '-'}
                    </span>
                    <span>
                      { invoice.senderAddress.country || '-'}
                    </span>
                  </div>
                </div>

                <div className="mt-8 md:mt-6 flex flex-row justify-start flex-wrap md:justify-between">
                  <div className="flex flex-col justify-between">
                    <div className="flex flex-col space-y-3">
                      <span className="text-body1 text-grayish-sky font-medium">
                        Invoice Date
                      </span>
                      <span className="text-h3 text-grayish-dark font-bold">
                        { invoice.createdOn ? format(new Date(invoice.createdOn), 'dd MMM yyyy') : '-' }
                      </span>
                    </div>

                    <div className="flex flex-col space-y-3">
                      <span className="text-body1 text-grayish-sky font-medium">
                        Payment Date
                      </span>
                      <span className="text-h3 text-grayish-dark font-bold">
                        { invoice.paymentDue ? format(new Date(invoice.paymentDue), 'dd MMM yyyy') : '-' }
                      </span>
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col space-y-2 ml-10 md:flex-none">
                    <div className="flex flex-col space-y-3">
                      <span className="text-body1 text-grayish-sky font-medium">
                        Bill To
                      </span>
                      <span className="text-h3 text-grayish-dark font-bold">
                        { invoice.clientName || '-' }
                      </span>
                    </div>
                    <div className="flex flex-col items-start text-body2 text-grayish-sky font-medium space-y-1 break-words">
                      <span>
                        { invoice.clientAddress.street || '-' }
                      </span>
                      <span>
                        { invoice.clientAddress.city || '-' }
                      </span>
                      <span>
                        { invoice.clientAddress.postCode || '-' }
                      </span>
                      <span>
                        { invoice.clientAddress.country || '-' }
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col justify-between w-full mt-8 md:w-auto md:mt-0">
                    <div className="flex flex-col space-y-3">
                      <span className="text-body1 text-grayish-sky font-medium">
                        Sent To
                      </span>
                      <span className="text-h3 text-grayish-dark font-bold">
                        { invoice.clientEmail || '-' }
                      </span>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg bg-grayish-light mt-10 md:mt-12">
                  <div className="p-6 md:p-8">
                    <div className="hidden md:flex items-center md:mb-8">
                      <span className="text-body2 text-grayish-sky font-medium flex-1">
                        Item Name
                      </span>
                      <span className="text-body2 text-grayish-sky font-medium w-14 text-center">
                        QTY.
                      </span>
                      <span className="text-body2 text-grayish-sky font-medium w-24 text-right">
                        Price
                      </span>
                      <span className="text-body2 text-grayish-sky font-medium w-32 text-right">
                        Total
                      </span>
                    </div>
                    {
                      (invoice.items && invoice.items.length > 0)
                      ? <div className="space-y-6 md:space-y-8">
                          {
                            _.map(invoice.items, (item) => (
                              <div key={`${item.id}`}>
                                <div className="flex items-center md:hidden justify-between">
                                  <div className="flex flex-col">
                                    <span className="text-body1 text-grayish-dark font-bold flex-1">
                                      { item.name || '-' }
                                    </span>

                                    <div>
                                      <span className="text-body1 text-grayish-sky font-bold w-14 text-center">
                                        { `${item.quantity || '0' } x £ ${item.price.toLocaleString('en-US', { minimumFractionDigits: 2 }) || '0'}` }
                                      </span>
                                    </div>
                                  </div>

                                  <div>
                                    <span className="text-body2 text-grayish-dark font-bold w-32 text-right">
                                      £ { item.total.toLocaleString('en-US', { minimumFractionDigits: 2 }) || '0' }
                                    </span>
                                  </div>
                                </div>

                                <div
                                  className="hidden md:flex items-center">
                                  <span className="text-body1 text-grayish-dark font-bold flex-1">
                                    { item.name || '-' }
                                  </span>
                                  <span className="text-body1 text-grayish-sky font-bold w-14 text-center">
                                    { item.quantity || '0' }
                                  </span>
                                  <span className="text-body2 text-grayish-sky font-bold w-24 text-right">
                                    £ { item.price.toLocaleString('en-US', { minimumFractionDigits: 2 }) || '0' }
                                  </span>
                                  <span className="text-body2 text-grayish-dark font-bold w-32 text-right">
                                    £ { item.total.toLocaleString('en-US', { minimumFractionDigits: 2 }) || '0' }
                                  </span>
                                </div>
                              </div>
                            ))
                          }
                        </div>
                      : <div className="h-12 flex items-center justify-center">
                          <span className="text-h4 text-grayish-slick font-bold">
                            No items found
                          </span>
                        </div>
                    }

                  </div>

                  <div className="flex rounded-bl-lg rounded-br-lg items-center justify-between p-6 bg-dim md:py-6 md:px-8">
                    <span className="text-body2 font-medium text-white">
                      Grand Total
                    </span>

                    <span className="text-h2 font-bold text-white">
                      £ {  invoice.total.toLocaleString('en-US', { minimumFractionDigits: 2 })  }
                    </span>
                  </div>
                </div>
              </div>

              <div className="h-8"></div>
            </>
          }
        </div>
      </div>

      {
        invoice &&
        <div className="flex justify-center bg-white">
          <div className="flex items-center p-6 space-x-2 md:hidden">
            <ButtonComp
              label={
                <div className="text-h4 font-bold text-grayish-sky">
                  <span>
                    Edit
                  </span>
                </div>
              }
              className="group bg-grayish-light hover:bg-grayish"
              onClick={() => {

              }}
            />

            <ButtonComp
              label={
                <div className="text-h4 font-bold text-white">
                  <span>
                    Delete
                  </span>
                </div>
              }
              className="group bg-redish hover:bg-redish-faded"
              onClick={() => {

              }}
            />

            <ButtonComp
              label={
                <div className="text-h4 font-bold text-white">
                  <span>
                    Mark as Paid
                  </span>
                </div>
              }
              className="group bg-indigo hover:bg-indigo-faded"
              onClick={() => {

              }}
            />
          </div>
        </div>
      }
    </div>
  )
}

export default InvoiceDetailPage;
