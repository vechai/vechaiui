import { Icon, Info, XCricle, CheckCircle, Exclamation } from "../src";

export default {
  title: "Icon",
  component: Icon,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

export const basic = () => (
  <div className="flex space-x-6">
    <Icon as={Info} size={24} className="text-blue-500" />
    <Icon as={CheckCircle} size={24} className="text-green-500" />
    <Icon as={XCricle} size={24} className="text-red-500" />
    <Icon as={Exclamation} size={24} className="text-yellow-500" />
  </div>
);
