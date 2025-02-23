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
    const { isFetching } = useSelector((state) => state.auth);

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

                console.log("Login cavabı:", response.payload);

                if (response.payload?._id) {
                    navigate(-1);
                } else {
                    setPasswordError(response.payload?.message || "Şifrə səhvdir");
                }
            } catch (error) {
                setPasswordError("Xəta baş verdi. Zəhmət olmasa yenidən cəhd edin.");
            }
        },
    });

    const navigation = useNavigate();
    const goRegister = () => {
        navigation('/register')
    }

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
                  <p onClick={goRegister} className={styles.txt}>Hesab Yarat</p>
                  <p className={styles.txt}>Şifrə Unutmusuz?</p>
                </div>
            </form>
        </div>
    );
};

export default Login;