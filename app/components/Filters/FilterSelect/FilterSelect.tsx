import styles from "./FiltersSelect.module.css";

type Value = {
  value: string
  title: string
}


type Props = {
  onChange?: (item: string) => void
  values: Value[]
}



const FilterSelect = (props:Props) => {

    const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      props.onChange?.(e.target.value)
    }
  return (
    <div className={styles.wrapper}>
      <div className={styles.selectWrapper}>
        <select className={styles.customSelect}  onChange={onSelectChange}>
          {
            props.values?.map(item => <option value={item.value}>{item.title}</option>)
          }
        </select>
      </div>
    </div>
  );
};
export default FilterSelect;
