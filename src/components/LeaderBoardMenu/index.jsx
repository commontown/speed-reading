import './styles.scss';
import NextArrows from '../../assets/menu/next_arrows.png';
import Rocket from '../../assets/menu/rocket.png';
import Crown from '../../assets/leaderBoard/crown.png';
export default function LeaderBoardMenu(props) {
    const goBack = () => {
        props.history.push("/question-end");
    };
    return (
        <div className="leader-board-menu">
            <img src={NextArrows} alt="NextArrows" className="left-icon" onClick={goBack} />
            {
                props.location.pathname == "/leader-board" ?
                    <div className="crown-icon-area">
                        Leaderboard
                        <img src={Crown} alt="Crown" className="clock-icon" />
                    </div> : null
            }
                {
                props.location.pathname == "/statistics" ?
                    <div className="crown-icon-statistics">
                        Statistics
                    </div> : null
            }
            <img src={Rocket} alt="Rocket" className="rocket-icon" />
        </div>
    )
}
