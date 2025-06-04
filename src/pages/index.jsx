import { Head } from "minista"
import Header from "@/layouts/Header"
import Footer from "@/layouts/Footer";

export default function () {
  return (
    <>
      <Head htmlAttributes={{lang: 'en'}}>
        <title>Stream Vibe | Home</title>
      </Head>
      <Header />
      <Footer />
    </>
  )
}
