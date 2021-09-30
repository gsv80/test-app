
import {useSelector, useDispatch } from 'react-redux';
import { loginIn } from '../../actions';

const Start = () => {

    
    const dispatch = useDispatch();

    return (
        <div>
            <h3>toggle state</h3>
            <button onClick={() => dispatch(loginIn())}>log_in</button>
        </div>
    )
}

export default Start;
