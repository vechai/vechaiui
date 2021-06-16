module.exports = Avatar = () => ({
  ".avatar": {
    "@apply relative inline-flex items-center justify-center flex-shrink-0 align-top rounded-full": {},
    "@apply bg-neutral-300 text-neutral-800": {},
    // dark colors
    "@apply dark:bg-neutral-600 dark:text-neutral-100": {},

    "&-2xs": {
      "@apply w-4 h-4": {},
    },

    "&-xs": {
      "@apply w-5 h-5": {},
    },

    "&-sm": {
      "@apply w-6 h-6": {},
    },

    "&-md": {
      "@apply w-7 h-7": {},
    },

    "&-lg": {
      "@apply w-8 h-8": {},
    },

    "&-xl": {
      "@apply w-10 h-10": {},
    },

    "&-2xl": {
      "@apply w-12 h-12": {},
    },

    "&-3xl": {
      "@apply w-16 h-16": {},
    },
  },

  ".avatar-bordered": {
    "@apply border-2 border-white": {},
    "@apply dark:border-neutral-800": {},
  },

  ".avatar-name": {
    "@apply font-medium text-center uppercase": {},

    "&-2xs": {
      "@apply w-4 h-4": {},
    },

    "&-xs": {
      "@apply w-5 h-5": {},
    },

    "&-sm": {
      "@apply w-6 h-6": {},
    },

    "&-md": {
      "@apply w-7 h-7": {},
    },

    "&-lg": {
      "@apply w-8 h-8": {},
    },

    "&-xl": {
      "@apply w-10 h-10": {},
    },

    "&-2xl": {
      "@apply w-12 h-12": {},
    },

    "&-3xl": {
      "@apply w-16 h-16": {},
    },
  },

  ".avatar-group": {
    "@apply flex items-center justify-end flex-row-reverse": {},
  },
});
