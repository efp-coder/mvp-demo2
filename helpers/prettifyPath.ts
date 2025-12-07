export default function prettifyPath(pathname: string) {
  if (pathname === "/") return "Welcome To Snakey-Code 🐍";

  const lastSegment = pathname.replace(/^\/|\/$/g, "").split("/").pop() || "";

  return lastSegment
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

