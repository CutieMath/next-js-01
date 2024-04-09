import styles from "../../../ui/dashboard/products/addProduct/addProduct.module.css";

const AddProductPage = () => {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <input type="text" placeholder="title" name="title" required />
        <select name="cat" id="cat">
          <option value="general">Choose a Category</option>
          <option value="pie">Pie</option>
          <option value="mimi">Mimi</option>
          <option value="mino">Mino</option>
        </select>
      </form>
    </div>
  );
};

export default AddProductPage;
