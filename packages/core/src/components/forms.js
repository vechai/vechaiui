function fieldOutline(colors) {
  return {
    "&-outline": {
      "@apply border shadow-sm border-neutral-300": {},
      "@apply text-neutral-900 bg-white": {},
      "@apply hover:border-neutral-300": {},
      "&[aria-invalid=true]": {
        "--tw-border-opacity": "1",
        borderColor: "rgba(220, 38, 38, var(--tw-border-opacity))",
        "--tw-ring-offset-shadow":
          "var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)",
        "--tw-ring-shadow":
          "var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color)",
        boxShadow:
          "var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)",
        "--tw-ring-opacity": "1",
        "--tw-ring-color": "rgba(220, 38, 38, var(--tw-ring-opacity))",
      },
      "focus:ring-1": {},
      /* dark mode */
      "@apply dark:border-neutral-700": {},
      "@apply dark:text-neutral-100 dark:bg-base": {},
      "@apply dark:hover:border-neutral-600": {},
      ".dark &[aria-invalid=true]": {
        "--tw-border-opacity": "1",
        borderColor: "rgba(248, 113, 113, var(--tw-border-opacity))",
        "--tw-ring-opacity": "1",
        "--tw-ring-color": "rgba(248, 113, 113, var(--tw-ring-opacity))",
      },
      "@media (prefers-color-scheme: dark)": {
        "&[aria-invalid=true]": {
          "--tw-border-opacity": "1",
          borderColor: "rgba(248, 113, 113, var(--tw-border-opacity))",
          "--tw-ring-opacity": "1",
          "--tw-ring-color": "rgba(248, 113, 113, var(--tw-ring-opacity))",
        },
      },

      ...colors.reduce(
        (styles, color) => ({
          ...styles,
          [`&[data-color="${color}"]`]: {
            [`@apply focus:border-${color}-600 focus:ring-${color}-600`]: {},
            [`@apply dark:focus:border-${color}-300 dark:focus:ring-${color}-300`]: {},
          },
        }),
        {}
      ),
    },
  };
}

function fieldSolid(colors) {
  return {
    "&-solid": {
      "@apply border border-neutral-300": {},
      "@apply text-neutral-900 bg-gray-100": {},
      "@apply hover:bg-gray-200 hover:bg-opacity-80": {},
      "@apply focus:bg-white": {},
      "&[aria-invalid=true]": {
        "--tw-border-opacity": "1",
        borderColor: "rgba(220, 38, 38, var(--tw-border-opacity))",
        "--tw-ring-offset-shadow":
          "var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)",
        "--tw-ring-shadow":
          "var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color)",
        boxShadow:
          "var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)",
        "--tw-ring-opacity": "1",
        "--tw-ring-color": "rgba(220, 38, 38, var(--tw-ring-opacity))",
      },
      "focus:ring-1": {},
      /* dark mode */
      "@apply dark:border-neutral-600": {},
      "@apply dark:text-white dark:bg-whiteAlpha-200": {},
      "@apply dark:hover:bg-whiteAlpha-100": {},
      "@apply dark:focus:bg-neutral-900": {},
      ".dark &[aria-invalid=true]": {
        "--tw-border-opacity": "1",
        borderColor: "rgba(248, 113, 113, var(--tw-border-opacity))",
        "--tw-ring-opacity": "1",
        "--tw-ring-color": "rgba(248, 113, 113, var(--tw-ring-opacity))",
      },
      "@media (prefers-color-scheme: dark)": {
        "&[aria-invalid=true]": {
          "--tw-border-opacity": "1",
          borderColor: "rgba(248, 113, 113, var(--tw-border-opacity))",
          "--tw-ring-opacity": "1",
          "--tw-ring-color": "rgba(248, 113, 113, var(--tw-ring-opacity))",
        },
      },

      ...colors.reduce(
        (styles, color) => ({
          ...styles,
          [`&[data-color="${color}"]`]: {
            [`@apply focus:border-${color}-600 focus:ring-${color}-600`]: {},
            [`@apply dark:focus:border-${color}-300 dark:focus:ring-${color}-300`]: {},
          },
        }),
        {}
      ),
    },
  };
}

function formControl() {
  return {
    ".form-control": {
      "@apply w-full relative": {},
    },
    ".form-helper-text": {
      "@apply mt-1.5 leading-none text-sm text-neutral-500 dark:text-whiteAlpha-600": {},
    },
    ".form-error-message": {
      "@apply mt-1.5 leading-none flex items-center text-sm": {},
      "--tw-text-opacity": "1",
      color: "rgba(239, 68, 68, var(--tw-text-opacity))",
      ".dark &": {
        "--tw-text-opacity": "1",
        color: "rgba(252, 165, 165, var(--tw-text-opacity))",
      },
    },
    ".form-label": {
      "@apply text-sm font-medium text-left align-middle block mb-1.5": {},

      "&-disabled": {
        "@apply opacity-60": {},
      },
    },
    ".form-required-indicator": {
      "@apply ml-1 text-sm": {},
      "--tw-text-opacity": "1",
      color: "rgba(239, 68, 68, var(--tw-text-opacity))",
      ".dark &": {
        "--tw-text-opacity": "1",
        color: "rgba(252, 165, 165, var(--tw-text-opacity))",
      },
    },
  };
}

function elementSize() {
  return {
    "&-xs": {
      fontSize: "var(--vc-density-form-element-xs-fontSize)",
      lineHeight: "var(--vc-density-form-element-xs-lineHeight)",
      height: "var(--vc-density-form-element-xs-height)",
      width: "var(--vc-density-form-element-xs-width)",
    },

    "&-sm": {
      fontSize: "var(--vc-density-form-element-sm-fontSize)",
      lineHeight: "var(--vc-density-form-element-sm-lineHeight)",
      height: "var(--vc-density-form-element-sm-height)",
      width: "var(--vc-density-form-element-sm-width)",
    },

    "&-md": {
      fontSize: "var(--vc-density-form-element-md-fontSize)",
      lineHeight: "var(--vc-density-form-element-md-lineHeight)",
      height: "var(--vc-density-form-element-md-height)",
      width: "var(--vc-density-form-element-md-width)",
    },

    "&-lg": {
      fontSize: "var(--vc-density-form-element-lg-fontSize)",
      lineHeight: "var(--vc-density-form-element-lg-lineHeight)",
      height: "var(--vc-density-form-element-lg-height)",
      width: "var(--vc-density-form-element-lg-width)",
    },

    "&-xl": {
      fontSize: "var(--vc-density-form-element-xl-fontSize)",
      lineHeight: "var(--vc-density-form-element-xl-lineHeight)",
      height: "var(--vc-density-form-element-xl-height)",
      width: "var(--vc-density-form-element-xl-width)",
    },
  };
}

function formInputGroup() {
  return {
    ".form-input-group": {
      "@apply flex relative": {},
    },

    ".form-input-element": {
      "@apply flex items-center justify-center absolute z-base top-0": {},

      // sizing
      ...elementSize(),
    },

    ".form-input-addon": {
      "@apply flex items-center w-auto rounded-base shadow-sm whitespace-nowrap": {},
      "@apply border border-neutral-300": {},
      "@apply text-neutral-600 bg-neutral-50": {},
      // dark colors
      "@apply dark:border-neutral-700": {},
      "@apply dark:text-neutral-100 dark:bg-whiteAlpha-300": {},

      "&-xs": {
        "@apply px-2 text-xs": {},
      },

      "&-sm": {
        "@apply px-3 text-xs": {},
      },

      "&-md": {
        "@apply px-4 text-sm": {},
      },

      "&-lg": {
        "@apply px-4 text-base": {},
      },

      "&-xl": {
        "@apply px-6 text-lg": {},
      },

      "&-left": {
        "@apply -mr-1 rounded-r-none": {},
      },

      "&-right": {
        "@apply -ml-1 rounded-l-none": {},
      },
    },
  };
}

function fieldSize() {
  return {
    "&-xs": {
      paddingLeft: "var(--vc-density-form-field-xs-px)",
      paddingRight: "var(--vc-density-form-field-xs-px)",
      paddingTop: "var(--vc-density-form-field-xs-py)",
      paddingBottom: "var(--vc-density-form-field-xs-py)",
      fontSize: "var(--vc-density-form-field-xs-fontSize)",
      lineHeight: "var(--vc-density-form-field-xs-lineHeight)",
      height: "var(--vc-density-form-field-xs-height)",
    },
    "&-sm": {
      paddingLeft: "var(--vc-density-form-field-sm-px)",
      paddingRight: "var(--vc-density-form-field-sm-px)",
      paddingTop: "var(--vc-density-form-field-sm-py)",
      paddingBottom: "var(--vc-density-form-field-sm-py)",
      fontSize: "var(--vc-density-form-field-sm-fontSize)",
      lineHeight: "var(--vc-density-form-field-sm-lineHeight)",
      height: "var(--vc-density-form-field-sm-height)",
    },
    "&-md": {
      paddingLeft: "var(--vc-density-form-field-md-px)",
      paddingRight: "var(--vc-density-form-field-md-px)",
      paddingTop: "var(--vc-density-form-field-md-py)",
      paddingBottom: "var(--vc-density-form-field-md-py)",
      fontSize: "var(--vc-density-form-field-md-fontSize)",
      lineHeight: "var(--vc-density-form-field-md-lineHeight)",
      height: "var(--vc-density-form-field-md-height)",
    },
    "&-lg": {
      paddingLeft: "var(--vc-density-form-field-lg-px)",
      paddingRight: "var(--vc-density-form-field-lg-px)",
      paddingTop: "var(--vc-density-form-field-lg-py)",
      paddingBottom: "var(--vc-density-form-field-lg-py)",
      fontSize: "var(--vc-density-form-field-lg-fontSize)",
      lineHeight: "var(--vc-density-form-field-lg-lineHeight)",
      height: "var(--vc-density-form-field-lg-height)",
    },
    "&-xl": {
      paddingLeft: "var(--vc-density-form-field-xl-px)",
      paddingRight: "var(--vc-density-form-field-xl-px)",
      paddingTop: "var(--vc-density-form-field-xl-py)",
      paddingBottom: "var(--vc-density-form-field-xl-py)",
      fontSize: "var(--vc-density-form-field-xl-fontSize)",
      lineHeight: "var(--vc-density-form-field-xl-lineHeight)",
      height: "var(--vc-density-form-field-xl-height)",
    },
  };
}

module.exports = Forms = (colors) => ({
  ".form-field": {
    "@apply relative rounded-base w-full min-w-0 inline-flex items-center appearance-none focus:outline-none": {},
    "@apply transition-colors	duration-75 ease-out": {},

    // sizing
    ...fieldSize(),

    "&-disabled": {
      "@apply disabled:shadow-none disabled:cursor-not-allowed disabled:opacity-60": {},
      "@apply disabled:border-neutral-200 disabled:bg-neutral-200": {},
      "@apply dark:disabled:border-transparent dark:disabled:bg-whiteAlpha-200": {},
    },

    // variants
    ...fieldOutline(colors),
    ...fieldSolid(colors),
  },

  ".form-textarea": {
    "@apply py-2 leading-tight": {},
    minHeight: "5rem",
  },

  ".form-select": {
    "@apply pr-10": {},
  },

  ...formInputGroup(),
  ...formControl(),
});
