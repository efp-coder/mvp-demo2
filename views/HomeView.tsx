"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import BodyText from "@/components/BodyText";
import SectionHeader from "@/components/SectionHeader";

export default function HomeView() {
  const [show, setShow] = useState(false);


    useEffect(() => {
        const timer = setTimeout(() => setShow(true), 0);
        return () => clearTimeout(timer);
    }, []);


    return (
    <section className="relative flex flex-col flex-1 ">

      <section className={`
        flex flex-col 
        md:flex-row md:justify-around 
        items-center 
        bg-text-dark
        transition-transform
        transform 
        duration-500 ease-in-out ${show ? "translate-x-0" : "-translate-x-full"}
          `}
      >
        <Image
          src={"/logo.svg"}
          alt="Snakey-Code big logo"
          width={400}
          height={400}
          sizes="(max-width: 640px) 50vw, 50vw"
          className="object-cover"
        />
        <h1 className="font-header py-6 text-primary text-balance text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">Where your <span className="text-accent">Python</span> journey begins</h1>
      </section>

      <section className="flex flex-col flex-1 items-center justify-center relative p-4 bg-primary-light/60 text-center">
        <SectionHeader>A promise from the team</SectionHeader>
        <BodyText>
          We cannot all excel at programming, but we can all learn the basics, improve our understanding of the world and find convenience in small automations projects.
          <br />
          <br />
          So have you been dealing with repetative tasks and thought <br /><span className="px-2 mt-2 inline-block italic bg-background text-foreground">This could be automated! </span>
        </BodyText>
        <BodyText>
          Other text.<br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc venenatis ligula non ex dignissim, maximus porta libero interdum. Cras elementum, arcu in placerat facilisis, lectus leo eleifend lacus, non pharetra augue nisi quis lectus. Sed vulputate scelerisque felis, vitae viverra nisl tincidunt sed. Mauris mattis fermentum rhoncus. Etiam condimentum a risus nec tincidunt. Vestibulum a eros hendrerit lorem lobortis convallis eget vitae nisl. Cras ullamcorper non elit ac dictum. Morbi dapibus sagittis tortor sed eleifend. Quisque tincidunt tempus dui, vitae finibus purus bibendum et. Morbi rutrum ante ut rutrum posuere. Praesent gravida magna accumsan tempor auctor. Proin malesuada tellus vitae mi sodales feugiat.
          Sed tempus elementum sapien. Duis tristique tincidunt pellentesque. Sed tempor, dolor eget imperdiet feugiat, odio ipsum scelerisque velit, sit amet interdum neque eros vitae eros. Nulla dolor nisi, accumsan in mattis molestie, dapibus nec risus. Sed felis massa, malesuada eu mi in, maximus fringilla nulla. Fusce mattis, leo vitae tincidunt iaculis, nisi nunc posuere ante, vitae rutrum tortor magna et sapien. Nam finibus odio nec ex condimentum bibendum. Maecenas vitae tristique eros, sit amet pellentesque arcu. Duis nibh urna, varius sit amet velit eget, mattis molestie sapien. Sed in ullamcorper nisi. Pellentesque sed metus vel est aliquam convallis. Donec posuere, erat a accumsan lobortis, dui purus tempus purus, lacinia mollis ligula diam quis libero. Donec scelerisque, lectus eu malesuada fringilla, risus sapien tincidunt ligula, sed molestie nisl ex quis ante. Morbi id massa ut erat dapibus gravida. Nunc ornare leo ut condimentum sollicitudin.
        </BodyText>
        <p className="font-code">This is paragraph text.</p>
      </section>
    </section>
  );

}