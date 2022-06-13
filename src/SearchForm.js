import React from 'react'
import { useFormik } from 'formik'

export function SearchForm() {
    
    const answers = ['cigar', 'fetch', 'balmy', 'shave', 'found', 'champ', 'chomp'];
    var result;
    const formik = useFormik({
        initialValues: {
            B01: '',
            B02: '',
            B03: '',
            B04: '',
            B05: '',
        },
        onSubmit: values => {
            var greenLetters = '';

            (values.B01 === '') ? greenLetters += '.' : greenLetters += values.B01.toLowerCase();
            (values.B02 === '') ? greenLetters += '.' : greenLetters += values.B02.toLowerCase();
            (values.B03 === '') ? greenLetters += '.' : greenLetters += values.B03.toLowerCase();
            (values.B04 === '') ? greenLetters += '.' : greenLetters += values.B04.toLowerCase();
            (values.B05 === '') ? greenLetters += '.' : greenLetters += values.B05.toLowerCase();
            
            result = greenLetters;
            // console.log(`The result is ${result}`);
            var regex = new RegExp(`${result}`);
            // console.log(`The result is ${regex}`);
            console.log(`this is a new search-------------`)
            // var bar = answers.filter(word => word.match(/c..../g));
            var bar = answers.filter(word => word.match(regex));

            for (let i = 0; i < bar.length; i++){
                console.log(bar[i]);
            }
        }
    });
    return (
        <>
            <form onSubmit={formik.handleSubmit} >
                <h1>WordleAssistant</h1>
                <h2>Helping you narrow down today's Wordle answer.</h2>
                <div className="green-letters">
                    <h3>Enter green letters in their exact spot.</h3>
                    <input onChange={formik.handleChange} value={formik.values.B01} type="text" pattern="[a-zA-Z]" title="No spaces, numbers, or special characters." id="B01" name="B01" maxLength="1" />
                    <input onChange={formik.handleChange} value={formik.values.B02} type="text" pattern="[a-zA-Z]" title="No spaces, numbers, or special characters." id="B02" name="B02" maxLength="1" />
                    <input onChange={formik.handleChange} value={formik.values.B03} type="text" pattern="[a-zA-Z]" title="No spaces, numbers, or special characters." id="B03" name="B03" maxLength="1" />
                    <input onChange={formik.handleChange} value={formik.values.B04} type="text" pattern="[a-zA-Z]" title="No spaces, numbers, or special characters." id="B04" name="B04" maxLength="1" />
                    <input onChange={formik.handleChange} value={formik.values.B05} type="text" pattern="[a-zA-Z]" title="No spaces, numbers, or special characters." id="B05" name="B05" maxLength="1" />
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