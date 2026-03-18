import React from "react";

const Skelton = () => {
  return (
    <div className="w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="animate-pulse">
        <div className="mb-4 h-40 w-full rounded-xl bg-slate-200" />

        <div className="flex items-center justify-between">
          <div className="h-5 w-32 rounded bg-slate-200" />
          <div className="h-4 w-12 rounded bg-slate-200" />
        </div>

        <div className="mt-3 space-y-2">
          <div className="h-3 w-full rounded bg-slate-200" />
          <div className="h-3 w-5/6 rounded bg-slate-200" />
        </div>

        <div className="mt-5 flex items-center gap-3">
          <div className="h-9 w-28 rounded-lg bg-slate-200" />
          <div className="h-9 w-20 rounded-lg bg-slate-200" />
        </div>
      </div>
    </div>
  );
};

export default Skelton;
