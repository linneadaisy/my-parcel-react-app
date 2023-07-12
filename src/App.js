import React, { Suspense } from 'react';
import { Andy } from './Andy';

const Button = React.lazy(() => import('./Button'));

export function App() {
  let [show, setShow] = React.useState(false);

  return (
    <>
      <h1>App</h1>
      <button onClick={() => setShow(true)}>Show button is {show}</button>
      <Andy></Andy>
      {show && (
        <>
          <Suspense fallback={<div>Loading...</div>}>
            <Button>
              <>Linnea</>
            </Button>
          </Suspense>
        </>
      )}
    </>
  );
}
