import Image from "next/image";
import type { RecipeImage } from "@/data/recipes";

export function ImageMosaic({ images }: { images: RecipeImage[] }) {
  return (
    <section className="section-card">
      <div className="section-card__header">
        <p className="eyebrow">Photo gallery</p>
        <h2>Cook highlights</h2>
      </div>
      <div className="image-mosaic">
        {images.map((image) => (
          <figure key={image.src} className="image-mosaic__item">
            <div className="image-frame image-frame--gallery">
              <Image src={image.src} alt={image.alt} fill sizes="(max-width: 768px) 100vw, 33vw" className="image-frame__img" />
            </div>
            <figcaption>{image.caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
