export function SectionTitle({
  title,
  subtitle,
  align = "center",
  onDark = false,
}: {
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  onDark?: boolean;
}) {
  const centered = align === "center";
  return (
    <div className={centered ? "text-center" : "text-left"}>
      <div className={`flex items-center gap-3 ${centered ? "justify-center" : ""}`}>
        <span className="hidden h-px w-10 bg-accent sm:block" />
        <h2
          className={`text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-4xl ${
            onDark ? "text-primary-foreground" : "text-primary"
          }`}
        >
          {title}
        </h2>
        <span className="hidden h-px w-10 bg-accent sm:block" />
      </div>
      <div className={`mt-3 flex items-center gap-1.5 ${centered ? "justify-center" : ""}`}>
        <span className="h-1.5 w-1.5 rotate-45 bg-accent" />
        <span className="h-[3px] w-16 rounded-full bg-accent" />
        <span className="h-1.5 w-1.5 rotate-45 bg-accent" />
      </div>
      {subtitle ? (
        <p
          className={`mt-4 text-base leading-relaxed ${
            onDark ? "text-primary-foreground/80" : "text-muted-foreground"
          }`}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
