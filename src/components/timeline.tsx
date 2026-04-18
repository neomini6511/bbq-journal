import type { TimelineEntry } from "@/data/recipes";

export function Timeline({ items }: { items: TimelineEntry[] }) {
  return (
    <ol className="timeline">
      {items.map((item) => (
        <li key={`${item.time}-${item.title}`} className="timeline__item">
          <div className="timeline__time">{item.time}</div>
          <div className="timeline__content">
            <h3>{item.title}</h3>
            <ul>
              {item.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ol>
  );
}
