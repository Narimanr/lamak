import { Formik, Form , Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';

import { iDesign } from '@/interfaces/Interfaces';

import styles from './DesignerForm.module.scss';


interface FormProps {
    pullData: (data: iDesign) => void;
    requestError?: string;
}


const DesignerSchema = Yup.object().shape({
    windowW: Yup.number()
        .moreThan(1, 'عدد نمی‌تواند کوچکتر از ۱ باشد')
        .required('وارد کردن عرض طرح ضروری است'),
    windowH: Yup.number()
        .moreThan(1, 'عدد نمی‌تواند کوچکتر از ۱ باشد')
        .required('وارد کردن ارتفاع طرح ضروری است'),
    partition: Yup.number()
        .min(1, 'حداقل تقسیم بندی عرضی برابر با ۱ می‌باشد')
        .max(3,'حداکثر تقسیم بندی عرضی برابر با ۳ می‌باشد')
        .required('انتخاب نوع تقسیم بندی عرضی ضروری است')
 });

export default function DesignerForm(props: FormProps) {    
    return (
        <div className={styles.DesignerForm}>
            <div className={styles.form}>
                <Formik
                    initialValues={{
                        windowW: 0,
                        windowH: 0,
                        partition: 1
                    }}
                    validationSchema={DesignerSchema}
                    onSubmit={values => {
                        // same shape as initial values
                        const data = props.pullData(values);
                        }}
                >
                    <Form className={styles.formContainer}>
                        <div className={styles.formItem}>
                            <label
                                className={styles.formLabel}
                                htmlFor="windowW"
                            >
                                عرض طرح
                            </label>
                            <Field
                               name="windowW"
                                id="windowW"
                                type="number"
                                placeholder="عرض طرح (به میلی متر)"
                                className={`${styles.formInput} ${styles.formInputLtr}`}
                            />
                            <div className={styles.formError}>
                                <ErrorMessage name="windowW" />
                            </div>
                        </div>
                        
                        <div className={styles.formItem}>
                            <label
                                className={styles.formLabel}
                                htmlFor="windowH"
                            >
                                ارتفاع طرح
                            </label>
                            <Field
                                name="windowH"
                                id="windowH"
                                type="number"
                                placeholder="ارتفاع طرح (به میلی متر)"
                                className={`${styles.formInput} ${styles.formInputLtr}`}
                            />
                            <div className={styles.formError}>
                                <ErrorMessage name="windowH" />
                            </div>
                        </div>

                        <div className={styles.formItem} id="partition-radio">
                            <span
                                className={styles.formLabel}
                            >
                                تقسیم بندی عرضی
                            </span>
                            <div role="group" aria-labelledby="partition-radio" >
                                <Field type="radio" name="partition" value="1" id="partition-1" checked/>
                                <label
                                    className={styles.formLabelRadio}
                                    htmlFor="partition-1">
                                    تکی
                                </label>

                                <Field type="radio" name="partition" value="2" id="partition-2"  />
                                <label
                                    className={styles.formLabelRadio}
                                    htmlFor="partition-2">
                                    دو تایی
                                </label>

                                <Field type="radio" name="partition" value="3" id="partition-3"/>
                                <label
                                    className={styles.formLabelRadio}
                                    htmlFor="partition-3">
                                    سه تایی
                                </label>
                            </div>

                            <div className={styles.formError}>
                                <ErrorMessage name="partition" />
                            </div>
                        </div>
                        
                    
                        <div className={styles.formAction}>
                            <button className={styles.formButton} type="submit">ارسال ابعاد</button>
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

