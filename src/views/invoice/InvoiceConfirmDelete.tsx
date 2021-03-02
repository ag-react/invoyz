import React from 'react';

import ButtonComp from '../../components/ButtonComp';

interface ComponentProps {
  id: string,
  onDelete: () => void,
  onCancel: () => void,
}

function InvoiceConfirmDelete(props: ComponentProps) {
  return (
    <div className="rounded-lg p-8 md:p-12 bg-white dark:bg-indigo-darker flex flex-col space-y-4 w-4/5 md:max-w-md">
      <div>
        <span className="text-h2 text-grayish-dark dark:text-white font-bold">
          Confirm Deletion
        </span>
      </div>

      <div>
        <span className="text-body1 text-grayish-slick dark:text-grayish font-medium">
          {`Are you sure you want to delete invoice #${props.id}? This action cannot be undone.`}
        </span>
      </div>

      <div className="flex justify-end space-x-2">
        <ButtonComp
          label={
            <div className="text-h4 font-bold text-grayish-sky dark:text-grayish">
              <span>
                Cancel
              </span>
            </div>
          }
          className="group bg-grayish-light dark:bg-indigo-dark hover:bg-grayish dark:hover:bg-indigo-darker"
          onClick={props.onCancel}
        />

        <ButtonComp
          label={
            <div className="text-h4 font-bold text-white">
              <span>
                Delete
              </span>
            </div>
          }
          className="group bg-redish hover:bg-redish-faded"
          onClick={props.onDelete}
        />
      </div>
    </div>
  )
}

export default InvoiceConfirmDelete;
