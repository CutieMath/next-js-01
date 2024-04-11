import styles from "../../../ui/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";

const SingleProductPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/profile-3.png" alt="profile" fill />
        </div>
        Cutie Egg
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <label>Title</label>
          <input type="text" name="title" placeholder="Cutie Math" />
          <label>Price</label>
          <input type="number" name="price" placeholder="12" />
          <label>Stock</label>
          <input type="number" name="stock" placeholder="23" />
          <label>Color</label>
          <input type="text" name="color" placeholder="red" />
          <label>Size</label>
          <input type="text" name="size" placeholder="New York" />
          <label>Category</label>
          <select name="cat" id="cat">
            <option value="general">Choose a Category</option>
            <option value="pie">Pie</option>
            <option value="mimi">Mimi</option>
            <option value="mino">Mino</option>
          </select>
          <textarea
            name="description"
            id="description"
            rows="10"
            placeholder="Description"
          ></textarea>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;
