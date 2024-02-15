import Link from "next/link";
import styles from "@/styles/ProductList.module.css";
import Image from "next/image";
import StarRating from "./StarRating";
import heartImage from "@/public/heart.svg";

interface Props {
  products?: ProductType[];
  className?: string;
}

export default function ProductList({ className = "", products = [] }: Props) {
  return (
    <ul className={`${styles.productList} ${className}`}>
      {products.map((product) => (
        <li key={product.id}>
          <Link className={styles.product} href={`/items/${product.id}`}>
            <div className={styles.image}>
              <Image
                src={product.imgUrl}
                fill
                alt={product.name}
                sizes="100%,100%"
                priority={true}
              />
            </div>
            <div className={styles.content}>
              <div>
                <span className={styles.name}>{product.name}</span>
                <div className={styles.prices}>
                  <span className={styles.originalPrice}>
                    {product.price.toLocaleString()}원
                  </span>
                  {product.salePrice.toLocaleString()}원
                </div>
              </div>
              <hr className={styles.divider} />
              <div>
                <div className={styles.starRating}>
                  <StarRating value={product.starRating} />
                  {product.starRatingCount.toLocaleString()}
                </div>
                <div className={styles.likeCount}>
                  <Image
                    src={heartImage}
                    height={13}
                    width={13}
                    alt="좋아요"
                    priority={true}
                  />
                  {product.likeCount.toLocaleString()}
                </div>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
