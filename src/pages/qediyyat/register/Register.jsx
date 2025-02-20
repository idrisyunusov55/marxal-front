import React from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Register.module.scss";
import { registerThunk } from "../../../redux/redurces/authSlice";
import * as Yup from "yup";

// Form validasiya sxemi
const validationSchema = Yup.object({
  name: Yup.string().required("Ad tələb olunur"),
  surname: Yup.string().required("Soyad tələb olunur"),
  username: Yup.string().required("İstifadəçi adı tələb olunur"),
  email: Yup.string().email("Düzgün email daxil edin").required("Email tələb olunur"),
  password: Yup.string().min(6, "Şifrə ən azı 6 simvol olmalıdır").required("Şifrə tələb olunur"),
});

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isFetching, isError, errorMessage } = useSelector((state) => state.auth);

  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      username: "",
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await dispatch(registerThunk(values)).unwrap();
        if (response._id) {
          alert("Qeydiyyat uğurla tamamlandı!");
          navigate("/login"); // Login səhifəsinə yönləndir
        }
      } catch (error) {
        console.error("Qeydiyyat xətası:", error); // Xəta mesajını konsola yaz
      }
    },
  });

  return (
    <div className={styles.registerContainer}>
      <form className={styles.registerForm} onSubmit={formik.handleSubmit}>
        <h2>Qeydiyyat</h2>

        {/* Ad və Soyad yan-yana */}
        <div className={styles.nameFields}>
          <div>
            <label htmlFor="name">Ad</label>
            <input
              id="name"
              name="name"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.name}
              placeholder="Adınızı daxil edin"
            />
            {formik.errors.name && (
              <div className={styles.error}>{formik.errors.name}</div>
            )}
          </div>
          <div>
            <label htmlFor="surname">Soyad</label>
            <input
              id="surname"
              name="surname"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.surname}
              placeholder="Soyadınızı daxil edin"
            />
            {formik.errors.surname && (
              <div className={styles.error}>{formik.errors.surname}</div>
            )}
          </div>
        </div>

        <label htmlFor="username">İstifadəçi adı</label>
        <input
          id="username"
          name="username"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.username}
          placeholder="İstifadəçi adınızı daxil edin"
        />
        {formik.errors.username && (
          <div className={styles.error}>{formik.errors.username}</div>
        )}

        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          placeholder="Emailinizi daxil edin"
        />
        {formik.errors.email && (
          <div className={styles.error}>{formik.errors.email}</div>
        )}

        <label htmlFor="password">Şifrə</label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          placeholder="Şifrənizi daxil edin"
        />
        {formik.errors.password && (
          <div className={styles.error}>{formik.errors.password}</div>
        )}

        <button type="submit" disabled={isFetching}>
          {isFetching ? "Qeydiyyat davam edir..." : "Qeydiyyat"}
        </button>

        {isError && <div className={styles.error}>{errorMessage}</div>}

        <div className={styles.links}>
          <Link to="/login">Hesabınız var? Daxil olun</Link>
          <Link to="/forgot-password">Şifrəmi unutdum</Link>
        </div>
      </form>
    </div>
  );
};

export default Register;