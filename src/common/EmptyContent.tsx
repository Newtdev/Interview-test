import { Icon } from "@mui/material";
import { EmptySvg } from "assets/svg/Svg";
import React from "react";
type EmptyContentType = {
  onRefetch: () => void;
};
function EmptyContent({ onRefetch }: EmptyContentType) {
  return (
    <div className="flex flex-col items-center justify-center flex-1">
      {/* <Icon>insert_drive_file</Icon> */}
      <EmptySvg />
      <span className="text-lg font-bold text-primary-dark"> Empty data</span>
    </div>
  );
}

export default EmptyContent;
