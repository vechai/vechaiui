declare module "@reach/alert" {
  export interface AlertProps {
    children?: React.ReactElement<any>;
    type?: "assertive" | "polite";
    className?: string;
  }

  const Alert: React.SFC<AlertProps>;
  export default Alert;
}
