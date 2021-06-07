import Link from "next/link";

function CategoryList({ categories }) {

  return categories.map(({ name, slug }, index) => (
    <span key={slug}>
      {index ? ", " : ""}
      <Link href={`/kategorier/${slug}`}>
        <a className="text-lg md:text-xl lg:text-2xl hover:italic">{name}</a>
      </Link>
    </span>
  ));
}

export default CategoryList;
