import React from 'react'
import { useFormik } from 'formik'

export function SearchForm() {
    const formik = useFormik({
        initialValues: {
            B01: '',
            B02: '',
            B03: '',
            B04: '',
            B05: '',
        },
        onSubmit: values => {
        alert(JSON.stringify(values,null,2))
    }
   })
    return (
        <>
            <form onSubmit={formik.handleSubmit} >
                <h1>WordleAssistant</h1>
                <h2>Helping you narrow down today's Wordle answer.</h2>
                <div className="green-letters">
                    <h3>Enter green letters in their exact spot.</h3>
                    <input onChange={formik.handleChange} value={formik.values.B01} id="B01" name="B01" maxlength="1" />
                    <input onChange={formik.handleChange} value={formik.values.B02} id="B02" name="B02" maxlength="1" />
                    <input onChange={formik.handleChange} value={formik.values.B03} id="B03" name="B03" maxlength="1" />
                    <input onChange={formik.handleChange} value={formik.values.B04} id="B04" name="B04" maxlength="1" />
                    <input onChange={formik.handleChange} value={formik.values.B05} id="B05" name="B05" maxlength="1" />
                </div>
                {/* <div className="yellow-letters">
                    <h3>Enter any yellow letters.</h3>
                    <input className="form-field" placeholder="" name="B06" maxlength="1" />
                    <input className="form-field" placeholder="" name="B07" maxlength="1" />
                    <input className="form-field" placeholder="" name="B08" maxlength="1" />
                    <input className="form-field" placeholder="" name="B09" maxlength="1" />
                    <input className="form-field" placeholder="" name="B10" maxlength="1" />
                </div>
                <div className="gray-letters">
                    <h3>Enter up to 10 gray letters.</h3>
                    <input className="form-field" placeholder="" name="B11" maxlength="1" />
                    <input className="form-field" placeholder="" name="B12" maxlength="1" />
                    <input className="form-field" placeholder="" name="B13" maxlength="1" />
                    <input className="form-field" placeholder="" name="B14" maxlength="1" />
                    <input className="form-field" placeholder="" name="B15" maxlength="1" />
                    <input className="form-field" placeholder="" name="B16" maxlength="1" />
                    <input className="form-field" placeholder="" name="B17" maxlength="1" />
                    <input className="form-field" placeholder="" name="B18" maxlength="1" />
                    <input className="form-field" placeholder="" name="B19" maxlength="1" />
                    <input className="form-field" placeholder="" name="B20" maxlength="1" />
                </div> */}
                <button type="submit">Submit</button>
                {/* <button>Hint</button> */}
            </form>
        </>
    )
}