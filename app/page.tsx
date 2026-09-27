import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Collections from "@/components/Collections";
export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f5ef] text-[#171717]">
      <Navbar />

      {/* Hero */}
      
<Hero />
      {/* Intro */}
      <section
        id="about"
        className="mx-auto max-w-5xl px-6 py-24 text-center lg:py-32"
      >
        <p className="text-[11px] tracking-[0.25em] text-black/50">
          SWARNA SANGAM JEWELLERS
        </p>

        <h2 className="mx-auto mt-6 max-w-3xl font-serif text-4xl leading-tight sm:text-5xl">
          Silver pieces made to become part of your story.
        </h2>

        <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-black/60">
          From everyday elegance to meaningful gifts and timeless
          collectables, explore our growing collection of silver jewellery
          and handcrafted pieces.
        </p>
      </section>

      {/* Categories */}
     <Collections />

      {/* Coming Soon */}
      <section className="bg-[#171717] px-6 py-24 text-white lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <p className="text-[11px] tracking-[0.25em] text-white/50">
            COMING SOON
          </p>

          <div className="mt-5 flex flex-col justify-between gap-10 md:flex-row md:items-end">
            <h2 className="max-w-2xl font-serif text-4xl leading-tight sm:text-5xl">
              A collection of silver, carefully chosen.
            </h2>

            <p className="max-w-sm text-sm leading-7 text-white/60">
              Our online collection is being prepared. Soon you will be able
              to explore products, view details, add favourites and shop
              directly online.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#f8f5ef] px-6 py-14 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 border-t border-black/10 pt-10 md:flex-row md:items-end md:justify-between">
          <div>
            <Image
              src="/images/logo.png"
              alt="Swarna Sangam Jewellers"
              width={581}
              height={226}
              className="h-auto w-[130px] object-contain"
            />

            <p className="mt-5 text-xs leading-6 text-black/50">
              Khargone, Madhya Pradesh 451001
            </p>
          </div>

          <div className="text-xs text-black/50">
            © {new Date().getFullYear()} Swarna Sangam Jewellers. All rights
            reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}