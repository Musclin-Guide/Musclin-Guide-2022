import { memo } from 'react';
import ReactLoading from 'react-loading';
function Spinner() {
  return <ReactLoading type="spin" color="#a3a3a3" />;
}

export default memo(Spinner);
