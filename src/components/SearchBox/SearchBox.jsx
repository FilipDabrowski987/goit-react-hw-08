import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/filtersSlices";
import { Formik, Form, Field } from 'formik';
import './SearchBox.css'

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filters.name);

return (
    <Formik
            >
            <Form className='search-form'>
                <label>Find contacts by name</label>
                <br />
                <Field className='search-form-field'
                    type="text"
                    name="searchbox"
                    value={filter}
                    onChange={e => dispatch(setFilter(e.target.value))}
                />
            </Form>
    </Formik>
  );
};

export default SearchBox