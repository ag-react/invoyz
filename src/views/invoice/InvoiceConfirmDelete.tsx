import React from 'react';

import ButtonComp from '../../components/ButtonComp';

interface ComponentProps {
  id: string,
  onDelete: () => void,
  onCancel: () => void,
}

function InvoiceConfirmDelete(props: ComponentProps) {
  return (
    <div className="rounded-lg p-12 bg-white flex flex-col space-y-4 max-w-md">
      <div>
        <span className="text-h2 text-grayish-dark font-bold">
          Confirm Deletion
        </span>
      </div>

      <div>
        <span className="text-body1 text-grayish-slick font-medium">
          {`Are you sure you want to delete invoice #${props.id}? This action cannot be undone.`}
        </span>
      </div>

      <div className="flex justify-end space-x-2">
        <ButtonComp
          label={
            <div className="text-h4 font-bold text-grayish-sky">
              <span>
                Cancel
              </span>
            </div>
          }
          className="group bg-grayish-light hover:bg-grayish"
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
