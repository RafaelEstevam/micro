// import React, { lazy } from 'react';
// const Widget = lazy(() => import('sidebar/widget'));

import dynamic from "next/dynamic";
const Widget:any = dynamic(() => import('sidebar/widget'), {
  ssr: false,
})

export default function Home() {
  return (
    <main>
      <Widget
        name={'Rafael Estevam'}
      />
    </main>
  );
}
