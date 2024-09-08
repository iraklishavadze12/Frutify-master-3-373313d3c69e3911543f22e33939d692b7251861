import { useEffect, useState } from "react";
import Button from "../Button/Button";
import CustomCheckbox from "./CustomCheckbox/CustomChekbox";
import FilterSelect from "./FilterSelect/FilterSelect";
import styles from "./Filters.module.css";
import axios from "axios";
import { title } from "process";
import { useRecoilState } from "recoil";
import { categoryState } from "@/app/states";
import { Value } from "sass";

const Filters = () => {
    const [categories, setCategories] = useState<Value[]>([])
    const [category,setCategory] = useRecoilState(categoryState)

    useEffect(() => {
      axios.get(`https://fakestoreapi.com/products/categories`)
        .then((result: any) => {
          const data = result.data.map(((item: any) => {
            return {
              value: item,
              title: item
            }
          }
        ))
          setCategories([{value: 'ALL', title:'ALL'},...data])
        })

    }, [])


  return (
    <div className={styles.mainWrapper}>
      <div className={styles.title}>Filter</div>
      <div className={styles.chart}>
        <span className={styles.label}>Category</span>
        <FilterSelect values={categories} onChange={(item) => {
          console.log(item)
          setCategory(item)
        }}/>
      </div>
      <div className={styles.chart}>
        <span className={styles.label}>Price</span>
        <div className={styles.inputWrapper}>
          <input className={styles.input} type="number"  placeholder="Min"/>
          <input className={styles.input} type="number" placeholder="Max"/>
        </div>
      </div>
      <div className={styles.chart}>
        <span className={styles.label}>sale</span>
        <CustomCheckbox />
      </div>
      <div className={styles.button}>
        <Button text="Apply" />
      </div>
    </div>
  );
};
export default Filters;
