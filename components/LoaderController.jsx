'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

function hideAllLoaders() {
  const nodes = document.querySelectorAll('.loader');
  nodes.forEach((loader) => {
    loader.style.transition = 'opacity 0.4s ease';
    loader.style.opacity = '0';
    loader.style.pointerEvents = 'none';
    window.setTimeout(() => {
      loader.style.display = 'none';
    }, 420);
  });
}

export default function LoaderController() {
  const pathname = usePathname();

  useEffect(() => {
    const first = window.setTimeout(hideAllLoaders, 1200);
    const fallback = window.setTimeout(hideAllLoaders, 2800);

    return () => {
      window.clearTimeout(first);
      window.clearTimeout(fallback);
    };
  }, [pathname]);

  return null;
}
