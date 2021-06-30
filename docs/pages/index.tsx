export async function getStaticProps() {
  return {
    redirect: {
      destination: "/getting-started",
      permanent: false,
    },
  };
}

export default function Home() {
  return null;
}
