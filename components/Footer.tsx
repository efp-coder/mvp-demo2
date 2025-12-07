import Image from "next/image";
import Link from "next/link";
export default function Footer() {

  return (
    <footer className="
      grid grid-cols-1 sm:grid-cols-3 
      gap-x-4 gap-y-6 py-8 px-4 md:px-8 
      place-items-start md:place-items-center 
      text-center text-balance 
      font-bold 
      bg-primary-dark 
      transition-all duration-300 ease-in-out
      w-full">
      <section className="text-gray-light w-full">
        <h3 className="font-header mb-2 text-xl border-b-2 border-accent text-accent inline-block pb-1">Getting Started</h3>
        <ul className="list-inside">
          <li className="list-disc hover:text-success ">
            <a target="_blank" className="hover:text-success" href="https://www.python.org/downloads/">Download Python</a>
          </li>
          <li className="list-disc hover:text-success">
            <a target="_blank" className="hover:text-success" href="https://wiki.python.org/moin/BeginnersGuide/NonProgrammers">Beginners Documentation</a>
          </li>
        </ul>
      </section>
      <section className="w-full flex flex-col items-center justify-center">
        <Link href={"/"} className="relative w-full max-w-xs mx-auto h-auto">
          <Image src={"/logo-wide-aspect.svg"} alt="Snakey-Code logs" width={192} height={48} className="w-full h-auto object-contain" />
        </Link>
        <section className="grid grid-cols-3 place-items-center">
          <a href="https://github.com/efp-coder" target="_blank" className="m-4">
            <Image src={"/github-icon.svg"} alt="Github Icon" width={32} height={32} className="hover:scale-125 object-contain" />
          </a>
          <a href="https://github.com/efp-coder" target="_blank" className="m-4">
            <Image src={"/github-icon.svg"} alt="Github Icon" width={32} height={32} className="hover:scale-125 object-contain" />
          </a>
          <a href="https://github.com/efp-coder" target="_blank" className="m-4">
            <Image src={"/github-icon.svg"} alt="Github Icon" width={32} height={32} className="hover:scale-125 object-contain" />
          </a>
        </section>

      </section>
      <section className="text-gray-light /30 text-center w-full">
        <h3 className="font-header mb-2 text-center text-xl border-b-2 border-accent text-accent inline-block pb-1">Site Info</h3>
        <p>
          © Snakey-Code 2025 Created
        </p>
        <p>Created by efp-coder</p>
      </section>
    </footer>
  );
}
