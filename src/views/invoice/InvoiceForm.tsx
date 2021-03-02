import React from 'react';

import { v4 as uuidv4 } from 'uuid';

import _ from 'lodash';

import {
  Formik,
  Form,
  FieldArray,
  FormikProps,
  FormikErrors,
  FormikTouched,
} from 'formik';
import * as Yup from 'yup';

import ButtonComp from '../../components/ButtonComp';
import MemoDeleteIcon from '../../components/icons/DeleteIcon';
import InputComp from '../../components/fields/InputComp';
import DropdownComp from '../../components/fields/DropdownComp';
import DatePickerComp from '../../components/fields/DatePickerComp';

import { TAddress, TInvoice, TInvoiceItem } from '../../types/InvoiceTypes';

const kRequired = 'required';
const kTermItems = [
  {
    key: 1,
    value: 'Net 1 Day',
  },
  {
    key: 7,
    value: 'Net 7 Day',
  },
  {
    key: 14,
    value: 'Net 14 Day',
  },
  {
    key: 30,
    value: 'Net 30 Day',
  }
]

const InvoiceFormSchema =
  Yup.object()
    .shape<Partial<TInvoice>>({
      senderAddress: Yup.object()
        .shape<TAddress>({
          street: Yup.string()
            .required(kRequired),
          city: Yup.string()
            .required(kRequired),
          postCode: Yup.string()
            .required(kRequired),
          country: Yup.string()
            .required(kRequired),
      }),
      clientName: Yup.string()
        .required(kRequired),
      clientEmail: Yup.string()
        .required(kRequired),
      clientAddress: Yup.object()
        .shape<TAddress>({
          street: Yup.string()
            .required(kRequired),
          city: Yup.string()
            .required(kRequired),
          postCode: Yup.string()
            .required(kRequired),
          country: Yup.string()
            .required(kRequired),
      }),
      paymentDue: Yup.date()
        .required(kRequired)
        .nullable(),
      paymentTerms: Yup.number()
        .required(kRequired),
      description: Yup.string()
        .required(kRequired),
      items: Yup.array()
        .of(
          Yup.object()
            .shape<TInvoiceItem>({
              name: Yup.string()
                .required(kRequired),
              quantity: Yup.number()
                .required(kRequired)
                .min(0),
              price: Yup.number()
                .required(kRequired)
                .min(0),
              total: Yup.number()
                .optional(),
          })
        )
        .min(1, 'An item must be added')
    });

interface ComponentProps {
  innerRef?: React.Ref<FormikProps<TInvoice>>,
  invoice?: TInvoice,
  onSubmit: (value: TInvoice) => void,
}

function InvoiceForm(props: ComponentProps) {
  const [initialFormValue, setInitialFormValue] = React.useState<Partial<TInvoice>>({
    senderAddress: {
      street: '',
      city: '',
      postCode: '',
      country: '',
    },
    clientName: '',
    clientEmail: '',
    clientAddress: {
      street: '',
      city: '',
      postCode: '',
      country: '',
    },
    items: [],
    paymentDue: '',
    paymentTerms: null,
    description: ''
  });

  React.useEffect(() => {
    if (props.invoice) {
      setInitialFormValue(props.invoice);
    }
  }, [props.invoice]);

  return (
    <Formik
      innerRef={props.innerRef}
      enableReinitialize={true}
      initialValues={initialFormValue}
      validationSchema={InvoiceFormSchema}
      onSubmit={async (values: TInvoice, actions) => {
        if (props.onSubmit) {
          props.onSubmit(values);
        }
      }}>

      {(formProps: FormikProps<TInvoice>) => {
        const {
          values,
          touched,
          errors,
          handleBlur,
          handleChange,
          isValid,
          dirty,
          isSubmitting,
          setFieldValue,
          setTouched,
        } = formProps;

        return (
          <Form>
            <div className="space-y-6">
              <div>
                <span className="text-indigo text-h4 font-bold">
                  Bill From
                </span>
              </div>

              <div>
                <InputComp
                  label={'Street Address'}
                  name="senderAddress.street"
                  id="senderAddress.street"
                  value={values.senderAddress?.street}
                  error={
                    errors.senderAddress?.street && touched.senderAddress?.street
                      ? errors.senderAddress.street
                      : ''
                  }
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>

              <div className="grid grid-cols-2 auto-rows-auto gap-x-6 gap-y-6 sm:grid-cols-3">
                <InputComp
                  label={'City'}
                  name="senderAddress.city"
                  id="senderAddress.city"
                  value={values.senderAddress?.city}
                  error={
                    errors.senderAddress?.city && touched.senderAddress?.city
                      ? errors.senderAddress.city
                      : ''
                  }
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="col-start-1 col-end-2 row-start-1 row-end-2"
                />

                <InputComp
                  label={'Post Code'}
                  name="senderAddress.postCode"
                  id="senderAddress.postCode"
                  value={values.senderAddress?.postCode}
                  error={
                    errors.senderAddress?.postCode && touched.senderAddress?.postCode
                      ? errors.senderAddress.postCode
                      : ''
                  }
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="col-start-2 col-end-3 row-start-1 row-end-2"
                />

                <InputComp
                  label={'Country'}
                  name="senderAddress.country"
                  id="senderAddress.country"
                  value={values.senderAddress?.country}
                  error={
                    errors.senderAddress?.country && touched.senderAddress?.country
                      ? errors.senderAddress.country
                      : ''
                  }
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="row-start-2 row-end-3 col-start-1 col-end-3 sm:col-start-3 sm:col-end-4 sm:row-start-1 sm:row-end-2"
                />
              </div>
            </div>

            <div className="mt-10 sm:mt-12 space-y-6">
              <div>
                <span className="text-indigo text-h4 font-bold">
                  Bill To
                </span>
              </div>

              <div>
                <InputComp
                  label={"Client's name"}
                  name="clientName"
                  id="clientName"
                  value={values.clientName}
                  error={
                    errors.clientName && touched.clientName
                      ? errors.clientName
                      : ''
                  }
                  onChange={handleChange}
                  onBlur={handleBlur}/>
              </div>

              <div>
                <InputComp
                  type="email"
                  label={"Client's Email"}
                  name="clientEmail"
                  id="clientEmail"
                  value={values.clientEmail}
                  error={
                    errors.clientEmail && touched.clientEmail
                      ? errors.clientEmail
                      : ''
                  }
                  onChange={handleChange}
                  onBlur={handleBlur}/>
              </div>

              <div>
                <InputComp
                  label={"Street Address"}
                  name="clientAddress.street"
                  id="clientAddress.street"
                  value={values.clientAddress.street}
                  error={
                    errors.clientAddress?.street && touched.clientAddress?.street
                      ? errors.clientAddress.street
                      : ''
                  }
                  onChange={handleChange}
                  onBlur={handleBlur}/>
              </div>

              <div className="grid grid-cols-2 auto-rows-auto gap-x-6 gap-y-6 sm:grid-cols-3">
                <InputComp
                  label={'City'}
                  name="clientAddress.city"
                  id="clientAddress.city"
                  value={values.clientAddress.city}
                  error={
                    errors.clientAddress?.city && touched.clientAddress?.city
                      ? errors.clientAddress.city
                      : ''
                  }
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="col-start-1 col-end-2 row-start-1 row-end-2"
                />

                <InputComp
                  label={'Post Code'}
                  name="clientAddress.postCode"
                  id="clientAddress.postCode"
                  value={values.clientAddress.postCode}
                  error={
                    errors.clientAddress?.postCode && touched.clientAddress?.postCode
                      ? errors.clientAddress.postCode
                      : ''
                  }
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="col-start-2 col-end-3 row-start-1 row-end-2"
                />

                <InputComp
                  label={'Country'}
                  name="clientAddress.country"
                  id="clientAddress.country"
                  value={values.clientAddress.country}
                  error={
                    errors.clientAddress?.country && touched.clientAddress?.country
                      ? errors.clientAddress.country
                      : ''
                  }
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="row-start-2 row-end-3 col-start-1 col-end-3 sm:col-start-3 sm:col-end-4 sm:row-start-1 sm:row-end-2"
                />
              </div>
            </div>

            <div className="mt-12 space-y-6">
              <div className="flex flex-col items-center justify-evenly space-y-6 sm:flex-row sm:space-x-6 sm:space-y-0">
                <DatePickerComp
                  label={'Invoice Date'}
                  name="paymentDue"
                  id="paymentDue"
                  value={values.paymentDue}
                  error={
                    errors.paymentDue && touched.paymentDue
                      ? errors.paymentDue
                      : ''
                  }
                  onChangeValue={(value: Date) => {
                    setFieldValue('paymentDue', value, true)
                  }}
                  onBlur={handleBlur}/>

                <DropdownComp
                  label={'Payment Terms'}
                  items={kTermItems}
                  value={values.paymentTerms}
                  onChange={(item) => {
                    setFieldValue('paymentTerms', item.key, true)
                  }}
                  error={
                    errors.paymentTerms && touched.paymentTerms
                      ? errors.paymentTerms
                      : ''
                  }
                  onBlur={() => setTouched({paymentTerms: true}, true) }
                />
              </div>

              <div>
                <InputComp
                  label={"Project Description"}
                  name="description"
                  id="description"
                  value={values.description}
                  error={
                    errors.description && touched.description
                      ? errors.description
                      : ''
                  }
                  onChange={handleChange}
                  onBlur={handleBlur}/>
              </div>
            </div>

            <div className="mt-16 sm:mt-8 mb-8 sm:mb-4">
              <span className="text-h3 font-bold text-grayish-slick">
                Item List
              </span>
            </div>

            <div className="space-y-12 sm:space-y-4">
              <FieldArray name="items">
                {({ form, ...fieldArrayHelpers }) => {
                  const onAddClick = () => {
                    fieldArrayHelpers.push({
                      id: uuidv4(),
                      name: '',
                      quantity: 0,
                      price: 0,
                      total: 0
                    });
                  };

                  const onRemoveClick = (index: number) => {
                    fieldArrayHelpers.remove(index);
                  }

                  return (
                    <>
                      {
                        _.map(values.items, (item, index) => (
                          <div
                            key={index}
                            className="flex items-end space-y-4 space-x-0 sm:space-y-0 sm:space-x-4 flex-wrap">

                            <div className="flex-auto w-full sm:flex-1 sm:w-auto">
                              <InputComp
                                label="Item Name"
                                name={`items[${index}].name`}
                                id={`items[${index}].name`}
                                error={
                                  (errors.items?.[index] as FormikErrors<TInvoiceItem>)?.name &&
                                  (touched.items?.[index] as FormikTouched<TInvoiceItem>)?.name
                                    ? (errors.items[index] as FormikErrors<TInvoiceItem>)?.name
                                    : ''
                                }
                                value={item.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                labelClassName={`${index > 0 ? 'sm:hidden' : ''}`}
                              />
                            </div>

                            <div className="flex-1 flex items-end space-x-4">
                              <div className="flex-none w-18">
                                <InputComp
                                  label="Qty."
                                  name={`items[${index}].quantity`}
                                  id={`items[${index}].quantity`}
                                  error={
                                    (errors.items?.[index] as FormikErrors<TInvoiceItem>)?.quantity &&
                                    (touched.items?.[index] as FormikTouched<TInvoiceItem>)?.quantity
                                      ? (errors.items[index] as FormikErrors<TInvoiceItem>)?.quantity
                                      : ''
                                  }
                                  value={item?.quantity}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  labelClassName={`${index > 0 ? 'sm:hidden' : ''}`}
                                />
                              </div>
                              <div className="flex-none w-24" >
                                <InputComp
                                  label="Price"
                                  name={`items[${index}].price`}
                                  id={`items[${index}].price`}
                                  error={
                                    (errors.items?.[index] as FormikErrors<TInvoiceItem>)?.price &&
                                    (touched.items?.[index] as FormikTouched<TInvoiceItem>)?.price
                                      ? (errors.items[index] as FormikErrors<TInvoiceItem>)?.price
                                      : ''
                                  }
                                  value={item.price}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  labelClassName={`${index > 0 ? 'sm:hidden' : ''}`}
                                />
                              </div>
                              <div className="flex-1 space-y-10px sm:flex-none">
                                {
                                  <span className={`flex-none flex items-end w-18 text-grayish-sky dark:text-grayish text-body1 font-medium ${index > 0 ? 'sm:hidden' : ''}`}>
                                    Total
                                  </span>
                                }
                                <div className="flex items-center h-12">
                                  <span className="flex-none w-18 text-grayish-slick dark:text-grayish text-h4 font-bold">
                                    { (item.quantity * item.price).toLocaleString('en-US', { minimumFractionDigits: 2 }) }
                                  </span>
                                </div>
                              </div>

                              <div className="h-12 flex items-center pr-2 sm:pr-0">
                                <MemoDeleteIcon
                                  className="w-3 h-4 fill-current text-grayish-slick hover:text-redish cursor-pointer"
                                  onClick={() => onRemoveClick(index) } />
                              </div>
                            </div>
                          </div>
                        ))
                      }

                      <div>
                        <ButtonComp
                          label={
                            <div className="text-h4 font-bold text-grayish-sky dark:text-grayish">
                              <span>
                                + Add New Item
                              </span>
                            </div>
                          }
                          className="group bg-grayish-light dark:bg-indigo-dark hover:bg-grayish dark:hover:bg-indigo-darker"
                          onClick={() => onAddClick()}
                        />
                      </div>
                    </>
                  );
                }}
              </FieldArray>
            </div>

            {
              errors && Object.keys(errors).length > 0 && errors.constructor === Object &&
              <div className="mt-8 flex flex-col text-body3 text-redish font-semibold space-y-1">
                <span> - All fields must be added </span>
                {
                  errors.items && typeof errors.items === 'string' &&
                  <span> - { errors.items }</span>
                }
              </div>
            }
          </Form>
        )
      }}
    </Formik>
  )
}

export default InvoiceForm
