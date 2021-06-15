import { Button } from "../src";
import { Announcement } from "./announcement";

export default {
  title: "Button",
  component: Button,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

export const outline = () => (
  <div className="flex space-x-2">
    <Button>Button</Button>
    <Button color="primary">Button</Button>
    <Button color="orange">Button</Button>
    <Button leftIcon={<Announcement className="w-5 h-5 mr-1 text-sm" />}>
      Button
    </Button>
    <Button
      color="primary"
      leftIcon={<Announcement className="w-5 h-5 mr-1 text-sm" />}
    >
      Button
    </Button>
    <Button rightIcon={<Announcement className="w-5 h-5 ml-1 text-sm" />}>
      Button
    </Button>
    <Button
      color="primary"
      rightIcon={<Announcement className="w-5 h-5 ml-1 text-sm" />}
    >
      Button
    </Button>
    <Button loading>Button</Button>
    <Button color="primary" loading loadingText="Loading...">
      Button
    </Button>
  </div>
);

export const solid = () => (
  <div className="flex space-x-2">
    <Button variant="solid">Button</Button>
    <Button variant="solid" color="primary">
      Button
    </Button>
    <Button variant="solid" color="orange">
      Button
    </Button>
    <Button
      variant="solid"
      leftIcon={<Announcement className="w-5 h-5 mr-1 text-sm" />}
    >
      Button
    </Button>
    <Button
      variant="solid"
      color="primary"
      leftIcon={<Announcement className="w-5 h-5 mr-1 text-sm" />}
    >
      Button
    </Button>
    <Button
      variant="solid"
      rightIcon={<Announcement className="w-5 h-5 ml-1 text-sm" />}
    >
      Button
    </Button>
    <Button
      variant="solid"
      color="primary"
      rightIcon={<Announcement className="w-5 h-5 ml-1 text-sm" />}
    >
      Button
    </Button>
    <Button variant="solid" loading>
      Button
    </Button>
    <Button variant="solid" color="primary" loading loadingText="Loading...">
      Button
    </Button>
  </div>
);

export const ghost = () => (
  <div className="flex space-x-2">
    <Button variant="ghost">Button</Button>
    <Button variant="ghost" color="primary">
      Button
    </Button>
    <Button variant="ghost" color="orange">
      Button
    </Button>
    <Button
      variant="ghost"
      leftIcon={<Announcement className="w-5 h-5 mr-1 text-sm" />}
    >
      Button
    </Button>
    <Button
      variant="ghost"
      color="primary"
      leftIcon={<Announcement className="w-5 h-5 mr-1 text-sm" />}
    >
      Button
    </Button>
    <Button
      variant="ghost"
      rightIcon={<Announcement className="w-5 h-5 ml-1 text-sm" />}
    >
      Button
    </Button>
    <Button
      variant="ghost"
      color="primary"
      rightIcon={<Announcement className="w-5 h-5 ml-1 text-sm" />}
    >
      Button
    </Button>
    <Button variant="ghost" loading>
      Button
    </Button>
    <Button variant="ghost" color="primary" loading loadingText="Loading...">
      Button
    </Button>
  </div>
);

export const light = () => (
  <div className="flex space-x-2">
    <Button variant="light">Button</Button>
    <Button variant="light" color="primary">
      Button
    </Button>
    <Button variant="light" color="orange">
      Button
    </Button>
    <Button
      variant="light"
      leftIcon={<Announcement className="w-5 h-5 mr-1 text-sm" />}
    >
      Button
    </Button>
    <Button
      variant="light"
      color="primary"
      leftIcon={<Announcement className="w-5 h-5 mr-1 text-sm" />}
    >
      Button
    </Button>
    <Button
      variant="light"
      rightIcon={<Announcement className="w-5 h-5 ml-1 text-sm" />}
    >
      Button
    </Button>
    <Button
      variant="light"
      color="primary"
      rightIcon={<Announcement className="w-5 h-5 ml-1 text-sm" />}
    >
      Button
    </Button>
    <Button variant="light" loading>
      Button
    </Button>
    <Button variant="light" color="primary" loading loadingText="Loading...">
      Button
    </Button>
  </div>
);

export const link = () => (
  <div className="flex space-x-2">
    <Button variant="link" color="primary">
      Button
    </Button>
    <Button variant="link" color="orange">
      Button
    </Button>
    <Button
      variant="link"
      color="primary"
      leftIcon={<Announcement className="w-5 h-5 mr-1 text-sm" />}
    >
      Button
    </Button>
    <Button
      variant="link"
      rightIcon={<Announcement className="w-5 h-5 ml-1 text-sm" />}
    >
      Button
    </Button>
    <Button variant="link" color="primary" loading loadingText="Loading...">
      Button
    </Button>
  </div>
);

export const size = () => (
  <div className="flex space-x-2">
    <Button size="xs" variant="solid" color="primary">
      Button
    </Button>
    <Button size="sm" variant="solid" color="primary">
      Button
    </Button>
    <Button size="md" variant="solid" color="primary">
      Button
    </Button>
    <Button size="lg" variant="solid" color="primary">
      Button
    </Button>
    <Button size="xl" variant="solid" color="primary">
      Button
    </Button>
  </div>
);
