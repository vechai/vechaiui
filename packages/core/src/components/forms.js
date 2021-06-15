function fieldOutline(colors) {
  return {
    "&-outline": {
      "@apply border shadow-sm border-neutral-200": {},
      "@apply text-neutral-900 bg-white": {},
      "@apply hover:border-neutral-300": {},
      "&[aria-invalid=true]": {
        // "@apply border-red-600 ring-1 ring-red-600": {},
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
        // "@apply dark:border-red-400 dark:ring-red-400": {},
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
            [`@apply dark:focus:border-${color}-400 dark:focus:ring-${color}-400`]: {},
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
      "@apply mt-2 leading-none text-xs text-neutral-500 dark:text-whiteAlpha-600": {},
    },
    ".form-label": {
      "@apply text-sm font-medium text-left align-middle block mb-2": {},

      "&-disabled": {
        "@apply opacity-40": {},
      },
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

      "&-xs": {
        "@apply text-xs h-6 w-6": {},
      },

      "&-sm": {
        "@apply text-xs h-7 w-7": {},
      },

      "&-md": {
        "@apply text-sm h-8 w-8": {},
      },

      "&-lg": {
        "@apply text-base h-10 w-10": {},
      },

      "&-xl": {
        "@apply text-lg h-12 w-12": {},
      },
    },

    ".form-input-addon": {
      "@apply flex items-center w-auto rounded-md shadow-sm whitespace-nowrap": {},
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

module.exports = Forms = (colors) => ({
  ".form-field": {
    "@apply relative inline-flex items-center appearance-none focus:outline-none": {},

    "&-xs": {
      "@apply h-6 px-2 py-0 text-xs rounded-md": {},
    },

    "&-sm": {
      "@apply px-3 py-0 text-xs rounded-md h-7": {},
    },

    "&-md": {
      "@apply h-8 px-3 py-0 text-sm rounded-md": {},
    },

    "&-lg": {
      "@apply h-10 px-4 py-0 text-base rounded-md": {},
    },

    "&-xl": {
      "@apply h-12 px-4 py-0 text-lg rounded-md": {},
    },

    "&-disabled": {
      "@apply disabled:shadow-none disabled:cursor-not-allowed disabled:opacity-60": {},
    },

    // variants
    ...fieldOutline(colors),
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
