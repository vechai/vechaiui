import { Tag } from "../src";

export default {
  title: "Tag",
  component: Tag,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

export const basic = () => {
  return (
    <div className="flex space-x-2">
      <Tag>Default</Tag>
      <Tag>
        <Tag.Label>Default</Tag.Label>
        <Tag.CloseButton />
      </Tag>

      <Tag color="primary">
        <Tag.Label>Default</Tag.Label>
        <Tag.CloseButton className="text-primary-600 dark:text-primary-400" />
      </Tag>
      <Tag color="orange">
        <Tag.Label>Default</Tag.Label>
        <Tag.CloseButton className="text-orange-600 dark:text-orange-400" />
      </Tag>
    </div>
  );
};

export const solid = () => {
  return (
    <div className="flex space-x-2">
      <Tag variant="solid">Default</Tag>
      <Tag variant="solid">
        <Tag.Label>Default</Tag.Label>
        <Tag.CloseButton />
      </Tag>

      <Tag color="primary" variant="solid">
        <Tag.Label>Default</Tag.Label>
        <Tag.CloseButton className="text-white dark:text-primary-400" />
      </Tag>
      <Tag color="orange" variant="solid">
        <Tag.Label>Default</Tag.Label>
        <Tag.CloseButton className="text-white dark:text-orange-400" />
      </Tag>
    </div>
  );
};

export const light = () => {
  return (
    <div className="flex space-x-2">
      <Tag variant="light">Default</Tag>
      <Tag variant="light">
        <Tag.Label>Default</Tag.Label>
        <Tag.CloseButton />
      </Tag>

      <Tag color="primary" variant="light">
        <Tag.Label>Default</Tag.Label>
        <Tag.CloseButton className="text-primary-600 dark:text-primary-400" />
      </Tag>
      <Tag color="orange" variant="light">
        <Tag.Label>Default</Tag.Label>
        <Tag.CloseButton className="text-orange-600 dark:text-orange-400" />
      </Tag>
    </div>
  );
};

export const size = () => {
  return (
    <div className="flex space-x-2">
      <Tag size="sm">Default</Tag>
      <Tag size="md">Default</Tag>
      <Tag size="lg">Default</Tag>
      <Tag size="xl">Default</Tag>
    </div>
  );
};
