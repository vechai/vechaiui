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
    <Link href="#">I'm Link</Link>
    <p>
      <Link href="#">Lorem Ipsum</Link>  is simply dummy text of the printing and typesetting industry.
    </p>
    <Link disabled>I'm Link</Link>
  </div>
);
