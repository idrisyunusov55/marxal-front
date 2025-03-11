import { useFormik } from "formik";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import styles from "./Login.module.scss";
import { loginThunk } from "../../../redux/redurces/authSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [passwordError, setPasswordError] = useState("");
  const { isFetching, user } = useSelector((state) => state.auth);

  // Əgər istifadəçi artıq daxil olubsa, onu əsas səhifəyə yönləndir
  React.useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: async (values) => {
      setPasswordError("");

      try {
        const trimmedValues = {
          username: values.username.trim(),
          password: values.password.trim(),
        };

        const response = await dispatch(loginThunk(trimmedValues));

        if (response.payload?._id) {
          navigate("/"); // Login uğurla tamamlandıqdan sonra əsas səhifəyə yönləndir
        } else {
          setPasswordError(response.payload?.message || "Şifrə səhvdir");
        }
      } catch (error) {
        setPasswordError("Xəta baş verdi. Zəhmət olmasa yenidən cəhd edin.");
      }
    },
  });

  return (
    <div className={styles.loginContainer}>
      <form className={styles.loginForm} onSubmit={formik.handleSubmit}>
        <label htmlFor="username">İstifadəçi Adınız</label>
        <input
          id="username"
          name="username"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.username}
        />

        <label htmlFor="password">Şifrə</label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />

        {passwordError && <div className={styles.error}>{passwordError}</div>}

        <button type="submit" disabled={isFetching}>
          {isFetching ? "Giriş edilir..." : "Daxil ol"}
        </button>

        <div className={styles.links}>
          <p onClick={() => navigate("/register")} className={styles.txt}>
            Hesab Yarat
          </p>
          <p className={styles.txt}>Şifrə Unutmusuz?</p>
        </div>
      </form>
    </div>
  );
};

export default Login;