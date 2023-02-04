import './index.scss'
import {Link} from 'react-router-dom'
// import LogoS from './src/assets/images/logo-s.png'
// import LogoSubtitle from './src/assets/images/logo-sub.png'

const Sidebar = ()=> (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            {/* <img src={LogoS} alt="logo"/>
            <img src={LogoSubtitle} alt="slobodone"/> */}
        </Link>
    </div> 
)



export default Sidebar