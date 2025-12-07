import Link from "next/link";

type NavLinkProps = {
  children: string;
  href?: string;
  pressLink?: () => void;
};

export default function NavLink({ children, href = "/", pressLink }: NavLinkProps) {

  return (
    <Link
      onClick={() => pressLink?.()}
      href={href}
      className="
      text-center 
      w-2/3 
      font-body 
      bg-background 
      text-foreground 
      py-2 px-8 
      rounded-full 
      hover:text-background 
      hover:bg-foreground 
      m-4
      "
    >
      {children}
    </Link>
  );

}
