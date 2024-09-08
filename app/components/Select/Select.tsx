import React from "react";
import styles from "./Select.module.css";
import FilterSelect from "../Filters/FilterSelect/FilterSelect";


const Select = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.blackBackground}>
        <div className={styles.fruit}> Fruits</div>
      </div>
        <FilterSelect values={[
        {
          value: 'low-togihh',
          title: 'price low to high'
        },
        {
          value: 'low-togihh',
          title: 'price low to high'
        }  
        ]}  />
      <div className={styles.selectWrapper}>
      </div>
    </div>
  );
};
export default Select;
