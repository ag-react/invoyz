import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router'

import { observer } from 'mobx-react';
import _ from 'lodash';
import { format } from 'date-fns';

import useStores from '../../hooks/useStores';

import { InvoiceStatusEnum, TInvoice } from '../../types/InvoiceTypes';

import ButtonComp from '../../components/ButtonComp';

import DialogContainer from '../../views/popup/DialogContainer';
import PopupContainer from '../../views/popup/PopupContainer';
import InvoiceStatus from '../../views/invoice/InvoiceStatus';
import InvoiceConfirmDelete from '../../views/invoice/InvoiceConfirmDelete';
import InvoiceEdit from '../../views/invoice/InvoiceEdit';

function InvoiceDetailPage() {
  const router = useRouter();
  const { invoiceStore } = useStores();

  const [showDeleteDialog, setShowDeleteDialog] = React.useState<boolean>(false);
  const [showEditInvoiceView, setShowEditInvoiceView] = React.useState<boolean>(false);

  const backToList = () => {
    invoiceStore.clearCurrentInvoice();
    router.push('/');
  };

  const onDelete = () => {
    invoiceStore.deleteInvoice(invoiceStore.currentInvoice.id)
    backToList();
  }

  const markAsPaid = () => {
    invoiceStore.updateInvoiceStatus(invoiceStore.currentInvoice.id, InvoiceStatusEnum.PAID);
  }

  React.useEffect(() => {
    if (router.query?.id) {
      const invoiceId = router.query.id as string;
      const item = invoiceStore.setCurrentInvoice(invoiceId);

      if (!item) {
        backToList();
      }
    }
  }, [router.query]);

  return (
    <>
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
              invoiceStore.currentInvoice &&
              <>
                <div className="rounded-lg flex items-center justify-between bg-white px-8 py-6">
                  <div className="flex-1 flex items-center space-x-4 justify-between md:justify-start md:flex-none">
                    <span className="text-grayish-slick text-body1 font-medium">
                      Status
                    </span>
                    <InvoiceStatus status={invoiceStore.currentInvoice.status}/>
                  </div>

                  <div className="hidden md:flex md:items-center space-x-2">
                    {
                      invoiceStore.currentInvoice.status !== InvoiceStatusEnum.PAID &&
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
                          setShowEditInvoiceView(true);
                        }}
                      />
                    }

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
                        setShowDeleteDialog(true);
                      }}
                    />

                    {
                      invoiceStore.currentInvoice.status === InvoiceStatusEnum.PENDING &&
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
                          markAsPaid();
                        }}
                      />
                    }
                  </div>
                </div>

                <div className="mt-4 rounded-lg bg-white px-8 py-6 md:mt-6">
                  <div className="flex flex-col space-y-8 md:flex-row md:space-y-0 md:justify-between">
                    <div className="flex flex-col space-y-1">
                      <div className="text-h3 font-bold">
                        <span className="text-grayish-sky">#</span><span className="text-grayish-dark">{ invoiceStore.currentInvoice.id || '-'}</span>
                      </div>
                      <span className="text-body1 text-grayish-sky font-medium">
                        { invoiceStore.currentInvoice.description || '-'}
                      </span>
                    </div>

                    <div className="flex flex-col items-start md:items-end text-body2 text-grayish-sky font-medium space-y-1">
                      <span>
                        { invoiceStore.currentInvoice.senderAddress.street || '-'}
                      </span>
                      <span>
                        { invoiceStore.currentInvoice.senderAddress.city || '-'}
                      </span>
                      <span>
                        { invoiceStore.currentInvoice.senderAddress.postCode || '-'}
                      </span>
                      <span>
                        { invoiceStore.currentInvoice.senderAddress.country || '-'}
                      </span>
                    </div>
                  </div>

                  <div className="mt-8 md:mt-6 flex flex-row justify-start flex-wrap md:justify-between">
                    <div className="flex flex-col justify-between">
                      <div className="flex flex-col space-y-3">
                        <span className="text-body1 text-grayish-sky font-medium">
                          invoiceStore.currentInvoice Date
                        </span>
                        <span className="text-h3 text-grayish-dark font-bold">
                          { invoiceStore.currentInvoice.createdOn ? format(new Date(invoiceStore.currentInvoice.createdOn), 'dd MMM yyyy') : '-' }
                        </span>
                      </div>

                      <div className="flex flex-col space-y-3">
                        <span className="text-body1 text-grayish-sky font-medium">
                          Payment Date
                        </span>
                        <span className="text-h3 text-grayish-dark font-bold">
                          { invoiceStore.currentInvoice.paymentDue ? format(new Date(invoiceStore.currentInvoice.paymentDue), 'dd MMM yyyy') : '-' }
                        </span>
                      </div>
                    </div>

                    <div className="flex-1 flex flex-col space-y-2 ml-10 md:flex-none">
                      <div className="flex flex-col space-y-3">
                        <span className="text-body1 text-grayish-sky font-medium">
                          Bill To
                        </span>
                        <span className="text-h3 text-grayish-dark font-bold">
                          { invoiceStore.currentInvoice.clientName || '-' }
                        </span>
                      </div>
                      <div className="flex flex-col items-start text-body2 text-grayish-sky font-medium space-y-1 break-words">
                        <span>
                          { invoiceStore.currentInvoice.clientAddress.street || '-' }
                        </span>
                        <span>
                          { invoiceStore.currentInvoice.clientAddress.city || '-' }
                        </span>
                        <span>
                          { invoiceStore.currentInvoice.clientAddress.postCode || '-' }
                        </span>
                        <span>
                          { invoiceStore.currentInvoice.clientAddress.country || '-' }
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col justify-between w-full mt-8 md:w-auto md:mt-0">
                      <div className="flex flex-col space-y-3">
                        <span className="text-body1 text-grayish-sky font-medium">
                          Sent To
                        </span>
                        <span className="text-h3 text-grayish-dark font-bold">
                          { invoiceStore.currentInvoice.clientEmail || '-' }
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
                        (invoiceStore.currentInvoice.items && invoiceStore.currentInvoice.items.length > 0)
                        ? <div className="space-y-6 md:space-y-8">
                            {
                              _.map(invoiceStore.currentInvoice.items, (item) => (
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
                        £ {  invoiceStore.currentInvoice.total.toLocaleString('en-US', { minimumFractionDigits: 2 })  }
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
          invoiceStore.currentInvoice &&
          <div className="flex justify-end bg-white">
            <div className="flex items-center p-6 space-x-2 md:hidden">
              {
                invoiceStore.currentInvoice.status !== InvoiceStatusEnum.PAID &&
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
                    setShowEditInvoiceView(true);
                  }}
                />
              }

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
                  setShowDeleteDialog(true);
                }}
              />

              {
                invoiceStore.currentInvoice.status !== InvoiceStatusEnum.PENDING &&
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
                    markAsPaid();
                  }}
                />
              }
            </div>
          </div>
        }
      </div>
      {
        showDeleteDialog && invoiceStore.currentInvoice &&
        <DialogContainer>
          <InvoiceConfirmDelete
            id={invoiceStore.currentInvoice.id}
            onCancel={() => setShowDeleteDialog(false)}
            onDelete={onDelete}
          />
        </DialogContainer>
      }

      {
        showEditInvoiceView && invoiceStore.currentInvoice &&
        <PopupContainer>
          <InvoiceEdit
            invoice={invoiceStore.currentInvoice}
            onClose={() => setShowEditInvoiceView(false)}/>
        </PopupContainer>
      }
    </>
  )
}

export default observer(InvoiceDetailPage);
