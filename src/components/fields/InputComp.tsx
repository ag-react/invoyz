import React from 'react';

interface ComponentProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: string,
  label?: string,
  value?: any,
  error?: string,
  className?: string,
  labelClassName?: string
}

function InputComp(props: ComponentProps) {
  return (
    <div className={`w-full space-y-10px ${props.className}`}>
      {
        (props.label) &&
        <div className={`flex items-end justify-between ${props.labelClassName}`}>
          {
            props.label &&
            <span className={`${props.error ? 'text-redish' : 'text-grayish-sky dark:text-grayish'} text-body1 font-medium`}>
              { props.label }
            </span>
          }
        </div>
      }

      <div className="h-12 w-full">
        <input
          id={props.id}
          name={props.name}
          type={props.type || 'text'}
          value={props.value}
          onChange={props.onChange }
          onBlur={props.onBlur }
          className={`h-full w-full rounded px-5 text-grayish-dark dark:text-white font-bold text-h4 bg-transparent dark:bg-indigo-darker border ${props.error ? 'border-redish hover:border-redish active:border focus:border-redish' : 'border-grayish dark:border-indigo-dark hover:border-indigo-faded active:border focus:border-indigo-faded dark:hover:border-indigo dark:focus:border-indigo'} focus:outline-none`} />
      </div>
    </div>
  )
}

export default React.memo(InputComp);
