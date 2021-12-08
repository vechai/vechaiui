import * as Tabs from "@radix-ui/react-tabs";
import { Link } from "@vechaiui/react";
import * as React from "react";
import NextLink from "next/link";

import { IDE } from "./ide";
import { CodeBlock } from "./code-block";

export type File = {
  name: string;
  code: string;
  readOnly?: boolean;
};

type PropType = {
  property?: string;
  type?: string[];
  default?: any;
  values?: string[];
  description?: string;
  //
  extend?: boolean;
  path?: string;
  external?: boolean;
  label?: string;
};

type PropItem = {
  name: string;
  value: string;
  propTypes: PropType[];
};

type DemoItem = {
  name: string;
  files: File[];
  openEditor?: boolean;
};

interface DocumentBuilderProps {
  component: {
    name: string;
    importer?: string;
    demoList: DemoItem[];
    propList?: PropItem[];
  };
}

export default function DocumentBuilder({ component }: DocumentBuilderProps) {
  return (
    <section className="">
      <h1 className="px-4 pt-10 pl-4 mt-0 mb-3 text-3xl font-extrabold md:px-20 md:pl-20 xl:pt-20 xl:pl-40">
        {component.name}
      </h1>
      {component.importer && (
        <section className="flex flex-col items-start">
          <div className="flex flex-row justify-between w-full px-4 pl-4 md:px-20 md:pl-20 xl:pl-40">
            <div className="w-full max-w-2xl mr-0 xl:mr-20 flex-grow-1">
              <CodeBlock showClipBoard>
                <code className="language-tsx">{component.importer}</code>
              </CodeBlock>
            </div>
          </div>
        </section>
      )}
      <div className="flex flex-col items-start">
        <section className="flex flex-col justify-between w-full px-4 pl-4 md:px-20 md:pl-20 xl:pl-40 xl:flex-row">
          <div className="w-full max-w-2xl mb-6 mr-0 leading-7 xl:mr-20 flex-grow-1">
            {component.demoList.map((demo: any, idx: any) => (
              <div key={idx} className="mb-10">
                <h2 className="flex flex-wrap items-center mt-6 mb-3 text-xl font-bold">
                  {demo.name}
                </h2>
                <IDE files={demo.files} openEditor={demo.openEditor} />
              </div>
            ))}
          </div>
          {component.propList && (
            <div
              className="sticky top-0 self-start w-full max-w-full pr-0 prose-sm prose xl:pr-10 flex-grow-1 xl:w-auto dark:prose-dark dark:prose-dark-sm"
              style={{
                width: "400px",
                // maxWidth: "50vw",
              }}
            >
              <h2 className="flex flex-wrap items-center pt-3 mt-6 mb-3 text-xl font-bold leading-10">
                Props
              </h2>
              <Tabs.Root
                defaultValue={component.propList?.[0]?.value}
                className="flex flex-col m-0 overflow-x-hidden overflow-y-auto font-medium bg-transparent rounded-tl rounded-tr whitespace-nowrap"
              >
                <Tabs.List className="flex items-center flex-none w-full h-full overflow-x-auto hide-scroll">
                  {component.propList.map((prop: any) => (
                    <Tabs.Trigger
                      key={prop.value}
                      value={prop.value}
                      className="flex items-center h-full pl-4 pr-6 -mb-0.5 border-b-4 border-transparent cursor-base focus:outline-none min-w-6 selected:border-primary-500"
                    >
                      <span className="flex flex-wrap items-center pt-3 mt-3 text-lg font-bold leading-10">
                        {prop.name}
                      </span>
                    </Tabs.Trigger>
                  ))}
                </Tabs.List>
                {component.propList.map((_prop: any) => (
                  <Tabs.Content
                    className="flex-1"
                    value={_prop.value}
                    key={_prop.value}
                  >
                    <ul>
                      {_prop.propTypes.map((prop: any, idx: number) => {
                        if (prop.extend) {
                          return (
                            <li className="mt-4">
                              <Link as={NextLink} href={prop.path}>
                                {prop.label}
                              </Link>
                            </li>
                          );
                        }
                        return (
                          <React.Fragment key={idx}>
                            <li className="flex flex-wrap mt-4">
                              <b className="mr-2">{prop.property}</b>
                              <span className="text-teal-500">
                                [{prop.type.join(", ")}]
                              </span>
                              <span aria-hidden="true" className="mx-2">
                                ·
                              </span>
                              <span className="text-neutral-500">
                                Default:{" "}
                                <span className="ml-1 font-medium text-orange-500">
                                  {prop.default.toString() || "''"}
                                </span>
                              </span>
                            </li>
                            <li>
                              <p className="whitespace-normal text-neutral-500">
                                {prop.description}
                              </p>
                            </li>
                            {idx === _prop.propTypes.length - 1 ? null : <hr />}
                          </React.Fragment>
                        );
                      })}
                    </ul>
                  </Tabs.Content>
                ))}
              </Tabs.Root>
            </div>
          )}
        </section>
      </div>
    </section>
  );
}
