import React from 'react';

import DatePicker from 'react-datepicker';
import MemoCalendarIcon from '../icons/CalendarIcon';

interface ComponentProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: string,
  label?: string,
  value?: any,
  error?: string,
  onChangeValue?: (value: Date) => void,
  className?: string,
}

function DatePickerComp(props: ComponentProps) {

  const DatePickerTrigger = React.forwardRef((prop: any, ref: any) => {
    return (
      <div
        ref={ref}
        className={`h-12 w-full rounded px-5 flex items-center justify-between text-grayish-dark font-bold text-h4 bg-transparent dark:bg-indigo-darker border ${props.error ? 'border-redish hover:border-redish active:border focus:border-redish' : 'border-grayish dark:border-indigo-dark hover:border-indigo-faded active:border focus:border-indigo-faded dark:hover:border-indigo dark:focus:border-indigo'} focus:outline-none`}
        onClick={prop.onClick}>
        <span>
          { prop.value }
        </span>
        <MemoCalendarIcon
          width="16px"
          height="16px"
          className={`fill-current ${props.error ? 'text-redish' : 'text-grayish-sky'}`} />
      </div>
    );
  });

  return (
    <div className={`w-full space-y-10px ${props.className}`}>
      {
        (props.label) &&
        <div className="flex items-end justify-between">
          {
            props.label &&
            <span className={`${props.error ? 'text-redish' : 'text-grayish-sky dark:text-grayish'} text-body1 font-medium`}>
              { props.label }
            </span>
          }

          {/* {
            props.error &&
            <span className="text-redish text-body3 font-semibold">
              { props.error }
            </span>
          } */}
        </div>
      }

      <div className="h-12 w-full">
        <DatePicker
          id={props.id}
          name={props.name}
          selected={props.value}
          onChange={date => props.onChangeValue(date as Date)}
          onBlur={props.onBlur}
          dateFormat="dd MMM yyyy"
          closeOnScroll={true}
          wrapperClassName="w-full"
          popperClassName="shadow-md"
          customInput={<DatePickerTrigger />}
        />
      </div>
    </div>
  )
}

export default React.memo(DatePickerComp);
