import React from 'react';

interface ComponentProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: string,
  label?: string,
  value?: any,
  error?: string,
  className?: string,
}

function InputComp(props: ComponentProps) {
  return (
    <div className={`w-full space-y-10px ${props.className}`}>
      {
        (props.label) &&
        <div className="flex items-end justify-between">
          {
            props.label &&
            <span className={`${props.error ? 'text-redish' : 'text-grayish-sky'} text-body1 font-medium`}>
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

      <div className="h-12 w-full ">
        <input
          id={props.id}
          name={props.name}
          type={props.type || 'text'}
          value={props.value}
          onChange={props.onChange }
          onBlur={props.onBlur }
          className={`h-full w-full rounded px-5 text-grayish-dark font-bold text-h4 bg-transparent border ${props.error ? 'border-redish hover:border-redish active:border focus:border-redish' : 'border-grayish hover:border-indigo-faded active:border focus:border-indigo-faded'} focus:outline-none`} />
      </div>
    </div>
  )
}

export default React.memo(InputComp);
