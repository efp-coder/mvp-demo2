type BodyTextProps = {
  children: React.ReactNode;
};

export default function BodyText({ children }: BodyTextProps) {
  return (
    <p className="
      text-text-dark 
      text-xl text-medium 
      font-body 
      border-2 border-background
      border-dashed
      px-4 py-6
      mb-2
      rounded-xl
      divided-dashed
      w-3/4
      md:w-auto
      "
    >{children}</p>

  );

}
