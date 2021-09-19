import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pinnacle</title>
        <meta name="description" content="An escrow system build on Stellar" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <VStack
        w="100%"
        background="linear-gradient(28deg, rgba(108, 131, 255, 0.3) 2%, rgba(26,36,51,1) 31%, rgba(37,39,55,1) 51%, rgba(39,34,47,1) 68%, rgba(220, 23, 155, 0.2) 82%)"
        // backgroundImage={useColorModeValue('url(/images/v2/lightbg.png)', 'url(/images/v2/darkbg.png)')}
        backgroundSize="cover"
        backgroundAttachment="fixed"
        backgroundRepeat="no-repeat"
      ></VStack>

      <h1>Hello</h1>
    </div>
  );
}
