import React from 'react';

import _ from 'lodash';
import { FormikProps } from 'formik';

import { generateRandomId } from '../../utils/generatorUtil';
import { InvoiceStatusEnum, TInvoice } from '../../types/InvoiceTypes';

import ButtonComp from '../../components/ButtonComp';

import InvoiceForm from './InvoiceForm';
import useStores from '../../hooks/useStores';

interface ComponentProps {
  onClose: () => void,
}

function InvoiceAdd(props: ComponentProps) {
  const formRef = React.useRef<FormikProps<TInvoice>>(null);

  const { invoiceStore } = useStores();

  const handleSubmit = () => {
    formRef.current.handleSubmit();
  }

  const onSubmit = (values: TInvoice) => {
    values.status = InvoiceStatusEnum.DRAFT;
    values.createdOn = new Date();
    values.id = generateRandomId(2, 4).toUpperCase();
    values.paymentDue = new Date(values.paymentDue);

    values.items = _.map(values.items, (item) => {
      item.quantity = +item.quantity;
      item.price = +item.price;
      item.total = +item.quantity * +item.price;
      return item;
    });

    values.total = _.reduce(values.items, (sum, item) => {
      return sum + item.total;
    }, 0);

    invoiceStore.addInvoice(values);
    props.onClose();
  }

  return (
    <div className="h-full flex flex-col pt-10">
      <div className="flex-none px-14">
        <div className="text-subtitle font-bold text-grayish-dark">
          <span>New Invoice</span>
        </div>
      </div>
      <div className="px-14 mt-12 pb-12 flex-1 overflow-y-auto">
        <InvoiceForm
          innerRef={formRef}
          onSubmit={onSubmit}
        />
      </div>
      <div className="flex-none px-14 bg-white ">
        <div className="h-28 flex items-center justify-between">
          <div>
            <ButtonComp
              label={
                <div className="text-h4 font-bold text-grayish-sky">
                  <span>
                    Discard
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
                    Save as Draft
                  </span>
                </div>
              }
              className="group bg-dim hover:bg-grayish-dark"
              onClick={handleSubmit}
            />
            <ButtonComp
              label={
                <div className="text-h4 font-bold text-white">
                  <span>
                    Save & Send
                  </span>
                </div>
              }
              className="group bg-indigo hover:bg-indigo-faded"
              onClick={handleSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default InvoiceAdd;
