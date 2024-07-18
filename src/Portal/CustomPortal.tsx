import React, { forwardRef, useImperativeHandle, useState } from "react";
import { createPortal } from "react-dom";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

type PropTypes = {
  content: React.ReactNode;
};
export type PortalContentRef = {
  togglePortal: () => void;
};

type PortalContentProps = {
  children: React.ReactNode;
  togglePortal: () => void;
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const CustomPortal = forwardRef<PortalContentRef, PropTypes>(
  ({ content }, ref) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const rootPortal = document.getElementById("portal");

    useImperativeHandle(ref, () => ({
      togglePortal: () => setIsOpen((prev) => !prev),
    }));

    if (!rootPortal) {
      console.log("Portal does not exist");
      return null;
    }

    const Content = isOpen ? (
      <PortalContent togglePortal={() => setIsOpen((prev) => !prev)}>
        {content}
      </PortalContent>
    ) : null;

    return createPortal(Content, rootPortal);
  }
);

CustomPortal.displayName = "CustomPortal";

const PortalContent: React.FC<PortalContentProps> = ({
  children,
  togglePortal,
}) => {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50"
      tabIndex={-1}
    >
      <div
        className="relative flex bg-white p-4 rounded-lg shadow-lg h-500 w-700 justify-center items-center"
        style={{ width: "500px", height: "300px" }}
        tabIndex={-1}
      >
        <div
          className="absolute flex justify-center w-[20px] items-center h-[20px] top-2 right-2 text-gray-600 hover:text-gray-900 rounded-full hover:bg-gray-200 cursor-pointer"
          onClick={togglePortal}
          onKeyDown={(e) => e.stopPropagation()}
        >
          &#x2715;
        </div>
        {children}
      </div>
    </div>
  );
};

export default CustomPortal;
