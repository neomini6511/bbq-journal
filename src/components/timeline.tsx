import Image from "next/image";
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
            {item.images && item.images.length > 0 && (
              <div className="timeline__images">
                {item.images.map((img) => (
                  <figure key={img.src} className="timeline__image-item">
                    <div className="image-frame image-frame--gallery">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        sizes="(max-width: 640px) 50vw, 200px"
                        className="image-frame__img"
                      />
                    </div>
                    <figcaption className="timeline__image-caption">{img.caption}</figcaption>
                  </figure>
                ))}
              </div>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}
