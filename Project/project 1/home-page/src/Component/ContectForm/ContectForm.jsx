import React from "react";
import styles from "./ContectFrom.module.css";
import Button from "../Button/Button";
import { MdMessage } from "react-icons/md";
import { IoIosCall } from "react-icons/io";

export default function ContectFrom() {
  return (
    <section className={`${styles.container}`}>
      <div className={styles.leftSection}>
        <div className={styles.btns}>
          <Button icon={<MdMessage />} text={"Via Support Chat"} />
          <Button icon={<IoIosCall />} text={"Via Call"} />
        </div>
        <Button isOutline={true} icon={<MdMessage />} text={"Via Email Form"} />
        <form>
          <div className={styles.form}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.form}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>
          <div className={styles.form}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>
        </form>
      </div>
      <div></div>
    </section>
  );
}
