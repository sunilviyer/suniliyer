// Shared, eased pointer state (-1..1). One listener for the whole page.
const pt = { x: 0, y: 0, tx: 0, ty: 0 };
let bound = false;

export function bindPointer() {
  if (bound || typeof window === 'undefined') return pt;
  bound = true;
  window.addEventListener(
    'pointermove',
    (e) => {
      pt.tx = (e.clientX / window.innerWidth) * 2 - 1;
      pt.ty = (e.clientY / window.innerHeight) * 2 - 1;
    },
    { passive: true }
  );
  return pt;
}

// Call once per animation frame from any consumer; easing is idempotent-ish
// (multiple callers per frame just ease slightly faster, which is harmless).
export function easePointer() {
  pt.x += (pt.tx - pt.x) * 0.05;
  pt.y += (pt.ty - pt.y) * 0.05;
  return pt;
}

export default pt;
