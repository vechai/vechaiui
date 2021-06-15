import { IconButton } from "../src";
import { Announcement } from "./announcement";

export default {
  title: "IconButton",
  component: IconButton,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

export const outline = () => (
  <div className="flex space-x-2">
    <IconButton>
      <Announcement size={16} />
    </IconButton>

    <IconButton color="primary">
      <Announcement size={16} />
    </IconButton>

    <IconButton color="orange">
      <Announcement size={16} />
    </IconButton>

    <IconButton className="rounded-full">
      <Announcement size={16} />
    </IconButton>

    <IconButton color="primary" className="rounded-full">
      <Announcement size={16} />
    </IconButton>
  </div>
);

export const solid = () => (
  <div className="flex space-x-2">
    <IconButton variant="solid">
      <Announcement size={16} />
    </IconButton>

    <IconButton variant="solid" color="primary">
      <Announcement size={16} />
    </IconButton>

    <IconButton variant="solid" color="orange">
      <Announcement size={16} />
    </IconButton>

    <IconButton variant="solid" className="rounded-full">
      <Announcement size={16} />
    </IconButton>

    <IconButton variant="solid" color="primary" className="rounded-full">
      <Announcement size={16} />
    </IconButton>
  </div>
);

export const light = () => (
  <div className="flex space-x-2">
    <IconButton variant="light">
      <Announcement size={16} />
    </IconButton>

    <IconButton variant="light" color="primary">
      <Announcement size={16} />
    </IconButton>

    <IconButton variant="light" color="orange">
      <Announcement size={16} />
    </IconButton>

    <IconButton variant="light" className="rounded-full">
      <Announcement size={16} />
    </IconButton>

    <IconButton variant="light" color="primary" className="rounded-full">
      <Announcement size={16} />
    </IconButton>
  </div>
);

export const ghost = () => (
  <div className="flex space-x-2">
    <IconButton variant="ghost">
      <Announcement size={16} />
    </IconButton>

    <IconButton variant="ghost" color="primary">
      <Announcement size={16} />
    </IconButton>

    <IconButton variant="ghost" color="orange">
      <Announcement size={16} />
    </IconButton>

    <IconButton variant="ghost" className="rounded-full">
      <Announcement size={16} />
    </IconButton>

    <IconButton variant="ghost" color="primary" className="rounded-full">
      <Announcement size={16} />
    </IconButton>
  </div>
);

export const size = () => (
  <div className="flex space-x-2">
    <IconButton size="xs" variant="solid" color="primary">
      <Announcement size={14} />
    </IconButton>
    <IconButton size="sm" variant="solid" color="primary">
      <Announcement size={16} />
    </IconButton>
    <IconButton size="md" variant="solid" color="primary">
      <Announcement size={16} />
    </IconButton>
    <IconButton size="lg" variant="solid" color="primary">
      <Announcement size={24} />
    </IconButton>
    <IconButton size="xl" variant="solid" color="primary">
      <Announcement size={32} />
    </IconButton>
  </div>
);
