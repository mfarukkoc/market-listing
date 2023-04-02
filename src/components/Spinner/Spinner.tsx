import React from "react";
import SpinnerIcon from "@/assets/svg/Spinner.svg";

export default function Spinner() {
  return (
    <div role="status">
      <SpinnerIcon
        aria-hidden="true"
        className="mr-2 h-8 w-8 animate-spin fill-cyan-600 text-gray-200"
      />
      <span className="sr-only">Loading...</span>
    </div>
  );
}
