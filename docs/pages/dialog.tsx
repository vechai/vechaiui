import * as React from "react";

import DocumentBuilder from "@components/document-builder";
import SEO from "@components/seo";

const propList = [
  {
    name: "Dialog",
    value: "dialog",
    propTypes: [
      {
        extend: true,
        path: "https://headlessui.dev/react/dialog",
        external: true,
        label: "See more `Dialog` props.",
      },
    ],
  },
];

const demoList = [
  {
    name: "Basic usage",
    files: [
      {
        name: "dialog.tsx",
        code: `function App() {
  const [showDialog, setShowDialog] = React.useState(false);
  const completeButtonRef = React.useRef(null);

  const handleOpen = () => setShowDialog(true);
  const handleClose = () => setShowDialog(false);

  return (
    <div className="p-8">
      <Button onClick={handleOpen}>Show Dialog</Button>
      <Transition show={showDialog} as={React.Fragment}>
        <Dialog
          initialFocus={completeButtonRef}
          as="div"
          className="fixed inset-0 overflow-y-auto z-modal"
          open={showDialog}
          onClose={handleClose}
        >
          <Dialog.Overlay className="fixed top-0 left-0 w-screen h-screen bg-blackAlpha-600" />
          <Transition.Child
            as={React.Fragment}
            enter="transition ease-out duration-150"
            enterFrom="transform scale-95"
            enterTo="transform scale-100"
            leave="transition ease-in duration-100"
            leaveFrom="transform scale-100"
            leaveTo="transform scale-95"
          >
            <div
              className={cx(
                "relative flex flex-col w-full mx-auto my-24 rounded shadow-lg",
                "bg-white border border-gray-200",
                "dark:bg-neutral-800 dark:border-neutral-700",
                "max-w-md"
              )}
            >
              <header
                className="relative px-6 py-5 text-lg font-semibold"
              >
                Modal Title
              </header>
              <button
                onClick={handleClose}
                className={cx(
                  "absolute text-sm cursor-base text-gray-600 dark:text-gray-400 hover:text-primary-500 top-4 right-4"
                )}
              >
                <XIcon className="w-4 h-4" />
              </button>
              <div className="flex-1 px-6 py-2">
                <p className="text-base font-normal text-neutral-500">
                  Sit nulla est ex deserunt exercitation anim occaecat. Nostrud
                  ullamco deserunt aute id consequat veniam incididunt duis in
                  sint irure nisi. Mollit officia cillum Lorem ullamco minim
                  nostrud elit officia tempor esse quis.
                </p>
              </div>
              <footer className="px-6 py-4">
                <Button ref={completeButtonRef} variant="light" color="primary" onClick={handleClose}>
                  Complete
                </Button>
              </footer>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>
    </div>
  );
}`,
        readOnly: false,
      },
    ],
  },
  {
    name: "Confirm Deletion",
    files: [
      {
        name: "dialog.tsx",
        code: `function App() {
  const [showDialog, setShowDialog] = React.useState(false);
  const inputRef = React.useRef(null);

  const handleOpen = () => setShowDialog(true);
  const handleClose = () => setShowDialog(false);

  return (
    <div className="p-8">
      <Button onClick={handleOpen} color="red">Delete Account</Button>
      <Transition show={showDialog} as={React.Fragment}>
        <Dialog
          initialFocus={inputRef}
          as="div"
          className="fixed inset-0 overflow-y-auto z-modal"
          open={showDialog}
          onClose={handleClose}
        >
          <Dialog.Overlay className="fixed top-0 left-0 w-screen h-screen bg-blackAlpha-600" />
          <Transition.Child
            as={React.Fragment}
            enter="transition ease-out duration-150"
            enterFrom="transform scale-95"
            enterTo="transform scale-100"
            leave="transition ease-in duration-100"
            leaveFrom="transform scale-100"
            leaveTo="transform scale-95"
          >
            <div
              className={cx(
                "relative flex flex-col w-full mx-auto my-24 rounded shadow-lg",
                "bg-white border border-gray-200",
                "dark:bg-neutral-800 dark:border-neutral-700",
                "max-w-md px-2"
              )}
            >
              <header
                className="relative px-3 pt-3 pb-2 text-lg font-semibold"
              >
                Confirm deletion
              </header>
              <button
                onClick={handleClose}
                className="absolute text-sm text-gray-600 cursor-base dark:text-gray-400 hover:text-primary-500 top-4 right-4"
              >
                <XIcon className="w-4 h-4" />
              </button>
              <Divider
                orientation="horizontal"
                className="border-neutral-200 dark:border-neutral-700"
              />
              <div className="flex-1 px-3 py-2">
                <p className="mb-4 text-sm font-normal text-muted">
                  To delete your project, please enter the name of your project <b>pepelele</b>. 
                  Once deleted this project will be unrecoverable.
                </p>

                <FormControl id="name">
                  <FormLabel>
                    Confirm name
                  </FormLabel>
                  <Input ref={inputRef} color="red" />
                </FormControl>
              </div>
              <Divider
                orientation="horizontal"
                className="border-neutral-200 dark:border-neutral-700"
              />
              <footer className="flex justify-end px-3 py-2 space-x-4">
                <Button onClick={handleClose}>
                  Cancel
                </Button>
                <Button variant="solid" color="red" onClick={handleClose}>
                  Delete
                </Button>
              </footer>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>
    </div>
  );
}`,
        readOnly: false,
      },
    ],
  },
];

const dialogComponent = {
  name: "Dialog",
  importer: `import { Dialog, Transition } from "@headlessui/react";
import { cx } from "@vechaiui/react";`,
  demoList,
  propList,
};

export default function Dialog() {
  return (
    <>
      <SEO
        title="Tailwind CSS Dialog"
        description="A modal is an interface element that appears over other content. It requires an interaction from the user before they can return to whatever is underneath."
      />
      <DocumentBuilder component={dialogComponent} />
    </>
  );
}
