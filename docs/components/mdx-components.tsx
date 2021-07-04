import Image from "next/image";
import { CodeBlock } from "./code-block";

const MDXComponents = {
  pre: CodeBlock,
  // image: (image) => {
  //   console.log(image)
  //   return <Image src={image.src} alt={image.alt} height="200" width="355" />;
  // },
};

export default MDXComponents;
