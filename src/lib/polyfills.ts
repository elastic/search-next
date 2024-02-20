// @elastic/eui checks "x instanceof HTMLElement"
// which is not available in Next.js SSR environment
if (!Object.hasOwn(global, 'HTMLElement')) {
  // @ts-expect-error HTMLElement is not defined in SSR environment
  global.HTMLElement = class HTMLElement { };
}
// @elastic/eui checks "x instanceof HTMLElement"
// which is not available in Next.js SSR environment
if (!Object.hasOwn(global, 'HTMLElement')) {
  // @ts-expect-error HTMLElement is not defined in SSR environment
  global.HTMLElement = class HTMLElement { };
}
