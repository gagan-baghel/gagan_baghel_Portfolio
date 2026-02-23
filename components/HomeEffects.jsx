'use client';

import { useEffect } from 'react';

function loadScript({ id, src, crossOrigin, integrity }) {
  return new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[data-loader-id="${id}"]`);
    if (existing) {
      if (existing.getAttribute('data-loaded') === 'true') {
        resolve();
        return;
      }
      existing.addEventListener('load', () => resolve(), { once: true });
      existing.addEventListener('error', () => reject(new Error(`Failed to load script: ${src}`)), {
        once: true,
      });
      return;
    }

    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    script.setAttribute('data-loader-id', id);
    if (crossOrigin) {
      script.crossOrigin = crossOrigin;
    }
    if (integrity) {
      script.integrity = integrity;
    }

    script.addEventListener(
      'load',
      () => {
        script.setAttribute('data-loaded', 'true');
        resolve();
      },
      { once: true }
    );
    script.addEventListener('error', () => reject(new Error(`Failed to load script: ${src}`)), { once: true });

    document.body.appendChild(script);
  });
}

export default function HomeEffects() {
  useEffect(() => {
    const moveHandler = (event) => {
      const x = event.clientX;
      const y = event.clientY;

      document.querySelectorAll('.mitem').forEach((node) => {
        node.style.transform = `translate(${x / 10}px,${-y / 16}px)`;
      });

      document.querySelectorAll('.mitemo').forEach((node) => {
        node.style.transform = `translate(${-x / 10}px,${y / 10}px)`;
      });

      document.querySelectorAll('.mitemo2').forEach((node) => {
        node.style.transform = `translate(${x / 10}px,${y / 5}px)`;
      });
    };

    const scrollHandler = () => {
      const p1 = document.querySelector('.p1');
      const intrest = document.querySelector('.intrest');
      const subhead = document.querySelector('.subhead');
      const name = document.querySelector('.name');

      if (!p1 || !intrest || !subhead || !name) {
        return;
      }

      const value = window.scrollY;

      p1.style.position = 'relative';
      p1.style.left = `${value * 1.5}px`;
      p1.style.right = `${-value * 1.5}px`;

      intrest.style.position = 'relative';
      intrest.style.left = `${value * 1.2}px`;
      intrest.style.right = `${-value * 1.2}px`;

      subhead.style.position = 'relative';
      subhead.style.left = `${value * 1.7}px`;
      subhead.style.right = `${-value * 1.7}px`;

      name.style.position = 'relative';
      name.style.left = `${value * 1.6}px`;
      name.style.right = `${-value * 1.6}px`;
    };

    const initTagCanvas = () => {
      const jq = window.$;
      if (!jq || !jq.fn || typeof jq.fn.tagcanvas !== 'function') {
        return false;
      }

      if (!jq('#myCanvas').length) {
        return true;
      }

      try {
        jq('#myCanvas').tagcanvas(
          {
            textColour: '#64ffdbcd',
            outlineColour: 'transparent',
            reverse: true,
            depth: 0.8,
            weight: true,
          },
          'tags'
        );
      } catch (_error) {
        return false;
      }

      return true;
    };

    let intervalId;
    let cancelled = false;

    const bootstrapTagCanvas = async () => {
      try {
        if (!window.$ || !window.jQuery) {
          await loadScript({
            id: 'jquery-cdn',
            src: 'https://code.jquery.com/jquery-3.6.0.js',
            crossOrigin: 'anonymous',
            integrity: 'sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=',
          });
        }

        if (
          !window.$ ||
          !window.$.fn ||
          typeof window.$.fn.tagcanvas !== 'function'
        ) {
          await loadScript({
            id: 'tagcanvas-plugin',
            src: '/jquery.tagcanvas.js',
          });
        }
      } catch (_error) {
        return;
      }

      if (cancelled) {
        return;
      }

      let tries = 0;
      if (!initTagCanvas()) {
        intervalId = window.setInterval(() => {
          tries += 1;
          if (initTagCanvas() || tries > 30) {
            window.clearInterval(intervalId);
          }
        }, 150);
      }
    };

    bootstrapTagCanvas();

    document.addEventListener('mousemove', moveHandler);
    window.addEventListener('scroll', scrollHandler);

    return () => {
      cancelled = true;
      document.removeEventListener('mousemove', moveHandler);
      window.removeEventListener('scroll', scrollHandler);
      if (intervalId) {
        window.clearInterval(intervalId);
      }
    };
  }, []);

  return null;
}
