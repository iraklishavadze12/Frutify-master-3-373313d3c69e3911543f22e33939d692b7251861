"use client";
import styles from "./buynow.module.css";
import { fruits } from "../../public/CONSTS/Fruit";
import { useParams, useSearchParams } from "next/navigation";
import Button from "../components/Button/Button";
import { useEffect, useState } from "react";
import axios from "axios";
import type { Fruit } from "../components/FruitCard/FruitCard";





const BuyNow = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id"); // Get the 'name' query parameter

  const [product,setProduct] = useState<Fruit>()


  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
    .then(result => {
      setProduct(result.data)
      console.log(result.data)

    })
  },[])







  return (
    <div className={styles.mainWrapper}>
      <div className={styles.fruitImage}>
        <img src={product?.image} alt="xili" />
        <div className={styles.iconsWrapper}>
          <div className={styles.iconWrapper}>
            <img src={"/images/pen.svg"} />
          </div>
          <div className={styles.iconWrapper}>
            <img src={"/images/trash.svg"} />
          </div>
        </div>
      </div>
      <div className={styles.description}>
        <div className={styles.descriptionWrapper}>
          <div className={styles.nameAndDescription}>
            <div className={styles.name}>{product?.id}</div>
            <div className={styles.descriptionText}>
              {product?.description}
            </div>
          </div>
          <div className={styles.price}>{product?.price}</div>
        </div>
        <div className={styles.button}>
          <Button text="Buy Now" />
        </div>
      </div>
    </div>
  );
};
export default BuyNow;
