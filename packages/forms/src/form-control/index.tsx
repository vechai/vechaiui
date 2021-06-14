import { DefaultProps } from "@vechaiui/theme";
import { cx, __DEV__ } from "@vechaiui/utils";
import * as React from "react";

interface UseFormControlProps {
  /** If `true`, this prop is passed to its children. */
  required?: boolean;
  /** If `true`, this prop is passed to its children. */
  disabled?: boolean;
  /** If `true`, this prop is passed to its children. */
  invalid?: boolean;
  /** If `true`, this prop is passed to its children. */
  readOnly?: boolean;
}

interface IFormControlProps extends DefaultProps, UseFormControlProps {
  children?: React.ReactNode;
}

export interface FormControlProps
  extends React.HTMLAttributes<HTMLDivElement>,
    IFormControlProps {}

interface FormControlContext extends UseFormControlProps {}

export const useFormControl = (
  props: UseFormControlProps
): UseFormControlProps => {
  const context = useFormControlContext();
  if (!context) {
    return props;
  }
  const keys = Object.keys(context);
  return keys.reduce((acc, prop) => {
    /** Giving precedence to `props` over `context` */
    acc[prop] = props[prop];

    if (context) {
      if (props[prop] == null) {
        acc[prop] = context[prop];
      }
    }

    return acc;
  }, {});
};

const FormControlContext = React.createContext<FormControlContext | undefined>(
  undefined
);

const useFormControlContext = () => React.useContext(FormControlContext);

export const FormControl = React.forwardRef<HTMLDivElement, FormControlProps>(
  (props, ref) => {
    const {
      children,
      className,
      required,
      disabled,
      invalid,
      readOnly,
      ...rest
    } = props;
    const classes = cx("form-control", className);
    const context = {
      required,
      disabled,
      invalid,
      readOnly,
    };

    return (
      <FormControlContext.Provider value={context}>
        <div role="group" ref={ref} className={classes} {...rest}>
          {children}
        </div>
      </FormControlContext.Provider>
    );
  }
);

if (__DEV__) {
  FormControl.displayName = "FormGroup";
}
