const plugin = require("tailwindcss/plugin");

const colors = require("./colors");
// components
const Alert = require("./components/alert");
const Avatar = require("./components/avatar");
const Badge = require("./components/badge");
const Breadcrumb = require("./components/breadcrumb");
const ButtonGroup = require("./components/button-group");
const Button = require("./components/button");
const Checkbox = require("./components/checkbox");
const Code = require("./components/code");
const Divider = require("./components/divider");
const Dot = require("./components/dot");
const Forms = require("./components/forms");
const IconButton = require("./components/icon-button");
const Icon = require("./components/icon");
const Kbd = require("./components/kbd");
const Link = require("./components/link");
const Message = require("./components/message");
const Notification = require("./components/notification");
const Radio = require("./components/radio");
const Switch = require("./components/switch");
const Tag = require("./components/tag");

const components = [
  Alert,
  Avatar,
  Badge,
  Breadcrumb,
  ButtonGroup,
  Button,
  Checkbox,
  Code,
  Divider,
  Dot,
  Forms,
  IconButton,
  Icon,
  Kbd,
  Link,
  Message,
  Notification,
  Radio,
  Switch,
  Tag,
];

const defaultColors = ["primary"];

module.exports = plugin.withOptions(
  function(options = { colors: [], reset: false }) {
    return function({
      addComponents,
      addVariant,
      addBase,
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

      addComponents(
        components.map((component) => component(optionColors)),
        {
          respectPrefix: false,
        }
      );

      if (options.reset) {
        addBase({
          html: {
            "@apply text-sm text-base antialiased border-neutral-200 dark:border-neutral-700 bg-base": {},
            textRendering: "optimizeLegibility",
            textSizeAdjust: "none",
          },
        });
      }
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
      variants: {
        extend: {
          boxShadow: ["disabled"],
          cursor: ["disabled"],
          opacity: ["active", "disabled"],
          textColor: ["active", "disabled:hover"],
          textDecoration: ["disabled"],
          backgroundColor: ["disabled"],
          borderColor: ["disabled"],
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
  addVariant("disabled:hover", ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      return `.${e(
        `disabled:hover${separator}${className}`
      )}[aria-disabled=true]`;
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
