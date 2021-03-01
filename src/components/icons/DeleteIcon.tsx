import React from "react";

function DeleteIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      xmlns="http://www.w3.org/2000/svg"
      fill="#888EB0"
      {...props}
    >
      <path d="M11.583 3.556v10.666c0 .982-.795 1.778-1.777 1.778H2.694a1.777 1.777 0 01-1.777-1.778V3.556h10.666zM8.473 0l.888.889h3.111v1.778H.028V.889h3.11L4.029 0h4.444z" />
    </svg>
  )
}

const MemoDeleteIcon = React.memo(DeleteIcon);
export default MemoDeleteIcon;
