type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "text-left";
  const descriptionAlignment = align === "center" ? "mx-auto" : "";

  return (
    <div className={`flex flex-col gap-4 ${alignment} max-w-2xl`}>
      <span className="text-xs uppercase tracking-[0.45em] text-accent-primary">
        {eyebrow}
      </span>
      <h2 className="text-3xl font-semibold text-white sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className={`text-sm text-zinc-400 sm:text-base ${descriptionAlignment}`}>
          {description}
        </p>
      )}
    </div>
  );
}
