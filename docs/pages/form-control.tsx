import * as React from "react";

import DocumentBuilder from "@components/document-builder";
import SEO from "@components/seo";

const formControlPropTypes = [
  {
    property: "id",
    type: ["string"],
    default: "",
    values: [],
    description: "The `id` to use for the form control",
  },
  {
    property: "required",
    type: ["boolean"],
    default: false,
    values: [],
    description: "If `true`, this prop is passed to its children",
  },
  {
    property: "disabled",
    type: ["boolean"],
    default: false,
    values: [],
    description: "If `true`, this prop is passed to its children",
  },
  {
    property: "invalid",
    type: ["boolean"],
    default: false,
    values: [],
    description: "If `true`, this prop is passed to its children",
  },
  {
    property: "readOnly",
    type: ["boolean"],
    default: false,
    values: [],
    description: "If `true`, this prop is passed to its children",
  },
];

const propList = [
  {
    name: "FormControl",
    value: "form-control",
    propTypes: formControlPropTypes,
  },
];

const demoList = [
  {
    name: "Basic Usage",
    files: [
      {
        name: "form-control.tsx",
        code: `<div className="flex flex-wrap w-full p-8 space-x-4">
  <FormControl id="email">
    <FormLabel>
      Email address
    </FormLabel>
    <Input placeholder="jon@gmail.com" />
    <FormHelperText>We'll never share your email.</FormHelperText>
  </FormControl>
</div>`,
        readOnly: false,
      },
    ],
    openEditor: true,
  },
  {
    name: "React Hook Form",
    files: [
      {
        name: "form-control.js",
        code: `function App() {
  const [loading, setLoading] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false)
  const handleToggleShowPassword = () => setShowPassword(!showPassword)

  const { register, formState: { errors }, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    setLoading(true);
    setTimeout(() => {
      alert(JSON.stringify(data));
      setLoading(false);
    }, 500);
  };
  
  return (
    <div className="w-full max-w-xs p-8 space-x-4">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <FormControl invalid={Boolean(errors.username)}>
          <FormLabel>
            Username<RequiredIndicator />
          </FormLabel>
          <Input {...register("username", { required: true })} placeholder="Enter your username." />
          {errors.username && errors.username.type === "required" && <FormErrorMessage>Username is required</FormErrorMessage>}
        </FormControl>

        <FormControl invalid={Boolean(errors.password)}>
          <FormLabel>
            Password<RequiredIndicator />
          </FormLabel>
          <Input.Group>
            <Input
              className="pr-16"
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              {...register("password", { required: true })}
            />
            <Input.RightElement className="w-16">
              <Button type="button" size="xs" variant="solid" onClick={handleToggleShowPassword}>
                {showPassword ? "Hide" : "Show"}
              </Button>
            </Input.RightElement>
          </Input.Group>
          {errors.password && errors.password.type === "required" && <FormErrorMessage>Password is required</FormErrorMessage>}
        </FormControl>

        <FormControl>
          <FormLabel>
            Gender
          </FormLabel>
          <Select {...register("gender")}>
            <option value="female">female</option>
            <option value="male">male</option>
            <option value="other">other</option>
          </Select>
        </FormControl>

        <Button type="submit" variant="solid" color="primary" loading={loading}>Submit</Button>
      </form>
    </div>
  );
}`,
        readOnly: false,
      },
    ],
    openEditor: true,
  },
];

const formControlComponent = {
  name: "Form Control",
  importer: `import {
  FormControl,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
} from "@vechaiui/react"`,
  demoList,
  propList,
};

export default function FormControl() {
  return (
    <>
      <SEO title="Tailwind CSS FormControl" />
      <DocumentBuilder component={formControlComponent} />
    </>
  );
}
