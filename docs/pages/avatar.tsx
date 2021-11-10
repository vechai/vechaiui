import * as React from "react";

import DocumentBuilder from "@components/document-builder";
import SEO from "@components/seo";

const avatarPropTypes = [
  {
    property: "name",
    type: ["string"],
    default: "",
    values: [],
    description: "The name of the person in the avatar.",
  },
  {
    property: "bordered",
    type: ["boolean"],
    default: false,
    values: [],
    description: "The border around of the avatar.",
  },
  {
    property: "src",
    type: ["string"],
    default: "",
    values: [],
    description: "The image url of the `Avatar`",
  },
  {
    property: "srcSet",
    type: ["string"],
    default: "",
    values: [],
    description: "The image set url of the `Avatar`",
  },
  {
    property: "onError",
    type: ["() => void"],
    default: "",
    values: [],
    description: "Function called when image failed to load",
  },
  {
    property: "loading",
    type: ["eager", "lazy"],
    default: "",
    values: ["eager", "lazy"],
    description: "Defines loading strategy",
  },
  {
    property: "size",
    type: ["2xs", "xs", "sm", "md", "lg", "xl", "2xl", "3xl", "full"],
    default: "md",
    values: ["2xs", "xs", "sm", "md", "lg", "xl", "2xl", "3xl", "full"],
    description: "The size of avatar",
  },
];

const avatarGroupPropTypes = [
  {
    property: "max",
    type: ["number"],
    default: "",
    values: [],
    description: "The maximum number of visible avatars",
  },
  {
    property: "size",
    type: ['AvatarProps["size"]'],
    default: "",
    values: [],
    description: "Set all wrapped avatar size",
  },
];

const propList = [
  {
    name: "Avatar",
    value: "avatar",
    propTypes: avatarPropTypes,
  },
  {
    name: "Avatar.Group",
    value: "avatar-group",
    propTypes: avatarGroupPropTypes,
  },
];

const demoList = [
  {
    name: "Basic usage",
    files: [
      {
        name: "avatar.tsx",
        code: `<div className="flex flex-wrap w-full p-8 space-x-4">
  <Avatar src="https://images.unsplash.com/photo-1494790108377-be9c29b29330" size="2xs" />
  <Avatar src="https://images.unsplash.com/photo-1494790108377-be9c29b29330" size="xs" />
  <Avatar src="https://images.unsplash.com/photo-1494790108377-be9c29b29330" size="sm" />
  <Avatar src="https://images.unsplash.com/photo-1494790108377-be9c29b29330" size="md" />
  <Avatar src="https://images.unsplash.com/photo-1494790108377-be9c29b29330" size="lg" />
  <Avatar src="https://images.unsplash.com/photo-1494790108377-be9c29b29330" size="xl" />
  <Avatar src="https://images.unsplash.com/photo-1494790108377-be9c29b29330" size="2xl" />
  <Avatar src="https://images.unsplash.com/photo-1494790108377-be9c29b29330" size="3xl" />
</div>`,
        readOnly: false,
      },
    ],
  },
  {
    name: "Name",
    files: [
      {
        name: "avatar.tsx",
        code: `<div className="flex flex-wrap w-full p-8 space-x-4">
  <Avatar name="Bruce Wayne" size="2xs" />
  <Avatar name="Bruce Wayne" size="xs" />
  <Avatar name="Bruce Wayne" size="sm" />
  <Avatar name="Bruce Wayne" size="md" />
  <Avatar name="Bruce Wayne" size="lg" />
  <Avatar name="Bruce Wayne" size="xl" />
  <Avatar name="Bruce Wayne" size="2xl" />
  <Avatar name="Bruce Wayne" size="3xl" />
</div>`,
        readOnly: false,
      },
    ],
  },
  {
    name: "Avatar group",
    files: [
      {
        name: "avatar.tsx",
        code: `<div className="flex flex-wrap w-full p-8 space-x-4">
  <Avatar.Group size="lg" max={2}>
    <Avatar name="Bruce Wayne" src="https://images.unsplash.com/photo-1531259683007-016a7b628fc3" />
    <Avatar name="Captain America " src="https://images.unsplash.com/photo-1569003339405-ea396a5a8a90" />
    <Avatar name="Spiderman" src="https://images.unsplash.com/photo-1604200213928-ba3cf4fc8436" />
    <Avatar name="Wonder Woman" src="https://bit.ly/prosper-baba" />
    <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
  </Avatar.Group>
</div>`,
        readOnly: false,
      },
    ],
  },
];

const avatarComponent = {
  name: "Avatar",
  importer: `import { Avatar } from "@vechaiui/react"`,
  demoList,
  propList,
};

export default function Avatar() {
  return (
    <>
      <SEO
        title="Tailwind CSS Avatar"
        description="A graphical representation of a user: usually a photo, illustration or initial."
      />
      <DocumentBuilder component={avatarComponent} />
    </>
  );
}
