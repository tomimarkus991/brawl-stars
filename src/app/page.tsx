"use client";

import { useGetPlayer } from "../hooks/queries/useGetPlayer";

export default function Page() {
  const { data } = useGetPlayer("99YCLGVJQ");

  return (
    <div className="flex h-[100vh] items-center justify-center bg-slate-900">
      <p className="text-4xl text-red-700">{data.data.name}</p>
      <div className="grid grid-flow-col grid-rows-6 gap-4">
        {data.data.brawlers.map((brawler: any) => (
          <div key={brawler.name}>
            <p className="text-4xl text-red-700">{brawler.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
