import { Avatar } from "../src";

export default {
  title: "Avatar",
  component: Avatar,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

export const basic = () => (
  <div className="flex space-x-4">
    <Avatar src="https://bit.ly/dan-abramov" size="2xs" />
    <Avatar src="https://bit.ly/dan-abramov" size="xs" />
    <Avatar src="https://bit.ly/dan-abramov" size="sm" />
    <Avatar src="https://bit.ly/dan-abramov" size="md" />
    <Avatar src="https://bit.ly/dan-abramov" size="lg" />
    <Avatar src="https://bit.ly/dan-abramov" size="xl" />
    <Avatar src="https://bit.ly/dan-abramov" size="2xl" />
    <Avatar src="https://bit.ly/dan-abramov" size="3xl" />
  </div>
);

export const name = () => (
  <div className="flex space-x-4">
    <Avatar name="Dan Abrahmov" size="2xs" />
    <Avatar name="Dan Abrahmov" size="xs" />
    <Avatar name="Dan Abrahmov" size="sm" />
    <Avatar name="Dan Abrahmov" size="md" />
    <Avatar name="Dan Abrahmov" size="lg" />
    <Avatar name="Dan Abrahmov" size="xl" />
    <Avatar name="Dan Abrahmov" size="2xl" />
    <Avatar name="Dan Abrahmov" size="3xl" />
  </div>
);

export const group = () => (
  <div className="flex space-x-4">
    <Avatar.Group size="lg" max={2}>
      <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
      <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
      <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
      <Avatar name="Prosper Otemuyiwa" src="https://bit.ly/prosper-baba" />
      <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
    </Avatar.Group>
  </div>
);
