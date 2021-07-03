module.exports = Message = () => ({
  ".message": {
    "@apply flex items-center px-3 py-1.5 m-2 text-sm rounded-base shadow-sm w-max break-words": {},
    "@apply text-neutral-900 bg-white border border-neutral-200": {},
    // dark
    "@apply dark:text-neutral-100 dark:bg-neutral-700 dark:border-neutral-600": {},
  },

  ".message-icon": {
    "@apply mr-2": {},

    "&-info": {
      "--tw-text-opacity": "1",
      color: "rgba(59, 130, 246, var(--tw-text-opacity))",
    },
    "&-success": {
      "--tw-text-opacity": "1",
      color: "rgba(34, 197, 94, var(--tw-text-opacity))",
    },
    "&-error": {
      "--tw-text-opacity": "1",
      color: "rgba(239, 68, 68, var(--tw-text-opacity))",
    },
    "&-warning": {
      "--tw-text-opacity": "1",
      color: "rgba(234, 179, 8, var(--tw-text-opacity))",
    },
  },
});
