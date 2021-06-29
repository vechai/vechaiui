module.exports = Notification = () => ({
  ".notification": {
    "@apply relative flex p-4 text-sm w-96 m-2 max-w-full rounded-base shadow-sm sm:max-w-md": {},
    "@apply text-neutral-900 bg-white border border-neutral-200": {},
    // dark
    "@apply dark:text-neutral-100 dark:bg-neutral-700 dark:border-neutral-600": {},
  },

  ".notification-icon": {
    "@apply flex-shrink-0 w-5 h-5 mr-3": {},

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

  ".notification-content": {
    "@apply flex flex-col items-start flex-1 mr-2 -mt-px text-left": {},

    "&-title": {
      "@apply font-semibold": {},
    },

    "&-description": {
      "@apply text-neutral-500 dark:text-neutral-400": {},
    },
  },

  ".notification-action": {
    "@apply absolute space-x-2": {},
    right: 16,
    top: 16,

    "&-undo": {
      "@apply h-auto p-0 text-sm": {},
    },

    "&-close-button": {
      "@apply cursor-base text-neutral-700 hover:text-neutral-900": {},
      "@apply dark:text-neutral-400 dark:hover:text-neutral-100": {},
    },
  },
});
