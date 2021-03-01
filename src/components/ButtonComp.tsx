import React from 'react';

interface ComponentProps {
  icon?: JSX.Element,
  label: JSX.Element,
  className?: string,
  onClick: () => void,
}

function ButtonComp(props: ComponentProps) {
  return (
    <div className={`rounded-3xl h-12 flex items-center cursor-pointer space-x-4 ${props.className} ${props.icon ? 'pl-2 pr-4' : 'px-6'}`}
      onClick={props.onClick}>
      { props.icon && props.icon }
      { props.label }
    </div>
  )
}

export default React.memo(ButtonComp);
