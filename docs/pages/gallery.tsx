import * as React from "react";
import {
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  FormHelperText,
  Divider,
  Input,
  IconButton,
  Radio,
  Select,
  Switch,
  Textarea,
  Badge,
  Code,
  Kbd,
  Tag,
  Breadcrumb,
  Link,
  Avatar,
  Icon,
  Dot,
  Image,
  InfoIcon,
  XCricleIcon,
  CheckCircleIcon,
  ExclamationIcon,
  Alert,
  Spinner,
  useMessage,
  useNotification,
  cx,
} from "@vechaiui/react";
import {
  Menu,
  Listbox,
  Dialog,
  Popover,
  Portal,
  RadioGroup,
  Disclosure,
  Transition,
} from "@headlessui/react";
import {
  ArrowsExpandIcon,
  DuplicateIcon,
  ShareIcon,
  CalendarIcon,
  TagIcon,
  HashtagIcon,
  CheckIcon,
  SelectorIcon,
  XIcon,
  SunIcon,
  StarIcon,
  MoonIcon,
  ChevronUpIcon,
  ChevronRightIcon,
  UserCircleIcon,
  BellIcon,
  ShieldCheckIcon,
} from "@heroicons/react/outline";
import * as Slider from "@radix-ui/react-slider";
import * as Tabs from "@radix-ui/react-tabs";
import { useTheme, themes } from "@components/theme-controller";

function RadioGroupDemo() {
  const themes = [
    {
      value: "light",
      name: "Light",
      icon: SunIcon,
    },
    {
      value: "dark",
      name: "Dark",
      icon: MoonIcon,
    },
    {
      value: "system",
      name: "System",
      icon: StarIcon,
    },
  ];

  const [value, setValue] = React.useState(themes[0].value);

  return (
    <RadioGroup value={value} onChange={setValue}>
      <RadioGroup.Label className="sr-only">Radius</RadioGroup.Label>
      <div className="inline-flex p-0.5 space-x-0 rounded-md bg-neutral-200 dark:bg-neutral-700">
        {themes.map((item) => (
          <RadioGroup.Option
            key={item.name}
            value={item.value}
            className={({
              checked,
            }) => `inline-flex appearance-none items-center justify-center rounded-md
                  select-none relative whitespace-nowrap align-middle outline-none font-semibold
                  text-xs px-4 py-1.5
                  focus:outline-none
                  ${
                    checked
                      ? "bg-white text-primary-500 shadow dark:bg-neutral-800"
                      : "text-neutral-600 dark:text-neutral-400"
                  }
             `}
          >
            <Icon as={item.icon} label="radio-group" className="w-4 h-4 mr-1" />
            <span>{item.name}</span>
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  );
}

function Complexity() {
  return (
    <Menu as="div" className="relative inline-block w-full">
      <Menu.Button as={Button} variant="solid" color="primary">
        Actions
      </Menu.Button>
      <Transition
        show
        as={React.Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          static
          className={cx(
            "relative z-dropdown w-full mt-2 origin-top-left rounded-md shadow-sm outline-none",
            "bg-white border border-gray-200",
            "dark:bg-neutral-800 dark:border-gray-700"
          )}
        >
          <div className="px-1 py-1">
            <Menu.Item>
              {({ active, disabled }) => (
                <button
                  disabled={disabled}
                  aria-disabled={disabled}
                  className={cx(
                    "flex rounded items-center w-full px-3 h-8 flex-shrink-0 text-sm text-left cursor-base focus:outline-none",
                    active && "bg-neutral-100 dark:bg-neutral-700",
                    disabled &&
                      "disabled:opacity-60 disabled:cursor-not-allowed"
                  )}
                >
                  <Icon
                    as={ArrowsExpandIcon}
                    label="arrows-expand"
                    className={cx(
                      "w-4 h-4 mr-2",
                      active ? "" : "text-neutral-500"
                    )}
                  />
                  <span className="flex-1">Fullscreen</span>
                  <Kbd>⌘F</Kbd>
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active, disabled }) => (
                <button
                  disabled={disabled}
                  aria-disabled={disabled}
                  className={cx(
                    "flex rounded items-center w-full px-3 h-8 flex-shrink-0 text-sm text-left cursor-base focus:outline-none",
                    active && "bg-neutral-100 dark:bg-neutral-700",
                    disabled &&
                      "disabled:opacity-60 disabled:cursor-not-allowed"
                  )}
                >
                  <Icon
                    as={DuplicateIcon}
                    label="duplicate"
                    className={cx(
                      "w-4 h-4 mr-2",
                      active ? "" : "text-neutral-500"
                    )}
                  />
                  <span className="flex-1">Copy</span>
                  <Kbd>⌘⇧C</Kbd>
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active, disabled }) => (
                <button
                  disabled={disabled}
                  aria-disabled={disabled}
                  className={cx(
                    "flex rounded items-center w-full px-3 h-8 flex-shrink-0 text-sm text-left cursor-base focus:outline-none",
                    active && "bg-neutral-100 dark:bg-neutral-700",
                    disabled &&
                      "disabled:opacity-60 disabled:cursor-not-allowed"
                  )}
                >
                  <Icon
                    as={ShareIcon}
                    label="share"
                    className={cx(
                      "w-4 h-4 mr-2",
                      active ? "" : "text-neutral-500"
                    )}
                  />
                  <span className="flex-1">Share</span>
                </button>
              )}
            </Menu.Item>
            <Divider
              orientation="horizontal"
              className="border-neutral-200 dark:border-neutral-700"
            />
            <Menu.Item>
              {({ active, disabled }) => (
                <button
                  disabled={disabled}
                  aria-disabled={disabled}
                  className={cx(
                    "flex rounded items-center w-full px-3 h-8 flex-shrink-0 text-sm text-left cursor-base focus:outline-none",
                    active && "bg-neutral-100 dark:bg-neutral-700",
                    disabled &&
                      "disabled:opacity-60 disabled:cursor-not-allowed"
                  )}
                >
                  <Icon
                    as={CalendarIcon}
                    label="calendar"
                    className={cx(
                      "w-4 h-4 mr-2",
                      active ? "" : "text-neutral-500"
                    )}
                  />
                  <span className="flex-1">Due Date</span>
                  <Kbd>⌘D</Kbd>
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active, disabled }) => (
                <button
                  disabled={disabled}
                  aria-disabled={disabled}
                  className={cx(
                    "flex rounded items-center w-full px-3 h-8 flex-shrink-0 text-sm text-left cursor-base focus:outline-none",
                    active && "bg-neutral-100 dark:bg-neutral-700",
                    disabled &&
                      "disabled:opacity-60 disabled:cursor-not-allowed"
                  )}
                >
                  <Icon
                    as={TagIcon}
                    label="tag"
                    className={cx(
                      "w-4 h-4 mr-2",
                      active ? "" : "text-neutral-500"
                    )}
                  />
                  <span className="flex-1">Priority</span>
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active, disabled }) => (
                <button
                  disabled={disabled}
                  aria-disabled={disabled}
                  className={cx(
                    "flex rounded items-center w-full px-3 h-8 flex-shrink-0 text-sm text-left cursor-base focus:outline-none",
                    active && "bg-neutral-100 dark:bg-neutral-700",
                    disabled &&
                      "disabled:opacity-60 disabled:cursor-not-allowed"
                  )}
                >
                  <Icon
                    as={HashtagIcon}
                    label="hashtag"
                    className={cx(
                      "w-4 h-4 mr-2",
                      active ? "" : "text-neutral-500"
                    )}
                  />
                  <span className="flex-1">Unsubscribe</span>
                  <Kbd>⌘⇧U</Kbd>
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

function DialogDemo() {
  return (
    <div
      className={cx(
        "relative flex flex-col w-full rounded shadow-lg",
        "bg-white border border-gray-200",
        "dark:bg-neutral-800 dark:border-neutral-700",
        "max-w-md px-2"
      )}
    >
      <header className={cx("px-3 pt-3 pb-2 relative text-lg font-semibold")}>
        Confirm deletion
      </header>
      <button
        className={cx(
          "absolute text-sm cursor-base text-gray-600 dark:text-gray-400 hover:text-primary-400 hover:text-primary-500 top-4 right-4"
        )}
      >
        <XIcon className="w-4 h-4" />
      </button>
      <Divider
        orientation="horizontal"
        className="border-neutral-200 dark:border-neutral-700"
      />
      <div className={cx("px-3 py-2 flex-1")}>
        <p className="mb-4 text-sm font-normal text-muted">
          To delete your project, please enter the name of your project{" "}
          <b>pepelele</b>. Once deleted this project will be unrecoverable.
        </p>

        <FormControl>
          <FormLabel htmlFor="name" id="name-label">
            Confirm name
          </FormLabel>
          <Input id="name" color="red" />
        </FormControl>
      </div>
      <Divider
        orientation="horizontal"
        className="border-neutral-200 dark:border-neutral-700"
      />
      <footer className={cx("flex space-x-4 justify-end px-3 py-2")}>
        <Button>Cancel</Button>
        <Button variant="solid" color="red">
          Delete
        </Button>
      </footer>
    </div>
  );
}

function TabsDemo() {
  const tabs = [
    {
      value: "tab1",
      name: "Account",
      content: "Tab one content",
      icon: UserCircleIcon,
    },
    {
      value: "tab2",
      name: "Notifications",
      content: "Tab second content",
      icon: BellIcon,
    },
    // {
    //   value: "tab3",
    //   name: "Security",
    //   content: "Tab third content",
    //   icon: ShieldCheckIcon,
    // },
  ];

  return (
    <Tabs.Root className="flex flex-col" defaultValue="tab1">
      <Tabs.List
        aria-label="tabs example"
        className={cx(
          "flex flex-row justify-start",
          "border-b border-neutral-200 dark:border-neutral-700"
        )}
      >
        {tabs.map((tab) => (
          <Tabs.Trigger
            key={tab.value}
            value={tab.value}
            className={cx(
              "flex items-center justify-center px-3 py-2 -mb-px text-sm text-center whitespace-nowrap cursor-base focus:outline-none",
              "text-neutral-900 bg-transparent border-b-2 border-transparent",
              "hover:border-neutral-300",
              "selected:border-primary-500",
              // dark
              "dark:text-neutral-100",
              "dark:hover:border-neutral-600",
              "dark:selected:border-primary-500"
            )}
          >
            <Icon as={tab.icon} label="icon" className="w-4 h-4 mr-2" />
            <span>{tab.name}</span>
            {tab.value === "tab2" && <Badge className="ml-2">18</Badge>}
          </Tabs.Trigger>
        ))}
      </Tabs.List>
      {tabs.map((tab) => (
        <Tabs.Content
          key={tab.value}
          value={tab.value}
          className="p-4 flex-grow-1"
        >
          {tab.content}
        </Tabs.Content>
      ))}
    </Tabs.Root>
  );
}

export default function Gallery() {
  const { colorScheme, setColorScheme } = useTheme();

  const toggleTheme = () => {
    const idx = themes.findIndex((theme) => theme.id === colorScheme);
    const next = idx === themes.length - 1 ? 0 : idx + 1;
    setColorScheme(themes[next].id);
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <div className="relative w-full max-w-5xl py-20 mx-auto">
        <Button
          className="absolute righ-0 top-2"
          size="sm"
          onClick={toggleTheme}
        >
          Toggle Theme
        </Button>
        <div className="grid grid-flow-col grid-rows-3 gap-16">
          <div className="row-span-3" style={{ minWidth: 245, maxWidth: 245 }}>
            <div className="space-y-4">
              <Complexity />
              <TabsDemo />
            </div>
          </div>
          <div className="grid grid-cols-2 col-span-2 row-span-3 gap-16">
            <div className="space-y-4">
              <div className="flex space-x-4">
                <Input placeholder="Input" />
                <Input disabled value="Disabled" />
              </div>
              <Input defaultValue="Default" />
              <div className="flex space-x-4">
                <Select placeholder="Placeholder" className="w-1/2">
                  <option>Option 1</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                </Select>
                <Select disabled placeholder="Placeholder" className="w-1/2">
                  <option>Option 1</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                </Select>
              </div>
            </div>
            <div className="flex flex-col space-y-4">
              <div className="flex space-x-8">
                <Checkbox.Group
                  inline={false}
                  value={["sasuke"]}
                  className="flex flex-col space-y-2"
                >
                  <Checkbox value="naruto">Regualar</Checkbox>
                  <Checkbox value="sasuke">Selected</Checkbox>
                  <Checkbox value="sakura" disabled>
                    Disabled
                  </Checkbox>
                </Checkbox.Group>

                <Radio.Group
                  defaultValue="2"
                  inline={false}
                  className="flex flex-col space-y-2"
                >
                  <Radio value="1">Regualar</Radio>
                  <Radio value="2">Selected</Radio>
                  <Radio value="3" disabled>
                    Disabled
                  </Radio>
                </Radio.Group>
              </div>
              <Slider.Root
                defaultValue={[25, 75]}
                className="relative flex items-center h-4 select-none"
              >
                <Slider.Track className="relative w-full h-1 bg-neutral-200 dark:bg-whiteAlpha-300 flex-grow-1">
                  <Slider.Range className="absolute h-full rounded-full bg-primary-500 dark:bg-primary-200" />
                </Slider.Track>
                <Slider.Thumb className="block w-4 h-4 bg-white border rounded-full border-neutral-300 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500" />
                <Slider.Thumb className="block w-4 h-4 bg-white border rounded-full border-neutral-300 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500" />
              </Slider.Root>
            </div>
            <div>
              <div className="grid grid-cols-3 gap-2">
                <Button>Button</Button>
                <Button color="primary">Button</Button>
                <Button color="orange">Button</Button>
                <Button variant="solid">Button</Button>
                <Button variant="solid" color="primary">
                  Button
                </Button>
                <Button variant="solid" color="orange">
                  Button
                </Button>
                <Button variant="ghost">Button</Button>
                <Button variant="ghost" color="primary">
                  Button
                </Button>
                <Button variant="ghost" color="orange">
                  Button
                </Button>
                <div className="col-span-3">
                  <Button className="w-full" variant="light" color="red">
                    Button
                  </Button>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex flex-row space-x-4">
                <div className="space-y-4">
                  <FormControl className="flex items-center">
                    <Switch defaultChecked id="light" />
                    <FormLabel htmlFor="light" className="mb-0 ml-2">
                      Light
                    </FormLabel>
                  </FormControl>
                  <FormControl className="flex items-center">
                    <Switch id="dark" />
                    <FormLabel htmlFor="dark" className="mb-0 ml-2">
                      Dark
                    </FormLabel>
                  </FormControl>
                </div>
                <div className="flex flex-wrap">
                  <Tag className="mb-2 mr-2">Default</Tag>
                  <Tag color="primary" className="mb-2 mr-2">
                    <Tag.Label>Primary</Tag.Label>
                    <Tag.CloseButton className="text-primary-600 dark:text-primary-400" />
                  </Tag>
                  <Tag color="orange" className="mb-2 mr-2">
                    <Tag.Label>Orange</Tag.Label>
                    <Tag.CloseButton className="text-orange-600 dark:text-orange-400" />
                  </Tag>

                  {/* <Tag variant="solid" className="mb-2 mr-2">
                  Default
                </Tag> */}
                  <Tag variant="solid" color="primary" className="mb-2 mr-2">
                    <Tag.Label>Primary</Tag.Label>
                    <Tag.CloseButton className="text-white dark:text-primary-400" />
                  </Tag>
                  <Tag variant="solid" color="orange" className="mb-2 mr-2">
                    <Tag.Label>Orange</Tag.Label>
                    <Tag.CloseButton className="text-white dark:text-orange-400" />
                  </Tag>
                </div>
              </div>
              <div className="flex flex-wrap">
                {/* <Tag variant="light" className="mb-2 mr-2">
                <Dot className="mr-2" />
                <Tag.Label>Default</Tag.Label>
              </Tag> */}

                <Tag color="primary" variant="light" className="mb-2 mr-2">
                  <Dot className="mr-2" color="primary" />
                  <Tag.Label>Primary</Tag.Label>
                  <Tag.CloseButton className="text-primary-600 dark:text-primary-400" />
                </Tag>
                <Tag color="orange" variant="light" className="mb-2 mr-2">
                  <Dot className="mr-2" color="orange" />
                  <Tag.Label>Orange</Tag.Label>
                  <Tag.CloseButton className="text-orange-600 dark:text-orange-400" />
                </Tag>
                <Tag color="red" variant="light" className="mb-2 mr-2">
                  <Dot className="mr-2" color="red" />
                  <Tag.Label>Red</Tag.Label>
                  <Tag.CloseButton className="text-red-600 dark:text-red-400" />
                </Tag>
              </div>
              <RadioGroupDemo />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-16 mt-8">
          <div className="w-full space-y-4">
            <Alert variant="solid" className="alert-yellow">
              Flash message goes here.
              <Alert.CloseButton className="alert-close-button-yellow" />
            </Alert>

            <Alert color="orange" variant="subtle">
              Flash message goes here.
              <Alert.CloseButton />
            </Alert>

            <Alert color="red" variant="left-accent">
              Flash message goes here.
              <Alert.CloseButton />
            </Alert>

            <div className="flex items-center space-x-4">
              <Avatar.Group size="lg" max={2}>
                <Avatar
                  name="Bruce Wayne"
                  src="https://images.unsplash.com/photo-1531259683007-016a7b628fc3"
                />
                <Avatar
                  name="Captain America "
                  src="https://images.unsplash.com/photo-1569003339405-ea396a5a8a90"
                />
                <Avatar
                  name="Spiderman"
                  src="https://images.unsplash.com/photo-1604200213928-ba3cf4fc8436"
                />
                <Avatar name="Wonder Woman" src="https://bit.ly/prosper-baba" />
                <Avatar
                  name="Christian Nwamba"
                  src="https://bit.ly/code-beast"
                />
              </Avatar.Group>

              <div className="flex space-x-2">
                <Badge variant="solid">1</Badge>
                <Badge color="primary" variant="solid">
                  1
                </Badge>
              </div>

              <div className="flex space-x-2">
                <Kbd>⌘</Kbd>
                <Kbd>shift</Kbd>
              </div>

              <div className="flex space-x-2">
                <Code>New Issue</Code>
                <Code>Cmd/Ctrl</Code>
              </div>

              <div className="flex space-x-2">
                <Spinner />
                <Spinner className="text-primary-500" />
              </div>
            </div>
          </div>
          <div>
            <DialogDemo />
          </div>
        </div>
      </div>
    </div>
  );
}
