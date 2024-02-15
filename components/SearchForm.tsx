import { useRouter } from "next/router";
import { ChangeEvent, FormEvent, useState } from "react";
import styles from "./SearchForm.module.css";
interface Props {
  initialValue?: string;
}

export default function SearchForm({ initialValue = "" }: Props) {
  const router = useRouter();

  const [value, setValue] = useState(initialValue);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!value) {
      return router.push("/");
    }
    return router.push(`/search?q=${value}`);
  }

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <input
        className={styles.searchInput}
        name="q"
        value={value}
        placeholder="찾고 싶은 옷을 검색해보세요."
        onChange={handleChange}
      />
      <button className={styles.searchButton}>검색</button>
    </form>
  );
}
