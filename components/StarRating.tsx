import Image from "next/image";
import starEmpty from "@/public/star-empty.svg";
import starFilled from "@/public/star-filled.svg";

const RATINGS = [1, 2, 3, 4, 5];

interface Props {
  value: number;
}

export default function StarRating({ value = 1 }: Props) {
  return (
    <span>
      {RATINGS.map((rating) =>
        value >= rating ? (
          <Image key={rating} src={starFilled} alt="★" />
        ) : (
          <Image key={rating} src={starEmpty} alt="✩" />
        )
      )}
    </span>
  );
}
