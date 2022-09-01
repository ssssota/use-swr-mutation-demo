import React from "react";
import useSWR from "swr";

export const Getter: React.FC = () => {
  const { mutate, ...res } = useSWR("/test", (key) => {
    return fetch(key).then((res) => res.text());
  });
  const Mutate = <button onClick={() => mutate()}>mutate</button>;
  return (
    <div>
      {Mutate}
      <pre>{JSON.stringify(res, undefined, 2)}</pre>
    </div>
  );
};
