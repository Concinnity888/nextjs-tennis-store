'use client';

import { FC } from "react";

type Props = {
  reset: () => void;
};

const GlobalError: FC<Props> = ({ reset }) => {
  return (
    <html>
      <body>
        <button onClick={reset}>refresh</button>
      </body>
    </html>
  );
};

export default GlobalError;
