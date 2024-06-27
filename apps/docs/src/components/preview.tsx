import React from "react";

interface PreviewProps {
  children: React.ReactNode;
}

function Preview(props: PreviewProps) {
  const { children, ...rest } = props;

  return (
    <div
      className="mt-6 rounded-xl border border-gray-200 p-4 dark:border-gray-900"
      {...rest}
    >
      {children}
    </div>
  );
}

export default Preview;
