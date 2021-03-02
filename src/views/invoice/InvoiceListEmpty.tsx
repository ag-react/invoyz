import React from 'react';
import Image from 'next/image'

function InvoiceListEmpty() {
  return (
    <div className="h-full flex items-center justify-center">
      <div className="flex flex-col justify-center" style={{
        maxWidth: '240px'
      }}>
        <Image
          src="/assets/illustration-empty.svg"
          alt="Logo"
          width="240px"
          height="200px"/>

        <div className="mt-16 text-center">
          <span className="text-h2 font-bold text-grayish-dark dark:text-white">
            There is nothing here
          </span>
        </div>

        <div className="mt-6 text-center">
          <span className="text-body1 text-grayish-slick dark:text-grayish">
            Create a new invoice by clicking the <strong>New Invoice</strong> button and get started
          </span>
        </div>
      </div>
    </div>
  )
}

export default React.memo(InvoiceListEmpty);
