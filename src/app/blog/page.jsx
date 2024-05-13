import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

const Blog = async () => {
  return (
    <div className={styles.mainContainer}>
      <Link href={`/blog/sad`} className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src={"/1.png"}
            alt=""
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>shubham</h1>
          <p className={styles.desc}>hero</p>
        </div>
      </Link>
    </div>
  );
};

export default Blog;
