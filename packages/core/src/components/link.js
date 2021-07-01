module.exports = Link = () => ({
  ".link": {
    "@apply cursor-base no-underline outline-none hover:underline": {},
    "@apply text-primary-500 dark:text-primary-400": {},
    "@apply focus:ring-2 focus:ring-primary-500": {},

    "&-disabled": {
      "@apply disabled:opacity-60 disabled:cursor-not-allowed disabled:no-underline": {},
    },
  },
});
