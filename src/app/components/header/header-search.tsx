import styles from "./assets/header.module.scss";
import { FormEvent } from "react";
import { search } from "@/app/actions";
import { IoSearch } from "react-icons/io5";

export default async function HeaderSearch(): Promise<JSX.Element> {
  const handleSubmit = async (formData: FormData) => {
    "use server";
    const res = await search(formData.get("search") as string);
    console.log(res);
  };

  return (
    <form action={handleSubmit} className={styles.search}>
      <input name="search" placeholder="Search for coins" type="text" />
      <button>
        <IoSearch />
      </button>
    </form>
  );
}
