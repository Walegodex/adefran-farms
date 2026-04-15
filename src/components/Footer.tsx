import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 py-12 px-6 bg-white dark:bg-black text-center text-sm text-zinc-500">
      <p>© {new Date().getFullYear()} Adefran Farms. Cultivating a better tomorrow.</p>
    </footer>
  );
}
