import React from "react";

const Card = () => {
  return (
    <div className="w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-4 h-40 w-full overflow-hidden rounded-xl bg-slate-100">
        <img
          className="h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&auto=format&fit=crop"
          alt="Product"
        />
      </div>
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-slate-900">Essential Tee</h3>
        <span className="text-sm font-medium text-emerald-600">$24</span>
      </div>
      <p className="mt-2 text-sm text-slate-600">
        Soft, breathable cotton with a modern fit. Perfect for everyday wear.
      </p>
      <div className="mt-5 flex items-center gap-3">
        <button className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800">
          Add to cart
        </button>
        <button className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-900">
          Save
        </button>
      </div>
    </div>
  );
};

export default Card;
