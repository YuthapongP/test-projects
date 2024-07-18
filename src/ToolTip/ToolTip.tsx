import React, { useState } from "react";
import classNames from "classnames";

const tooltipContent = <p>tooltip</p>;

// type NonNullableContent = NonNullable<React.ReactNode | string>;

type NonNullable<T> = T extends null | undefined ? never : T;

interface ToolTipProps {
  content: React.ReactNode | string;
  direction?: "top" | "right" | "bottom" | "left";
}

const ToolTip: React.FC<NonNullable<ToolTipProps>> & {
  Content: React.FC<{ children: React.ReactNode }>;
} = ({ content = tooltipContent, direction = "bottom" }) => {
  const [showTooltip, setShowTooltip] = useState<boolean>(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <div className="tooltip-target">Hover me</div>
      <ToolTip.Content>
        <div
          className={classNames(
            "tooltip-content absolute z-10 bg-gray-800 text-white p-2 rounded-md shadow-md",
            {
              "bottom-full left-1/2 transform -translate-x-1/2":
                direction === "top",
              "top-1/2 right-full transform translate-y-1/2":
                direction === "right",
              "top-full left-1/2 transform -translate-x-1/2":
                direction === "bottom",
              "top-1/2 left-full transform -translate-y-1/2":
                direction === "left",
            }
          )}
        >
          {showTooltip && <ToolTip.Content>{content}</ToolTip.Content>}
        </div>
      </ToolTip.Content>
    </div>
  );
};

ToolTip.displayName = "ToolTip";

interface ToolTipContentProps {
  children: React.ReactNode;
}

const Content: React.FC<NonNullable<ToolTipContentProps>> = ({ children }) => {
  return <div className="text-xs">{children}</div>;
};

ToolTip.Content = Content;

export default ToolTip;
