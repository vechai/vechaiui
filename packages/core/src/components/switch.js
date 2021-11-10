function switchCheckedSize() {
  return {
    ".form-switch-box-sm": {
      "--tw-translate-x": "var(--vc-density-switch-checked-sm-translateX)",
    },
    ".form-switch-box-md": {
      "--tw-translate-x": "var(--vc-density-switch-checked-md-translateX)",
    },
    ".form-switch-box-lg": {
      "--tw-translate-x": "var(--vc-density-switch-checked-lg-translateX)",
    },
    ".form-switch-box-xl": {
      "--tw-translate-x": "var(--vc-density-switch-checked-xl-translateX)",
    },
  };
}

function switchSize() {
  return {
    // sizing
    "&-sm": {
      width: "var(--vc-density-switch-sm-width)",
      height: "var(--vc-density-switch-sm-height)",
    },

    "&-md": {
      width: "var(--vc-density-switch-md-width)",
      height: "var(--vc-density-switch-md-height)",
    },

    "&-lg": {
      width: "var(--vc-density-switch-lg-width)",
      height: "var(--vc-density-switch-lg-height)",
    },

    "&-xl": {
      width: "var(--vc-density-switch-xl-width)",
      height: "var(--vc-density-switch-xl-height)",
    },
  };
}

function switchBoxSize() {
  return {
    "&-sm": {
      width: "var(--vc-density-switch-box-sm-width)",
      height: "var(--vc-density-switch-box-sm-height)",
    },

    "&-md": {
      width: "var(--vc-density-switch-box-md-width)",
      height: "var(--vc-density-switch-box-md-height)",
    },

    "&-lg": {
      width: "var(--vc-density-switch-box-lg-width)",
      height: "var(--vc-density-switch-box-lg-height)",
    },

    "&-xl": {
      width: "var(--vc-density-switch-box-xl-width)",
      height: "var(--vc-density-switch-box-xl-height)",
    },
  };
}

module.exports = Switch = (colors) => ({
  ".form-switch-label": {
    "@apply inline-block align-middle": {},
  },
  ".form-switch": {
    "@apply rounded-full p-0.5 cursor-base focus:outline-none": {},
    "@apply bg-neutral-200 dark:bg-neutral-700": {},
    "@apply hover:bg-neutral-300 dark:hover:bg-neutral-600": {},
    "input[type=checkbox]:checked + &, input[type=checkbox][aria-checked=mixed] + &": {
      backgroundColor: "currentColor",
      // sizing
      ...switchCheckedSize(),
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
      "@apply cursor-base": {},
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
    ...switchSize(),
  },

  ".form-switch-box": {
    "@apply transition-transform ease-in-out duration-150 transform bg-white rounded-full shadow translate-x-0": {},

    // sizing
    ...switchBoxSize(),
  },
});
