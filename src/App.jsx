import React from 'react';

export default function Onepager() {
  return (
    <main className="bg-[#2d3d28] text-[#f0e3c3] min-h-screen font-sans">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold tracking-widest">3RDWAVE COFFEE</h1>
        <p className="text-lg mt-4 italic">Cultivated by the best.
Roasted by the best.
Delivered by the best.</p>
        <div className="mt-8 flex justify-center">
          <img src="/logo.png" alt="3rd Wave Coffee Logo" className="h-64 w-auto" />
        </div>
      </section>
    </main>
  );
}
