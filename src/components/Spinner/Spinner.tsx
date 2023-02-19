import { ForwardedRef, forwardRef } from 'react';
import ReactLoading from 'react-loading';
function Spinner(_: any, ref: ForwardedRef<HTMLDivElement>) {
  return (
    <div ref={ref} aria-label="loading_Spinner" className="flex justify-center">
      <ReactLoading type="spin" color="#a3a3a3" />
    </div>
  );
}

export const Spinners = forwardRef(Spinner);
