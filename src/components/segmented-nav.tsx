import Link from "next/link";

type Item = {
  href: string;
  label: string;
  active?: boolean;
};

export function SegmentedNav({ items }: { items: Item[] }) {
  return (
    <nav className="segmented-nav" aria-label="Recipe navigation">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={item.active ? "segmented-nav__item segmented-nav__item--active" : "segmented-nav__item"}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
