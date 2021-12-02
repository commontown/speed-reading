import { dispatch } from "framework"
import './timeOver.scss';
import clock from '../../assets/contentPage/clock.png';

export default function TimeOver(props) {
    const changePageStatus = () => {
        dispatch('counter/changePageStatus', { status: 3 });
        props.history.push("/question-end")
    }
    return (
        <div className="right-timeOver">
            <img src={clock} alt="clock" className="clock-icon" />
            <p className="timeover-tit">TIME'S UP</p>
            <div className="done-button" onClick={changePageStatus}>
                <p className="btn-tit">I'm Done</p>
                <p className="btn-subtit">Start with the answer questions</p>
            </div>
        </div>
    )
}
