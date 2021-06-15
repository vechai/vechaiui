const plugin = require("tailwindcss/plugin");

const colors = require("./colors");

const defaultColors = ["primary"];

module.exports = plugin.withOptions(
  function(options = { colors: [] }) {
    return function({
      addComponents,
      addVariant,
      variants,
      e,
      theme,
      addUtilities,
    }) {
      const optionColors = [...defaultColors, ...options.colors];

      active({ addVariant, variants, e, theme, addUtilities });
      selected({ addVariant, variants, e, theme, addUtilities });
      disabled({ addVariant, variants, e, theme, addUtilities });
      colorize({ addVariant, variants, e, theme, addUtilities });
      
      addComponents([
        require("./components/button.js")(optionColors),
        require("./components/button-group.js")(),
        require("./components/icon-button.js")(),
        require("./components/forms.js")(optionColors),
        require("./components/checkbox.js")(optionColors),
        require("./components/radio.js")(optionColors),
        require("./components/switch.js")(optionColors),
      ]);
    };
  },
  function() {
    return {
      theme: {
        extend: {
          colors,
          opacity: {
            15: "0.15",
          },
          backgroundColor: {
            base: "rgb(var(--colors-bg-base))",
            fill: "rgb(var(--colors-bg-fill))",
          },
          textColor: {
            base: "rgb(var(--colors-text-base))",
            muted: "rgb(var(--colors-text-muted))",
          },
          zIndex: {
            hide: -1,
            none: 0,
            base: 1,
            docked: 10,
            dropdown: 1000,
            sticky: 1100,
            banner: 1200,
            overlay: 1300,
            modal: 1400,
            popover: 1500,
            skipLink: 1600,
            toast: 1700,
            tooltip: 1800,
          },
        },
      },
    };
  }
);

function active({ addVariant, e }) {
  addVariant("active", ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      return `.${e(`active${separator}${className}`)}:active, .${e(
        `active${separator}${className}`
      )}[data-active=true]`;
    });
  });
}

function selected({ addVariant, e }) {
  addVariant("selected", ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      return `.${e(`selected${separator}${className}`)}[aria-selected=true]`;
    });
  });
}

function disabled({ addVariant, e }) {
  addVariant("disabled", ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      return `.${e(`disabled${separator}${className}`)}[aria-disabled=true]`;
    });
  });
}

function colorize({ addUtilities, theme, variants }) {
  const fn = (prefix, key, prop, opacity) => {
    const t = theme(prop);

    addUtilities(
      Object.keys(t).reduce(
        (_o, _k) => ({
          ..._o,
          ...Object.keys(t[_k])
            .filter((x) => /^rgb\(.*\)$/i.test(t[_k][x]))
            .reduce(
              (o, k) => ({
                ...o,
                [`.${prefix}-${_k}-${k}`]: {
                  [opacity]: "1",
                  [key]: t[_k][k].replace(
                    /^rgb\((.*)\)$/i,
                    `rgba($1, var(${opacity}))`
                  ),
                },
              }),
              {}
            ),
        }),
        {}
      ),
      {
        respectImportant: false,
        variants: variants(prop),
      }
    );
  };

  // add more utils here...
  fn("bg", "background-color", "backgroundColor", "--tw-bg-opacity");
  fn("text", "color", "textColor", "--tw-text-opacity");
  fn("border", "border-color", "borderColor", "--tw-border-opacity");
  fn("ring", "--tw-ring-color", "ringColor", "--tw-ring-opacity");
}
