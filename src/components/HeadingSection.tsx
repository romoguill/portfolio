interface HeadingSectionProps {
  title: string;
  subtitle?: string;
}

function HeadingSection({ title, subtitle }: HeadingSectionProps) {
  return (
    <div className='flex flex-col gap-2 mt-8 mb-4'>
      <h2 className='text-2xl font-sans text-primary-50 tracking-wide'>
        {title}
      </h2>
      {subtitle && <h3>{subtitle}</h3>}
    </div>
  );
}

export default HeadingSection;
