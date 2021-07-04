const plugin = require("tailwindcss/plugin");

const colors = require("./colors");
const withOpacity = require("./with-opacity");
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
  function(options = { colors: [], cssBase: true }) {
    return function({
      addComponents,
      addVariant,
      addBase,
      variants,
      e,
      theme,
      addUtilities,
    }) {
      const optionColors = [...defaultColors, ...(options.colors || [])];

      active({ addVariant, variants, e, theme, addUtilities });
      selected({ addVariant, variants, e, theme, addUtilities });
      disabled({ addVariant, variants, e, theme, addUtilities });

      addComponents(
        components.map((component) => component(optionColors)),
        {
          respectPrefix: false,
        }
      );

      if (options.cssBase) {
        addBase({
          html: {
            "@apply text-foreground antialiased border-neutral-200 dark:border-neutral-700 bg-base": {},
            lineHeight: "1.5",
            textRendering: "optimizeLegibility",
            textSizeAdjust: "100%",
            touchAction: "manipulation",
          },
          body: {
            position: "relative",
            minHeight: "100%",
            fontFeatureSettings: "'kern'",
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
          cursor: {
            base: "var(--vc-cursor)",
          },
          opacity: {
            15: "0.15",
          },
          backgroundColor: {
            base: withOpacity("--vc-colors-bg-base"),
            fill: withOpacity("--vc-colors-bg-fill"),
          },
          textColor: {
            foreground: withOpacity("--vc-colors-text-foreground"),
            muted: withOpacity("--vc-colors-text-muted"),
          },
          borderRadius: {
            base: "var(--vc-rounded)",
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
