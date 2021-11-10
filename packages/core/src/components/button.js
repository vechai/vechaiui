function buttonSolid(colors) {
  return {
    "&-solid": {
      "@apply shadow-sm": {},
      "@apply border border-neutral-200": {},
      "@apply text-neutral-900 bg-neutral-100": {},
      /* hover */
      "@apply hover:border-neutral-300 hover:bg-neutral-200": {},
      /* focus */
      "@apply focus:z-base": {},
      "@apply focus:border-primary-500": {},
      "@apply focus:ring-1 focus:ring-primary-500": {},
      /* active */
      "@apply active:bg-neutral-300": {},
      /* dark mode */
      "@apply dark:border-neutral-600": {},
      "@apply dark:text-neutral-100 dark:bg-neutral-700": {},
      /* dark hover */
      "@apply dark:hover:border-neutral-300 dark:hover:bg-neutral-600": {},
      /* dark focus */
      "@apply dark:focus:border-primary-500": {},
      /* dark active */
      "@apply dark:active:bg-neutral-900 dark:active:border-neutral-600": {},

      ...colors.reduce(
        (styles, color) => ({
          ...styles,
          [`&[data-color="${color}"]`]: {
            [`@apply border-${color}-600`]: {},
            [`@apply text-white bg-${color}-500`]: {},
            /* hover */
            [`@apply hover:bg-${color}-600`]: {},
            /* focus */
            [`@apply focus:bg-${color}-700`]: {},
            [`@apply focus:border-${color}-500`]: {},
            [`@apply focus:ring-${color}-500`]: {},
            /* active */
            [`@apply active:bg-${color}-600`]: {},
            /* dark mode */
            [`@apply dark:border-${color}-500`]: {},
            [`@apply dark:bg-${color}-600`]: {},
            /* dark hover */
            [`@apply dark:hover:bg-${color}-700`]: {},
            /* dark focus */
            [`@apply dark:focus:border-${color}-600`]: {},
            [`@apply dark:focus:ring-${color}-600`]: {},
            /* dark active */
            [`@apply dark:active:bg-${color}-800 dark:active:border-${color}-600`]: {},
          },
        }),
        {}
      ),
    },
  };
}

function buttonOutline(colors) {
  return {
    "&-outline": {
      "@apply shadow-sm": {},
      "@apply border border-neutral-200": {},
      "@apply text-neutral-900 bg-transparent": {},
      /* hover */
      "@apply hover:bg-neutral-100 hover:border-neutral-300": {},
      /* focus */
      "@apply focus:z-base": {},
      "@apply focus:border-primary-500": {},
      "@apply focus:ring-1 focus:ring-primary-500": {},
      /* active */
      "@apply active:bg-neutral-200": {},
      /* dark mode */
      "@apply dark:border-neutral-600": {},
      "@apply dark:text-neutral-100 dark:bg-transparent": {},
      /* dark hover */
      "@apply dark:hover:border-neutral-300 dark:hover:bg-neutral-700": {},
      /* dark focus */
      "@apply dark:focus:border-primary-500": {},
      /* dark active */
      "@apply dark:active:bg-neutral-600 dark:active:border-neutral-600": {},

      ...colors.reduce(
        (styles, color) => ({
          ...styles,
          [`&[data-color="${color}"]`]: {
            [`@apply border-current`]: {},
            [`@apply text-${color}-600 bg-transparent`]: {},
            /* hover */
            [`@apply hover:bg-${color}-50`]: {},
            /* focus */
            [`@apply focus:border-${color}-500`]: {},
            [`@apply focus:ring-${color}-500`]: {},
            /* active */
            [`@apply active:bg-${color}-100`]: {},
            /* dark mode */
            [`@apply dark:border-${color}-200`]: {},
            [`@apply dark:text-${color}-200 dark:bg-transparent`]: {},
            [`@apply dark:border-${color}-300`]: {},
            /* dark hover */
            [`@apply dark:hover:bg-${color}-200`]: {},
            [`@apply dark:hover:bg-opacity-15`]: {},
            /* dark focus */
            [`@apply dark:focus:border-${color}-500`]: {},
            [`@apply dark:focus:ring-${color}-500`]: {},
            /* dark active */
            [`@apply dark:active:bg-${color}-200`]: {},
            [`@apply dark:active:bg-opacity-25`]: {},
          },
        }),
        {}
      ),
    },
  };
}

function buttonGhost(colors) {
  return {
    "&-ghost": {
      "@apply text-neutral-900 bg-transparent": {},
      "@apply hover:bg-neutral-100": {},
      /* focus */
      "@apply focus:z-base": {},
      "@apply focus:ring-2 focus:ring-primary-500": {},
      /* active */
      "@apply active:bg-neutral-200": {},
      /* dark mode */
      "@apply dark:text-neutral-100 dark:bg-transparent": {},
      /* dark hover */
      "@apply dark:hover:border-neutral-300 dark:hover:bg-neutral-700": {},
      /* dark active */
      "@apply dark:active:bg-neutral-600 dark:active:border-neutral-400": {},

      ...colors.reduce(
        (styles, color) => ({
          ...styles,
          [`&[data-color="${color}"]`]: {
            [`@apply text-${color}-600`]: {},
            [`@apply hover:bg-${color}-50`]: {},
            /* focus */
            [`@apply focus:ring-${color}-500`]: {},
            [`@apply active:bg-${color}-100`]: {},
            // dark colors
            [`@apply dark:text-${color}-200 dark:bg-transparent`]: {},
            [`@apply dark:border-${color}-300 dark:hover:bg-${color}-200`]: {},
            [`@apply dark:hover:bg-opacity-15`]: {},
            [`@apply dark:active:bg-${color}-200`]: {},
            [`@apply dark:active:bg-opacity-25`]: {},
          },
        }),
        {}
      ),
    },
  };
}

function buttonLight(colors) {
  return {
    "&-light": {
      "@apply shadow-sm": {},
      "@apply border border-transparent": {},
      "@apply text-neutral-900 bg-neutral-100": {},
      /* hover */
      "@apply hover:bg-neutral-200": {},
      /* focus */
      "@apply focus:z-base": {},
      "@apply focus:border-primary-500": {},
      "@apply focus:ring-1 focus:ring-primary-500": {},
      /* active */
      "@apply active:bg-neutral-300": {},
      /* dark mode */
      "@apply dark:border-transparent": {},
      "@apply dark:text-neutral-100 dark:bg-neutral-700": {},
      /* dark hover */
      "@apply dark:hover:bg-neutral-600": {},
      /* dark focus */
      "@apply dark:focus:border-primary-500": {},
      /* dark active */
      "@apply dark:active:bg-neutral-600": {},

      ...colors.reduce(
        (styles, color) => ({
          ...styles,
          [`&[data-color="${color}"]`]: {
            [`@apply text-${color}-600 bg-${color}-50`]: {},
            /* hover */
            [`@apply hover:bg-${color}-100`]: {},
            /* focus */
            [`@apply focus:border-${color}-500`]: {},
            [`@apply focus:ring-${color}-500`]: {},
            /* active */
            [`@apply active:bg-${color}-200`]: {},
            /* dark mode */
            [`@apply dark:text-${color}-300 dark:bg-${color}-500`]: {},
            [`@apply dark:bg-opacity-15`]: {},
            /* dark hover */
            [`@apply dark:hover:bg-${color}-500`]: {},
            [`@apply dark:hover:bg-opacity-25`]: {},
            /* dark focus */
            [`@apply dark:focus:border-${color}-500`]: {},
            [`@apply dark:focus:ring-${color}-500`]: {},
            /* dark active */
            [`@apply dark:active:bg-${color}-500`]: {},
            [`@apply dark:active:bg-opacity-30`]: {},
          },
        }),
        {}
      ),
    },
  };
}

function buttonLink(colors) {
  return {
    "&-link": {
      "@apply h-auto p-0 leading-normal text-neutral-600 hover:underline active:text-neutral-700": {},
      "@apply focus:z-base focus:ring-2 focus:ring-primary-500": {},
      // dark colors
      "@apply dark:text-neutral-200": {},
      "@apply dark:active:text-neutral-500": {},

      ...colors.reduce(
        (styles, color) => ({
          ...styles,
          [`&[data-color="${color}"]`]: {
            [`@apply text-${color}-600 active:text-${color}-700`]: {},
            [`@apply focus:ring-${color}-500`]: {},
            // dark colors
            [`@apply dark:text-${color}-200`]: {},
            [`@apply dark:active:text-${color}-500`]: {},
          },
        }),
        {}
      ),
    },
  };
}

function buttonSize() {
  return {
    "&-xs": {
      paddingRight: "var(--vc-density-button-xs-px)",
      paddingLeft: "var(--vc-density-button-xs-px)",
      fontSize: "var(--vc-density-button-xs-fontSize)",
      lineHeight: "var(--vc-density-button-xs-lineHeight)",
      height: "var(--vc-density-button-xs-height)",
      minWidth: "var(--vc-density-button-xs-minWidth)",
    },

    "&-sm": {
      paddingRight: "var(--vc-density-button-sm-px)",
      paddingLeft: "var(--vc-density-button-sm-px)",
      fontSize: "var(--vc-density-button-sm-fontSize)",
      lineHeight: "var(--vc-density-button-sm-lineHeight)",
      height: "var(--vc-density-button-sm-height)",
      minWidth: "var(--vc-density-button-sm-minWidth)",
    },

    "&-md": {
      paddingRight: "var(--vc-density-button-md-px)",
      paddingLeft: "var(--vc-density-button-md-px)",
      px: "var(--vc-density-button-md-px)",
      fontSize: "var(--vc-density-button-md-fontSize)",
      lineHeight: "var(--vc-density-button-md-lineHeight)",
      height: "var(--vc-density-button-md-height)",
      minWidth: "var(--vc-density-button-md-minWidth)",
    },

    "&-lg": {
      paddingRight: "var(--vc-density-button-lg-px)",
      paddingLeft: "var(--vc-density-button-lg-px)",
      px: "var(--vc-density-button-lg-px)",
      fontSize: "var(--vc-density-button-lg-fontSize)",
      lineHeight: "var(--vc-density-button-lg-lineHeight)",
      height: "var(--vc-density-button-lg-height)",
      minWidth: "var(--vc-density-button-lg-minWidth)",
    },

    "&-xl": {
      paddingRight: "var(--vc-density-button-xl-px)",
      paddingLeft: "var(--vc-density-button-xl-px)",
      px: "var(--vc-density-button-xl-px)",
      fontSize: "var(--vc-density-button-xl-fontSize)",
      lineHeight: "var(--vc-density-button-xl-lineHeight)",
      height: "var(--vc-density-button-xl-height)",
      minWidth: "var(--vc-density-button-xl-minWidth)",
    },
  };
}

module.exports = Button = (colors) => ({
  ".btn": {
    "@apply relative rounded-base": {},
    "@apply m-0": {},
    "@apply inline-flex items-center justify-center flex-shrink-0 align-middle": {},
    "@apply font-medium leading-tight": {},
    transitionProperty:
      "background-color, border-color, color, fill, stroke, box-shadow",
    "@apply	duration-75 ease-out": {},
    "@apply outline-none appearance-none cursor-base select-none whitespace-nowrap": {},
    "@apply focus:outline-none": {},

    // sizing
    ...buttonSize(),

    "&-disabled": {
      "@apply disabled:shadow-none disabled:cursor-not-allowed disabled:opacity-60": {},
    },

    // variants
    ...buttonSolid(colors),
    ...buttonOutline(colors),
    ...buttonGhost(colors),
    ...buttonLight(colors),
    ...buttonLink(colors),
  },
});
