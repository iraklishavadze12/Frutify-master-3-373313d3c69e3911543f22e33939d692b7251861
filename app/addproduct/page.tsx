"use client"
import React, { useState } from "react";
import styles from "./addproduct.module.css";
import { useForm } from "react-hook-form";
import ErrorLabel from "../components/ErrorLabel/Erorlabel";
import axios from "axios";

interface CreateProductForm {
  name: string;
  categoryIds: number[];
  sale: string;
  description?: string
  price: number;
}


const AddProduct = () => {
  const [fileName, setFileName] = useState("No file chosen");
  const { register, handleSubmit, reset, formState: { errors } } = useForm<CreateProductForm>();
  const [resp, setResp] = useState('')
  

  const handleFileChange = (event: any) => {

  }

  const onsubmit = async (products: CreateProductForm) => {
    try {
      await axios.post('http://10.10.50.59:3000/products', products);
      reset();
      setResp('პროდუქტი წარმატებით შეიქმნა');
    } catch (err) {
      console.log(err);
      setResp('ვერ ჩაეშვა');
    }
  }
    return (
      <div className={styles.mainWrapper}>
        <form onSubmit={handleSubmit(onsubmit)} className={styles.formWrapper}>
          <h1>Add new fruit</h1>
          <div className={styles.formItem}>
            <label className={styles.label} htmlFor="name">
              Name
            </label>
            <input className={styles.input} 
                    type="text" 
                    id="name"  
                    {...register('name', { required: true })} 
            />
            {errors.name  &&  <ErrorLabel value={"სახელი სავალდებულოა"} />}
          </div>
          <div className={styles.priceWrapper}>
            <div className={`${styles.formItem} ${styles.flexone}`}>
              <label className={styles.label} htmlFor="price">
                Price
              </label>
              <div className={styles.inputWrapper}>
                <input
                  className={styles.input}
                  type="number"
                  id="price"
                  defaultValue="0"
                  {...register('price', {
                    valueAsNumber: true,
                    required: {
                      value: true,
                      message: 'price is required'
                    }

                  })}
                />
                <span className={styles.money}>$</span>
              </div>
              {errors.price && <ErrorLabel value={errors.price.message || 'მიუთითეთ სწორი ფასი'} />}
            </div>
            <div className={`${styles.formItem} ${styles.flexZero}`}>
              <label className={styles.label} htmlFor="sale">
                Sale
              </label>
              <div className={styles.inputWrapper}>
                <input
                  className={styles.input}
                  type="number"
                  id="sale"
                  
                  {...register('sale', {
                    valueAsNumber: true,
                      required: false,
                      min: {
                        value: 1,
                        message: 'min is 1'
                      }
                    }
                  )}
                  defaultValue={"20"}
                />
                <span className={styles.money}>%</span>
              </div>
              {errors.sale && <ErrorLabel value={errors.sale.message || 'error'} />}
            </div>
          </div>

          <div className={styles.formItem}>
            <label className={styles.label} htmlFor="file">
              Name
            </label>
            <div className={styles.customFileInput}>
              <input
                className={styles.fileInput}
                type="file"
                id="file"
                name="file"
                onChange={handleFileChange}
              />
              <label className={styles.fileButton} htmlFor="file">
                Choose File
              </label>
              <span className={styles.fileName}>{__filename}</span>
            </div>
          </div>
          <div className={styles.formItem}>
            <label className={styles.label} htmlFor="description">
              Description
            </label>
            <textarea
              className={styles.input}
              id="description"
              {...register('description', {
                required: true
              })}
            ></textarea>
          </div>
          {errors.description && <ErrorLabel value={'error'}/>}
          <button className={styles.button} type="submit">
            Add fruit
          </button>
          <span>{resp}</span>
        </form>
      </div>
    );
  };


  export default AddProduct;
