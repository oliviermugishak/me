export default function EntryHeading({
  title,
  href,
  subtitle,
  date,
}: {
  title: string;
  href?: string;
  subtitle: string;
  date?: string;
}) {
  return (
    <div className="resume-entry-heading">
      <div>
        <h3>{href ? <a href={href} target="_blank" rel="noopener noreferrer">{title} <span className="external-mark" aria-hidden="true">↗</span></a> : title}</h3>
        <p className="entry-place">{subtitle}</p>
      </div>
      {date && <p className="entry-date">{date}</p>}
    </div>
  );
}
