import React from 'react'
import { useFormik } from 'formik'
import Answers from './Answers';

export function SearchForm() {
    
    const words = ['cigar', 'fetch', 'balmy', 'shave', 'found', 'champ', 'chomp'];
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
            B10: '',
            B11: '',
            B12: '',
            B13: '',
            B14: '',
            B15: '',
            B16: '',
            B17: '',
            B18: '',
            B19: '',
            B20: ''
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
            var foo = words.filter(word => word.match(regex));
            // var foo = Answers.words.filter(word => word.match(regex));
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

            var gy01 = '';
            var gy02 = '';
            var gy03 = '';
            var gy04 = '';
            var gy05 = '';
            var gy06 = '';
            var gy07 = '';
            var gy08 = '';
            var gy09 = '';
            var gy10 = '';

            (values.B11 === '') ? gy01 = '#' : gy01 = values.B11.toLowerCase();
            (values.B12 === '') ? gy02 = '#' : gy02 = values.B12.toLowerCase();
            (values.B13 === '') ? gy03 = '#' : gy03 = values.B13.toLowerCase();
            (values.B14 === '') ? gy04 = '#' : gy04 = values.B14.toLowerCase();
            (values.B15 === '') ? gy05 = '#' : gy05 = values.B15.toLowerCase();
            (values.B16 === '') ? gy06 = '#' : gy06 = values.B16.toLowerCase();
            (values.B17 === '') ? gy07 = '#' : gy07 = values.B17.toLowerCase();
            (values.B18 === '') ? gy08 = '#' : gy08 = values.B18.toLowerCase();
            (values.B19 === '') ? gy09 = '#' : gy09 = values.B19.toLowerCase();
            (values.B20 === '') ? gy10 = '#' : gy10 = values.B20.toLowerCase();

            console.log(`this is the gray search on yellows -------------`)
            var bar6 = bar5.filter(word => !word.match(gy01));
            var bar7 = bar6.filter(word => !word.match(gy02));
            var bar8 = bar7.filter(word => !word.match(gy03));
            var bar9 = bar8.filter(word => !word.match(gy04));
            var bar10 = bar9.filter(word => !word.match(gy05));
            var bar11 = bar10.filter(word => !word.match(gy06));
            var bar12 = bar11.filter(word => !word.match(gy07));
            var bar13 = bar12.filter(word => !word.match(gy08));
            var bar14 = bar13.filter(word => !word.match(gy09));
            var bar15 = bar14.filter(word => !word.match(gy10));

            for (let i = 0; i < bar15.length; i++){
                console.log(bar15[i]);
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
                <div className="gray-letters">
                    <h3>Enter up to 10 gray letters.</h3>
                    <input onChange={formik.handleChange} value={formik.values.B11} type="text" pattern="[a-zA-Z]" title="No spaces, numbers, or special characters." id="B11" name="B11" maxLength="1" />
                    <input onChange={formik.handleChange} value={formik.values.B12} type="text" pattern="[a-zA-Z]" title="No spaces, numbers, or special characters." id="B12" name="B12" maxLength="1" />
                    <input onChange={formik.handleChange} value={formik.values.B13} type="text" pattern="[a-zA-Z]" title="No spaces, numbers, or special characters." id="B13" name="B13" maxLength="1" />
                    <input onChange={formik.handleChange} value={formik.values.B14} type="text" pattern="[a-zA-Z]" title="No spaces, numbers, or special characters." id="B14" name="B14" maxLength="1" />
                    <input onChange={formik.handleChange} value={formik.values.B15} type="text" pattern="[a-zA-Z]" title="No spaces, numbers, or special characters." id="B15" name="B15" maxLength="1" />
                    <br></br>
                    <input onChange={formik.handleChange} value={formik.values.B16} type="text" pattern="[a-zA-Z]" title="No spaces, numbers, or special characters." id="B16" name="B16" maxLength="1" />
                    <input onChange={formik.handleChange} value={formik.values.B17} type="text" pattern="[a-zA-Z]" title="No spaces, numbers, or special characters." id="B17" name="B17" maxLength="1" />
                    <input onChange={formik.handleChange} value={formik.values.B18} type="text" pattern="[a-zA-Z]" title="No spaces, numbers, or special characters." id="B18" name="B18" maxLength="1" />
                    <input onChange={formik.handleChange} value={formik.values.B19} type="text" pattern="[a-zA-Z]" title="No spaces, numbers, or special characters." id="B19" name="B19" maxLength="1" />
                    <input onChange={formik.handleChange} value={formik.values.B20} type="text" pattern="[a-zA-Z]" title="No spaces, numbers, or special characters." id="B20" name="B20" maxLength="1" />
                </div>
                <button type="submit">Submit</button>
                {/* <button>Hint</button> */}
            </form>
        </>
    )
}