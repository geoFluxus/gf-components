import React, { FC } from "react";
import QuickNavCard, { QuickNavCardProps } from "../QuickNavCard";

const Example: FC<QuickNavCardProps> = ({
  title,
  subtitle,
  text,
  listTitle,
  items,
  gap,
  ...props
}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <QuickNavCard 
        title={title} 
        subtitle={subtitle}
        text={text}
        listTitle={listTitle}
        items={items}
        gap={gap}
        {...props}
      />
    </div>
  );
};

export default Example;