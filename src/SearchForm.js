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
            B06: '',
            B07: '',
            B08: '',
            B09: '',
            B10: ''
        },
        onSubmit: values => {
            var greenLetters = '';

            (values.B01 === '') ? greenLetters += '.' : greenLetters += values.B01.toLowerCase();
            (values.B02 === '') ? greenLetters += '.' : greenLetters += values.B02.toLowerCase();
            (values.B03 === '') ? greenLetters += '.' : greenLetters += values.B03.toLowerCase();
            (values.B04 === '') ? greenLetters += '.' : greenLetters += values.B04.toLowerCase();
            (values.B05 === '') ? greenLetters += '.' : greenLetters += values.B05.toLowerCase();
            
            result = greenLetters;
            var regex = new RegExp(`${result}`);
            console.log(`this is a new green search-------------`)
            var foo = answers.filter(word => word.match(regex));
            for (let i = 0; i < foo.length; i++){
                console.log(foo[i]);
            }

            var y1 = '';
            var y2 = '';
            var y3 = '';
            var y4 = '';
            var y5 = '';

            (values.B06 === '') ? y1 = '.' : y1 = values.B06.toLowerCase();
            (values.B07 === '') ? y2 = '.' : y2 = values.B07.toLowerCase();
            (values.B08 === '') ? y3 = '.' : y3 = values.B08.toLowerCase();
            (values.B09 === '') ? y4 = '.' : y4 = values.B09.toLowerCase();
            (values.B10 === '') ? y5 = '.' : y5 = values.B10.toLowerCase();

            console.log(`this is the yellow search on greens -------------`)
            var bar = foo.filter(word => word.match(y1));
            var bar2 = bar.filter(word => word.match(y2));
            var bar3 = bar2.filter(word => word.match(y3));
            var bar4 = bar3.filter(word => word.match(y4));
            var bar5 = bar4.filter(word => word.match(y5));            
            
            for (let i = 0; i < bar5.length; i++){
                console.log(bar5[i]);
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
                <div className="yellow-letters">
                    <h3>Enter any yellow letters.</h3>
                    <input onChange={formik.handleChange} value={formik.values.B06} type="text" pattern="[a-zA-Z]" title="No spaces, numbers, or special characters." id="B06" name="B06" maxLength="1" />
                    <input onChange={formik.handleChange} value={formik.values.B07} type="text" pattern="[a-zA-Z]" title="No spaces, numbers, or special characters." id="B07" name="B07" maxLength="1" />
                    <input onChange={formik.handleChange} value={formik.values.B08} type="text" pattern="[a-zA-Z]" title="No spaces, numbers, or special characters." id="B08" name="B08" maxLength="1" />
                    <input onChange={formik.handleChange} value={formik.values.B09} type="text" pattern="[a-zA-Z]" title="No spaces, numbers, or special characters." id="B09" name="B09" maxLength="1" />
                    <input onChange={formik.handleChange} value={formik.values.B10} type="text" pattern="[a-zA-Z]" title="No spaces, numbers, or special characters." id="B10" name="B10" maxLength="1" />
                </div>
                {/* <div className="gray-letters">
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