import CodeX from "./model";

export default function fromTextarea(textarea, _options) {
  const options = _options || {};

  const codex = new CodeX(textarea, options);
  return codex;
}
