import React from 'react';

import { InvoiceStatusEnum } from '../../types/InvoiceTypes';

interface ComponentProps {
  status: InvoiceStatusEnum,
}

function InvoiceStatus(props: ComponentProps) {
  return (
    <>
      {
        props.status === InvoiceStatusEnum.DRAFT &&
        <div className={`rounded-md w-28 h-10 capitalize text-h4 font-bold flex items-center justify-center space-x-2 bg-dim-faded dark:bg-grayish-faded text-dim dark:text-white`}>
          <div className={`rounded-full w-2 h-2 bg-dim dark:bg-white`}></div>
          <span>
            { props.status }
          </span>
        </div>
      }

      {
        props.status === InvoiceStatusEnum.PENDING &&
        <div className={`rounded-md w-28 h-10 capitalize text-h4 font-bold flex items-center justify-center space-x-2 bg-yellow-faded text-yellow`}>
          <div className={`rounded-full w-2 h-2 bg-yellow`}></div>
          <span>
            { props.status }
          </span>
        </div>
      }

      {
        props.status === InvoiceStatusEnum.PAID &&
        <div className={`rounded-md w-28 h-10 capitalize text-h4 font-bold flex items-center justify-center space-x-2 bg-green-faded text-green`}>
          <div className={`rounded-full w-2 h-2 bg-green`}></div>
          <span>
            { props.status }
          </span>
        </div>
      }
    </>
  )
}

export default React.memo(InvoiceStatus);
