module.exports = Switch = (colors) => ({
  ".form-switch-label": {
    "@apply inline-block align-middle": {},
  },
  ".form-switch": {
    "@apply rounded-full p-0.5 cursor-default focus:outline-none": {},
    "@apply bg-neutral-200 dark:bg-neutral-700": {},
    "@apply hover:bg-neutral-300 dark:hover:bg-neutral-600": {},
    "input[type=checkbox]:checked + &, input[type=checkbox][aria-checked=mixed] + &": {
      backgroundColor: "currentColor",
      ".form-switch-box-sm": {
        "@apply translate-x-3.5": {},
      },
      ".form-switch-box-md": {
        "@apply translate-x-4": {},
      },
      ".form-switch-box-lg": {
        "@apply translate-x-6": {},
      },
      ".form-switch-box-xl": {
        "@apply translate-x-7": {},
      },
    },
    // "input[type=checkbox]:focus + &": {
    //   "@apply focus:ring-2 focus:ring-neutral-400": {},
    // },
    // "input[type=checkbox]:checked:focus + &, input[type=checkbox][aria-checked=mixed]:focus + &": {
    //   "@apply ring-primary-400": {},
    // },
    // ".dark input[type=checkbox]:checked:focus + &,.dark input[type=checkbox][aria-checked=mixed]:focus + &": {
    //   "@apply ring-primary-800": {},
    // },
    "input[type=checkbox]:checked:hover:not(:disabled) + &, input[type=checkbox][aria-checked=mixed]:hover:not(:disabled) + &": {
      "@apply cursor-default": {},
    },

    // colors
    ...colors.reduce(
      (styles, color) => ({
        ...styles,
        [`&[data-color="${color}"]`]: {
          [`@apply text-${color}-500`]: {},
          [`@apply hover:text-${color}-600 dark:hover:text-${color}-400`]: {},
        },
      }),
      {}
    ),

    // disabled
    "&-disabled": {
      "@apply opacity-60 cursor-not-allowed": {},
    },

    // sizing
    "&-sm": {
      "@apply w-7 h-3.5": {},
    },

    "&-md": {
      "@apply w-8 h-4": {},
    },

    "&-lg": {
      "@apply w-12 h-6": {},
    },

    "&-xl": {
      "@apply w-14 h-7": {},
    },
  },

  ".form-switch-box": {
    "@apply transition-transform ease-in-out duration-150 transform bg-white rounded-full shadow translate-x-0": {},

    // sizing
    "&-sm": {
      "@apply w-2.5 h-2.5": {},
    },

    "&-md": {
      "@apply w-3 h-3": {},
    },

    "&-lg": {
      "@apply w-5 h-5": {},
    },

    "&-xl": {
      "@apply w-6 h-6": {},
    },
  },
});
