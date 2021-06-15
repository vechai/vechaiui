module.exports = Link = () => ({
  ".link": {
    "@apply cursor-default no-underline outline-none hover:underline": {},
    "@apply text-primary-500 dark:text-primary-400": {},

    "&-disabled": {
      "@apply disabled:opacity-60 disabled:cursor-not-allowed disabled:no-underline": {},
    },
  },
});
