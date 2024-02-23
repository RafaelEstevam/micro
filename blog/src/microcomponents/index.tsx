import dynamic from "next/dynamic";

const Widget = dynamic(() => import('sidebar/widget'), {
  ssr: true,
});

export { Widget }
