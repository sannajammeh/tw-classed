// Animate on scroll global class

import { useRef, useEffect } from "react";

const isServer = typeof window === "undefined";

export class AOS {
  public observer: IntersectionObserver;
  constructor(config: IntersectionObserverInit = {}) {
    this.observer = isServer
      ? (new (class {})() as IntersectionObserver) // Evil dummy class hack
      : new IntersectionObserver(this.handleIntersect, config);
  }

  private handleIntersect = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      const mount = !!entry.target.getAttribute("data-aos-mount");
      const entryClass = entry.target.getAttribute("data-aos");

      if (entry.isIntersecting) {
        if (!entryClass) {
          console.warn("AOS: data-aos attribute is missing");
          return;
        }

        entry.target.classList.add(entryClass);
        if (mount) {
          return this.observer.unobserve(entry.target);
        }
      } else {
        if (mount) return;
        if (!entryClass)
          return console.warn("AOS: data-aos attribute is missing");

        entry.target.classList.remove(entryClass);
      }
    });
  };

  public observe = (element: HTMLElement) => {
    this.observer.observe(element);
  };

  public unobserve = (element: HTMLElement) => {
    this.observer.unobserve(element);
  };

  public observeAll = (elements: NodeListOf<HTMLElement> | HTMLElement[]) => {
    elements.forEach(this.observe);
    return () => {
      elements.forEach(this.unobserve);
    };
  };
}

export const Aos = new AOS();

export const useAOSRef = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    Aos.observe(ref.current);

    return () => {
      Aos.observer.unobserve(ref.current!);
    };
  }, []);

  return ref;
};
