import Pagination from "../../ui/dashboard/pagination/pagination";
import Search from "../../ui/dashboard/search/search";
import styles from "../../ui/dashboard/products/products.module.css";
import Image from "next/image";
import Link from "next/link";

const ProductsPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a product" />
        <Link href="/dashboard/products/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Create At</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.product}>
                <Image
                  src="/profile-4.png"
                  alt="Profile"
                  width={40}
                  height={40}
                  className={styles.productImage}
                />
                Cutie Product
              </div>
            </td>
            <td>A cute pie</td>
            <td>$20,000</td>
            <td>06/06/2023</td>
            <td>Active</td>
            <td>
              <div className={styles.buttons}>
                <Link href="/dashboard/products/testid">
                  <button className={`${styles.button} ${styles.view}`}>
                    View
                  </button>
                </Link>
                <button className={`${styles.button} ${styles.delete}`}>
                  Delete
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default ProductsPage;
