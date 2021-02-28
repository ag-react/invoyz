import React from 'react';
import Image from 'next/image';

import _ from 'lodash';

import CheckBoxComp from '../../components/CheckBoxComp';
import { InvoiceStatusEnum } from '../../types/InvoiceTypes';

type TCheckboxesState ={
  [InvoiceStatusEnum.DRAFT]: boolean,
  [InvoiceStatusEnum.PENDING]: boolean,
  [InvoiceStatusEnum.PAID]: boolean,

}
const kInitialCheckboxesState: TCheckboxesState = {
  [InvoiceStatusEnum.DRAFT]: false,
  [InvoiceStatusEnum.PENDING]: false,
  [InvoiceStatusEnum.PAID]: false,
}

interface ComponentProps {
  onChange: (checked: string[]) => void
}

function InvoiceListFilter(props: ComponentProps) {
  const [showItems, setShowItems] = React.useState(false);
  const [checkboxes, setCheckboxes] = React.useState(kInitialCheckboxesState);

  const onCheckboxClick = (
    type: InvoiceStatusEnum,
    checked: boolean,
  ) => {
    const newCheckboxes = { ...checkboxes, [type]: checked};
    setCheckboxes(newCheckboxes);

    const checkValues = _.chain(newCheckboxes)
      .pickBy(cbox => cbox)
      .keys()
      .value();

    props.onChange(checkValues);
  }

  return (
    <div className="flex flex-col">
      <div className="space-x-4 flex items-center cursor-pointer hover:opacity-75"
        onClick={() => setShowItems(!showItems)}>
        <span className="text-h4 font-bold text-grayish-dark">
          Filter by status
        </span>
        <div className={`transition-transform transform ${showItems ? 'rotate-180' : 'rotate-0'}`}>
          <Image
            src="/assets/icon-arrow-down.svg"
            alt="Arrow up and down"
            width="12px"
            height="8px" />
        </div>
      </div>

      {
        (showItems === true)
        ? (
          <div className="relative">
            <div className="absolute transition-all top-4 -left-10 -right-10 bg-white rounded-lg p-6 space-y-4 z-10 shadow-md">
              <CheckBoxComp
                checked={checkboxes.draft}
                label={InvoiceStatusEnum.DRAFT}
                onChange={(checked) => onCheckboxClick(InvoiceStatusEnum.DRAFT, checked)}/>
              <CheckBoxComp
                checked={checkboxes.pending}
                label={InvoiceStatusEnum.PENDING}
                onChange={(checked) => onCheckboxClick(InvoiceStatusEnum.PENDING, checked)}/>
              <CheckBoxComp
                checked={checkboxes.paid}
                label={InvoiceStatusEnum.PAID}
                onChange={(checked) => onCheckboxClick(InvoiceStatusEnum.PAID, checked)}/>
            </div>
          </div>
        )
        : (<></>)
      }
    </div>
  )
}

export default React.memo(InvoiceListFilter);
