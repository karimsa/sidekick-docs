import React from "react";
import { createPortal } from "react-dom";

export interface LightboxProps extends React.PropsWithChildren {}

export const Lightbox: React.FC<LightboxProps> = ({ children }) => {
  const [isOpen, setOpen] = React.useState(false);

  return (
    <>
      {isOpen &&
        createPortal(
          <div
            className="h-full w-full fixed top-0 left-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-5 cursor-pointer"
            onClick={() => setOpen(false)}
          >
            {children}
          </div>,
          document.body
        )}

      <div className="cursor-pointer" onClick={() => setOpen(true)}>
        {children}
      </div>
    </>
  );
};
