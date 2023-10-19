import { useFormik } from 'formik'
import React from 'react'
import * as Yup from 'yup';
import axios from 'axios'


const addSupplierValidationSchema = Yup.object().shape({
    name: Yup.string().required("Company Name boş bırakılmaz"),
    unitPrice: Yup.number()
        .typeError("Unit Price bir sayı olmalıdır")
        .positive("Unit Price 0'dan büyük olmalıdır")
        .required("Unit Price boş bırakılmaz"),
    unitsInStock: Yup.number()
        .typeError("Stock bir sayı olmalıdır")
        .positive("Stock 0'dan büyük olmalıdır")
        .required("Stock boş bırakılmaz"),
    quantityPerUnit: Yup.number()
        .typeError("Quantity Per Unit bir sayı olmalıdır")
        .positive("Quantity Per Unit 0'dan büyük olmalıdır")
        .required("Quantity Per Unit boş bırakılmaz")
});

function FormikPost() {


    const formik = useFormik({
        initialValues: {
            name: "",
            unitPrice: "",
            unitsInStock: "",
            quantityPerUnit: ""
        },
        validationSchema:addSupplierValidationSchema,
        onSubmit: (values) => {
            console.log(values);

                axios.post('https://northwind.vercel.app/api/products', values)
                .then(res => {
                    console.log('Success!')
                })
                .catch((error) => {
                    console.error('Error:', error);
                  });
        }
    })

    

    return (<>
        <form onSubmit={formik.handleSubmit}>
            <div>
                <label htmlFor="">Name</label>
                <input type='text' name='name' onChange={formik.handleChange}
                    value={formik.values.name}  />
                {formik.errors.name ? <p style={{color:'red'}}>{formik.errors.name}</p> : <></>}
            </div>
            <div>
                <label htmlFor="">Unit Price</label>
                <input type='text' name='unitPrice' onChange={formik.handleChange}
                    value={formik.values.unitPrice}  />
                      {formik.errors.unitPrice ? <p style={{color:'red'}}>{formik.errors.unitPrice}</p> : <></>}
            </div>
            <div>
                <label htmlFor="">Stock</label>
                <input type='text' name='unitsInStock' onChange={formik.handleChange}
                    value={formik.values.unitsInStock}  />
                     {formik.errors.unitsInStock ? <p style={{color:'red'}}>{formik.errors.unitsInStock}</p> : <></>}
            </div>
            <div>
                <label htmlFor="">Quantity Per Unit</label>
                <input type='text' name='quantityPerUnit' onChange={formik.handleChange}
                    value={formik.values.quantityPerUnit}  />
                     {formik.errors.quantityPerUnit ? <p style={{color:'red'}}>{formik.errors.quantityPerUnit}</p> : <></>}
            </div>
            <div>
                <button type='submit'>Add</button>
            </div>
        </form>
    </>)
}

export default FormikPost;
