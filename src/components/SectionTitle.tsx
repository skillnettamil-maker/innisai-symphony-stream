export function SectionTitle({
  title,
  subtitle,
  align = "center",
}: {
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      <h2 className="text-2xl font-bold tracking-tight text-primary sm:text-3xl">{title}</h2>
      <div
        className={`mt-3 h-[3px] w-16 rounded-full bg-accent ${align === "center" ? "mx-auto" : ""}`}
      />
      {subtitle ? (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">{subtitle}</p>
      ) : null}
    </div>
  );
}
