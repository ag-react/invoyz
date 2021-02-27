import React from 'react';

import { InvoiceStatusEnum } from '../../types/InvoiceTypes';

type TStatusClass = {
  bg: string,
  fg: string,
}
const kInitialStatusClass: TStatusClass = {
  bg: '',
  fg: ''
}

interface ComponentProps {
  status: InvoiceStatusEnum,
}

function InvoiceStatus(props: ComponentProps) {
  const [statusClass, setStatusClass] = React.useState<TStatusClass>(kInitialStatusClass);

  React.useEffect(() => {
    switch (props.status) {
      case InvoiceStatusEnum.DRAFT:
        setStatusClass({
          bg: "dim-faded",
          fg: "dim"
        });
        break;

      case InvoiceStatusEnum.PENDING:
        setStatusClass({
          bg: "yellow-faded",
          fg: "yellow"
        });
        break;

      case InvoiceStatusEnum.PAID:
        setStatusClass({
          bg: "green-faded",
          fg: "green"
        });
        break;

      default:
        break;
    }
  }, [props.status])

  return (
    <div className={`rounded-md w-full h-10 capitalize text-h4 font-bold flex items-center justify-center space-x-2 bg-${statusClass.bg} text-${statusClass.fg}`}>
      <div className={`rounded-full w-2 h-2 bg-${statusClass.fg}`}></div>
      <span>
        { props.status }
      </span>
    </div>
  )
}

export default React.memo(InvoiceStatus);
