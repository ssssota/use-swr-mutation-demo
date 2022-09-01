import useSWRMutation from "swr/mutation";

export const Poster: React.FC = () => {
  const { trigger, reset, ...mut } = useSWRMutation<string, unknown, "/test">(
    "/test",
    (_key) => {
      return fetch("/a", { method: "POST" }).then((res) => res.text());
    },
    {
      onError: console.error,
      onSuccess: console.log,
      optimisticData: () => `optimistic: ${new Date().toISOString()}`,
    }
  );

  const Trigger = <button onClick={() => trigger()}>trigger</button>;
  const Reset = <button onClick={() => reset()}>reset</button>;

  return (
    <div>
      {Trigger} {Reset}
      <pre>{JSON.stringify(mut, undefined, 2)}</pre>
    </div>
  );
};
