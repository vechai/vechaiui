// TODO: how it works with prefix?
module.exports = ButtonGroup = () => ({
  ".btn-group": {
    "@apply inline-block": {},

    "&.btn-group-attached": {
      "> .btn-icon": {
        boxSizing: "content-box",
      },
      "> *:first-of-type:not(:last-of-type)": {
        borderTopRightRadius: "0px",
        borderBottomRightRadius: "0px",
      },

      "> *:not(:first-of-type):not(:last-of-type)": {
        borderRadius: "0px",
      },

      "> *:not(:first-of-type):last-of-type": {
        borderTopLeftRadius: "0px",
        borderBottomLeftRadius: "0px",
      },

      "> .btn-solid:not(:last-child), > .btn-outline:not(:last-child)": {
        borderRightWidth: "0px",
      },

      "> .btn-solid:hover, > .btn-outline:hover": {
        borderRightWidth: "1px",
      },

      "> *:not(:last-of-type):hover + .btn-solid, > *:not(:last-of-type):hover + .btn-outline": {
        borderLeftWidth: "0px",
      },

      "> .btn-solid:focus, > .btn-outline:focus": {
        zIndex: "1px",
        borderRightWidth: "1px",
      },

      "> *:not(:last-of-type):focus + .btn-solid, > *:not(:last-of-type):focus + .btn-outline": {
        borderLeftWidth: "0px",
      },
    },
  },
});
