import Header from "@/components/header/header";
import Introduction from "@/components/intro/introduction";
import HowItWorks from "@/components/howitworks/howitworks";
import Advantages from "@/components/advantages/advantages";
import Pricing from "@/components/pricing/pricing";
import Contact from "@/components/contact/contact";
import Footer from "@/components/footer/footer";
import { Wrapper } from "@/hoc/wrapper";
import Head from "next/head";

export default function Home() {
  return (
    <Wrapper>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Meesto</title>
        <link rel="icon" type="image/jpg" href="/favicon.jpg" />
        <meta name="description" content="Meesto company" />
        <meta
          name="keywords"
          content="real estate, czech republic, home, find home"
        />
      </Head>
      <main className="grid grid-cols-1 bg-gray-50">
        <header>
          <Header />
        </header>
        <Introduction />
        <HowItWorks />
        <Advantages />
        <Pricing />
        <Contact />
        <Footer />
      </main>
    </Wrapper>
  );
}
