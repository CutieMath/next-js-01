import styles from "../../../ui/dashboard/users/singleUser/singleUser.module.css";
import Image from "next/image";

const SingleUserPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/profile-2.png" alt="profile" fill />
        </div>
        Cutie Math
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <label>Username</label>
          <input type="text" name="username" placeholder="Cutie Math" />
          <label>Email</label>
          <input type="email" name="email" placeholder="CM@email.com" />
          <label>Password</label>
          <input type="password" name="password" placeholder="password" />
          <label>Phone</label>
          <input type="text" name="phone" placeholder="+123123" />
          <label>Address</label>
          <textarea
            name="address"
            id="address"
            rows="16"
            placeholder="Address"
          ></textarea>
          <label>Is Admin?</label>
          <select name="isAdmin" id="isAdmin">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <label>Is Active?</label>
          <select name="isActive" id="isActive">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;
