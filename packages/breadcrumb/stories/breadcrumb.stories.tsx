import { Breadcrumb } from "../src";

export default {
  title: "Breadcrumb",
  component: Breadcrumb,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

export const basic = () => (
  <div className="flex flex-col space-y-2">
    <Breadcrumb>
      <Breadcrumb.Item>
        <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
      </Breadcrumb.Item>

      <Breadcrumb.Item>
        <Breadcrumb.Link href="#">Docs</Breadcrumb.Link>
      </Breadcrumb.Item>

      <Breadcrumb.Item currentPage>
        <Breadcrumb.Link href="#">Breadcrumb</Breadcrumb.Link>
      </Breadcrumb.Item>
    </Breadcrumb>
  </div>
);

export const separator = () => (
  <div className="flex flex-col space-y-2">
    <Breadcrumb separator="-">
      <Breadcrumb.Item>
        <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
      </Breadcrumb.Item>

      <Breadcrumb.Item>
        <Breadcrumb.Link href="#">About</Breadcrumb.Link>
      </Breadcrumb.Item>

      <Breadcrumb.Item currentPage>
        <Breadcrumb.Link href="#">Contact</Breadcrumb.Link>
      </Breadcrumb.Item>
    </Breadcrumb>

    <Breadcrumb
      separator={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          width="16"
          height="16"
          className="fill-current"
        >
          <path
            fill-rule="evenodd"
            d="M6.22 3.22a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 010-1.06z"
          ></path>
        </svg>
      }
    >
      <Breadcrumb.Item>
        <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
      </Breadcrumb.Item>

      <Breadcrumb.Item>
        <Breadcrumb.Link href="#">About</Breadcrumb.Link>
      </Breadcrumb.Item>

      <Breadcrumb.Item currentPage>
        <Breadcrumb.Link href="#">Contact</Breadcrumb.Link>
      </Breadcrumb.Item>
    </Breadcrumb>
  </div>
);
