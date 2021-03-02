import React from 'react';
import Image from 'next/image';

import { toJS } from 'mobx';
import _ from 'lodash';
import { FormikProps } from 'formik';

import { generateRandomId } from '../../utils/generatorUtil';
import { InvoiceStatusEnum, TInvoice } from '../../types/InvoiceTypes';

import ButtonComp from '../../components/ButtonComp';

import InvoiceForm from './InvoiceForm';
import useStores from '../../hooks/useStores';

interface ComponentProps {
  invoice: TInvoice,
  onClose: () => void,
}

function InvoiceEdit(props: ComponentProps) {
  const formRef = React.useRef<FormikProps<TInvoice>>(null);

  const { invoiceStore } = useStores();

  const handleSubmit = (
    status?: InvoiceStatusEnum,
  ) => {
    if (status === InvoiceStatusEnum.DRAFT) {
      onSubmit(formRef.current.values, status);
    } else if (status === InvoiceStatusEnum.PENDING) {
      formRef.current.handleSubmit();
    } else {
      if  (props.invoice.status === InvoiceStatusEnum.DRAFT) {
        onSubmit(formRef.current.values, InvoiceStatusEnum.DRAFT);
      } else {
        formRef.current.handleSubmit();
      }
    }
  }

  const onSubmit = (
    values: TInvoice,
    status?: InvoiceStatusEnum,
  ) => {
    values.status = status || InvoiceStatusEnum.PENDING;
    values.createdOn = new Date();
    values.paymentDue = values.paymentDue;

    values.items = _.map(values.items, (item) => {
      item.quantity = +item.quantity;
      item.price = +item.price;
      item.total = +item.quantity * +item.price;
      return item;
    });

    values.total = _.reduce(values.items, (sum, item) => {
      return sum + item.total;
    }, 0);

    invoiceStore.updateInvoice(props.invoice.id, values);
    invoiceStore.setCurrentInvoice(props.invoice.id);

    props.onClose();
  }

  React.useEffect(() => {
    const values = toJS(props.invoice);
    values.createdOn = values.createdOn ? new Date(values.createdOn) : null;
    values.paymentDue = values.paymentDue ? new Date(values.paymentDue) : null;
    formRef.current.setValues(values);
  }, []);

  return (
    <div className="h-full flex flex-col pt-8 md:pt-10">
      <div className="px-6 mb-6 flex items-center space-x-6 cursor-pointer hover:opacity-75 md:hidden"
        onClick={props.onClose}>
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

      <div className="flex-none px-6 md:px-14">
        <div className="text-subtitle font-bold text-grayish-dark">
          <span>
            {`Edit #${props.invoice.id}`}
          </span>
        </div>
      </div>
      <div className="px-6 md:px-14 mt-6 md:mt-12 pb-8 flex-1 overflow-y-auto">
        <InvoiceForm
          innerRef={formRef}
          onSubmit={onSubmit}
        />
      </div>
      <div className="flex-none px-6 md:px-14 bg-white">
        <div className="h-24 md:h-28 flex items-center justify-between">
          <div>
            <ButtonComp
              label={
                <div className="text-h4 font-bold text-grayish-sky">
                  <span>
                    Cancel
                  </span>
                </div>
              }
              className="group bg-grayish-light hover:bg-grayish"
              onClick={props.onClose}
            />
          </div>

          <div className="flex items-center space-x-2">
            <ButtonComp
              label={
                <div className="text-h4 font-bold text-grayish-slick">
                  <span>
                    Save Changes
                  </span>
                </div>
              }
              className="group bg-dim hover:bg-grayish-dark"
              onClick={() => {
                handleSubmit();
              }}
            />
            {
              props.invoice.status === InvoiceStatusEnum.DRAFT &&
              <ButtonComp
                label={
                  <div className="text-h4 font-bold text-white">
                    <span>
                      Save & Send
                    </span>
                  </div>
                }
                className="group bg-indigo hover:bg-indigo-faded"
                onClick={() => {
                  handleSubmit(InvoiceStatusEnum.PENDING);
                }}
              />
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default InvoiceEdit;
