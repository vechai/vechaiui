import { DuplicateIcon } from "@heroicons/react/outline";
import { cx, IconButton } from "@vechaiui/react";
import * as React from "react";

export function ClipBoardButton({ className }: any) {
  return(
    <IconButton variant="solid" className={cx("absolute opacity-0 top-2 -right-4 z-10 group-hover:opacity-100", className)}>
      <DuplicateIcon className="w-5 h-5" />
    </IconButton>
  )
}