// Icons
import HomeIcon from '@material-ui/icons/Home';
import CounterIcon from '@material-ui/icons/RepeatOne';
import SettingsIcon from '@material-ui/icons/Settings';
import LoremIpsumIcon from '@material-ui/icons/Subject';
import PersonIcon from '@material-ui/icons/Person';
import BallotIcon from '@material-ui/icons/Ballot';

const drawerMenuItems = [
  {text:'Home', icon:<HomeIcon/>, to:'/', },
  {text:'Lab', icon:<BallotIcon/>,
    subitems:[
      {text:'Lorem Ipsum', icon:<LoremIpsumIcon/>, to:'/lorem-ipsum', },
      {text:'Counter', icon:<CounterIcon/>, to:'/counter', },
      {text:'Someone', icon:<PersonIcon/>, to:'/someone', },
    ]
  },
  {text:'Settings', icon:<SettingsIcon/>, to:'/settings', },
]

export { drawerMenuItems }
