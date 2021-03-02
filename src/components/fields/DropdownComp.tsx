import React from 'react';
import Image from 'next/image';

import _ from 'lodash';

type TItem = {
  key: any,
  value: string,
}

interface ComponentProps {
  items: TItem[],
  label?: string,
  value: any,
  error?: string,
  onChange: (value: TItem) => void;
  onBlur?: () => void;
}

function DropdownComp(props: ComponentProps) {
  const [value, setValue] = React.useState('')
  const [showItems, setShowItems] = React.useState(false);

  const toggleShowItems = () => {
    setShowItems(!showItems);
  };

  const onItemClick = (item: TItem) => {
    toggleShowItems();
    props.onChange?.(item);
  }

  React.useEffect(() => {
    if (props.items && props.items.length > 0) {
      const currentValue = _.find(props.items, (item) => item.key === props.value)?.value;
      setValue(currentValue);
    }
  }, [props.value])

  return (
    <div className="relative w-full space-y-10px">
      {
        (props.label) &&
        <div className="flex items-end justify-between">
          {
            props.label &&
            <span className={`${props.error ? 'text-redish' : 'text-grayish-sky'} text-body1 font-medium`}>
              { props.label }
            </span>
          }
        </div>
      }

      <div
        className={`relative h-12 w-full rounded px-5 flex items-center justify-between text-grayish-dark font-bold text-h4 bg-transparent border ${props.error ? 'border-redish hover:border-redish active:border focus:border-redish' : 'border-grayish hover:border-indigo-faded active:border focus:border-indigo-faded'} focus:outline-none`}
        onClick={toggleShowItems}>
        <span>
          { value }
        </span>
        <Image
          src="/assets/icon-arrow-down.svg"
          alt="Arrow down"
          width="12px"
          height="8px" />
      </div>

      {
        showItems &&
        <div className="absolute left-0 right-0 top-18 shadow-md rounded-md bg-white">
          <div className="h-full flex flex-col divide-y divide-grayish">
            {
              _.map(props.items, (item, i) => (
                <div
                  key={item.key}
                  className="px-6 h-12 flex items-center cursor-pointer hover:bg-grayish-light"
                  onClick={() => onItemClick(item)}>
                  <span className={`text-h4  font-bold ${item.key === props.value ? 'text-indigo' : 'text-grayish-dark' }`}>
                    {
                      item.value
                    }
                  </span>
                </div>
              ))
            }
          </div>
        </div>
      }
    </div>
  )
}

export default React.memo(DropdownComp);
