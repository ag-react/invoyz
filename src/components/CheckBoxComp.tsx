import React from 'react';
import Image from 'next/image';

interface ComponentProps {
  label: string,
  checked: boolean,
  onChange: (checked: boolean) => void
}

function CheckBoxComp(props: ComponentProps) {

  const onItemClick = () => {
    props.onChange(!props.checked);
  }

  return (
    <div className="group flex items-center space-x-3 cursor-pointer hover:opacity-75"
      onClick={onItemClick}>
      {
        props.checked
        ? <div className="w-4 h-4 bg-indigo rounded-sm flex items-center justify-center">
            <Image
              src="/assets/icon-check.svg"
              alt="Checkbox checked"
              width="8px"
              height="8px"/>
          </div>
        : <div className="w-4 h-4 bg-grayish rounded-sm border-2 border-transparent group-hover:border-indigo "></div>
      }
      <span className="text-h4 font-bold indigo-darker">
        { props.label }
      </span>
    </div>
  )
}

export default React.memo(CheckBoxComp);
