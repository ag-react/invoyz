import React from "react";

function AddIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      xmlns="http://www.w3.org/2000/svg"
      fill="#7C5DFA"
      {...props}
    >
      <path d="M6.313 10.023v-3.71h3.71v-2.58h-3.71V.023h-2.58v3.71H.023v2.58h3.71v3.71z" />
    </svg>
  )
}

const MemoAddIcon = React.memo(AddIcon);
export default MemoAddIcon;
