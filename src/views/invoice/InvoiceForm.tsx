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

import DeleteIcon from '../../components/icons/DeleteIcon';
import InputComp from '../../components/fields/InputComp';
import ButtonComp from '../../components/ButtonComp';

import { TAddress, TInvoice, TInvoiceItem } from '../../types/InvoiceTypes';

const kRequired = 'required';

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
                .required(kRequired),
              price: Yup.number()
                .required(kRequired),
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
                  error={
                    errors.senderAddress?.street && touched.senderAddress?.street
                      ? errors.senderAddress.street
                      : ''
                  }
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>

              <div className="flex items-center justify-evenly space-x-6">
                <InputComp
                  label={'City'}
                  name="senderAddress.city"
                  id="senderAddress.city"
                  error={
                    errors.senderAddress?.city && touched.senderAddress?.city
                      ? errors.senderAddress.city
                      : ''
                  }
                  onChange={handleChange}
                  onBlur={handleBlur}/>
                <InputComp
                  label={'Post Code'}
                  name="senderAddress.postCode"
                  id="senderAddress.postCode"
                  error={
                    errors.senderAddress?.postCode && touched.senderAddress?.postCode
                      ? errors.senderAddress.postCode
                      : ''
                  }
                  onChange={handleChange}
                  onBlur={handleBlur}/>
                <InputComp
                  label={'Country'}
                  name="senderAddress.country"
                  id="senderAddress.country"
                  error={
                    errors.senderAddress?.country && touched.senderAddress?.country
                      ? errors.senderAddress.country
                      : ''
                  }
                  onChange={handleChange}
                  onBlur={handleBlur}/>
              </div>
            </div>

            <div className="mt-12 space-y-6">
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
                  error={
                    errors.clientAddress?.street && touched.clientAddress?.street
                      ? errors.clientAddress.street
                      : ''
                  }
                  onChange={handleChange}
                  onBlur={handleBlur}/>
              </div>

              <div className="flex items-center justify-evenly space-x-6">
                <InputComp label={'City'}
                  name="clientAddress.city"
                  id="clientAddress.city"
                  error={
                    errors.clientAddress?.city && touched.clientAddress?.city
                      ? errors.clientAddress.city
                      : ''
                  }
                  onChange={handleChange}
                  onBlur={handleBlur}/>
                <InputComp label={'Post Code'}
                  name="clientAddress.postCode"
                  id="clientAddress.postCode"
                  error={
                    errors.clientAddress?.postCode && touched.clientAddress?.postCode
                      ? errors.clientAddress.postCode
                      : ''
                  }
                  onChange={handleChange}
                  onBlur={handleBlur}/>
                <InputComp
                  label={'Country'}
                  name="clientAddress.country"
                  id="clientAddress.country"
                  error={
                    errors.clientAddress?.country && touched.clientAddress?.country
                      ? errors.clientAddress.country
                      : ''
                  }
                  onChange={handleChange}
                  onBlur={handleBlur}/>
              </div>
            </div>

            <div className="mt-12 space-y-6">
              <div className="flex items-center justify-evenly space-x-6">
                <InputComp
                  type="date"
                  label={'Invoice Date'}
                  name="paymentDue"
                  id="paymentDue"
                  error={
                    errors.paymentDue && touched.paymentDue
                      ? errors.paymentDue
                      : ''
                  }
                  onChange={handleChange}
                  onBlur={handleBlur}/>
                <InputComp
                  label={'Payment Terms'}
                  name="paymentTerms"
                  id="paymentTerms"
                  error={
                    errors.paymentTerms && touched.paymentTerms
                      ? errors.paymentTerms
                      : ''
                  }
                  onChange={handleChange}
                  onBlur={handleBlur}/>
              </div>

              <div>
                <InputComp
                  label={"Project Description"}
                  name="description"
                  id="description"
                  error={
                    errors.description && touched.description
                      ? errors.description
                      : ''
                  }
                  onChange={handleChange}
                  onBlur={handleBlur}/>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <div className="flex items-center space-x-6">
                <span className="flex-1 text-grayish-sky text-body1 font-medium">
                  Item Name
                </span>
                <span className="flex-none w-18 text-grayish-sky text-body1 font-medium">
                  Qty.
                </span>
                <span className="flex-none w-24 text-grayish-sky text-body1 font-medium">
                  Price
                </span>
                <span className="flex-none w-18 text-grayish-sky text-body1 font-medium">
                  Total
                </span>
                <span className="flex-none w-3"></span>
              </div>

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
                            className="mt-4 flex items-center space-x-4">
                            <div className="flex-1">
                              <InputComp
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
                              />
                            </div>
                            <div className="flex-none w-18">
                              <InputComp
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
                              />
                            </div>
                            <div className="flex-none w-24" >
                              <InputComp
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
                              />
                            </div>
                            <span className="flex-none w-18 text-grayish-slick text-h4 font-bold">
                              { (item.quantity * item.price).toLocaleString('en-US', { minimumFractionDigits: 2 }) }
                            </span>
                            <div>
                              <DeleteIcon
                                className="w-3 h-4 fill-current hover:text-redish cursor-pointer"
                                onClick={() => onRemoveClick(index) } />
                            </div>
                          </div>
                        ))
                      }

                      <div>
                        <ButtonComp
                          label={
                            <div className="text-h4 font-bold text-grayish-sky">
                              <span>
                                + Add New Item
                              </span>
                            </div>
                          }
                          className="group bg-grayish-light hover:bg-grayish"
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
