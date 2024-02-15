import sizeReviewLabels from "@/lib/sizeReviewLabels";
import styles from "./SizeReviewList.module.css";
import formatDate from "@/lib/formatDate";

interface Props {
  sizeReviews: SizeType[] | [];
}

export default function SizeReviewList({ sizeReviews }: Props) {
  return (
    <ul className={styles.sizeReviewList}>
      {sizeReviews.map((sizeReview) => (
        <li key={sizeReview.id} className={styles.sizeReview}>
          <div>
            <div className={styles.date}>
              {formatDate(new Date(sizeReview.createdAt))}
            </div>
            <div className={styles.profile}>
              ({sizeReviewLabels.sex[sizeReview.sex]} {sizeReview.height}cm
              기준) {sizeReview.size}
            </div>
          </div>
          <div className={styles.fit}>
            {sizeReviewLabels.fit[sizeReview.fit]}
          </div>
        </li>
      ))}
    </ul>
  );
}
