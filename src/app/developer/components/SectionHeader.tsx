type SectionHeaderProps = {
  title: string;
  description?: string;
};

export default function SectionHeader({ title, description }: SectionHeaderProps) {
  return (
    <div className="mb-8">
      <h1 className="text-2xl font-semibold text-neutral-900">{title}</h1>
      {description && (
        <p className="mt-2 max-w-2xl text-sm text-neutral-500">{description}</p>
      )}
    </div>
  );
}
