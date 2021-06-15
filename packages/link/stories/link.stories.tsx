import { Link } from "../src";

export default {
  title: "Link",
  component: Link,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

export const basic = () => (
  <div className="flex flex-col space-y-2">
    <Link>Vechai UI</Link>
    <p>
      Did you know that <Link href="#">links can live inline with text</Link>
    </p>
    <Link disabled>Vechai UI</Link>
  </div>
);
