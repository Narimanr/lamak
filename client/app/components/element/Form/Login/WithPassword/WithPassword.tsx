import { Formik, Form , Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';

import styles from './WithPassword.module.scss';

export interface FormData {
    email: string,
    password: string,
}

interface FormProps {
    pullData: (data: FormData) => void;
    requestError?: string;
}


const WithPasswordSchema = Yup.object().shape({
    email: Yup.string()
        .email('ایمیل نامعتبر است')
        .required('ورود ایمیل الزامی‌ است'),
    password: Yup.string()
        .min(4, 'حداقل طور رمز عبور ۴ است')
        .max(20,'طور رمز عبور نمی‌تواند بیش  از ۲۰ باشد')
        .required('ورود رمز عبور الزامی است')
 });

export default function WithPassword(props: FormProps) {
    return (
        <div className={styles.WithPasswordForm}>
            <div className={styles.form}>
                <Formik
                initialValues={{
                    email: '',
                    password: '',
                    }}
                validationSchema={WithPasswordSchema}
                onSubmit={values => {
                    // same shape as initial values
                    const data = props.pullData(values);
                }}
                >
                    <Form className={styles.formContainer}>
                        <div className={styles.formItem}>
                            <label
                                className={styles.formLabel}
                                htmlFor="email"
                            >
                                ایمیل
                            </label>
                            <Field
                               name="email"
                                id="email"
                                type="email"
                                placeholder="test@test.com"
                                className={`${styles.formInput} ${styles.formInputLtr}`}
                            />
                            <div className={styles.formError}>
                                <ErrorMessage name="email" />
                            </div>
                        </div>
                        
                        <div className={styles.formItem}>
                            <label
                                className={styles.formLabel}
                                htmlFor="password"
                            >
                                رمز عبور
                            </label>
                            <Field
                                name="password"
                                id="password"
                                type="password"
                                placeholder="رمز عبور"
                                className={`${styles.formInput}`}
                            />
                            <div className={styles.formError}>
                                <ErrorMessage name="password" />
                            </div>
                        </div>
                        
                    
                        <div className={styles.formAction}>
                            <button className={styles.formButton} type="submit">ورود به حساب کاربری</button>
                        </div>

                        <div className={styles.requestError}>
                                {props.requestError}
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    );
}

