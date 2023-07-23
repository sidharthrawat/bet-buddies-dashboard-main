
import Notification from '../../images/notification.svg'
import MessageIcon from '../../images/message.svg'
import Logo from '../../images/logo.png'
import Arrow from '../../images/arrow.png'
import {BellFilled} from '@ant-design/icons'
import './headerContent.css'

type Props = {}

interface HeaderProps{
  heading: string,
  // notificationIcon: Element,
  // messageIcon: any,
  profile: {
    title: string,
    name: string
  },
  // profileIcon: string,
  // arrowIcon: string
}

const HeaderContent = (props: HeaderProps) => {

  const {heading, profile} = props;

  return (
    <div className='main-div'>
      <div className="wrapper">
        <div className="header-left">
          <h2 className='header-text'>{heading}</h2>

        </div>

          <div className="header-right">
            <div className="icon-container">
              {/* <BellFilled className='notification-icon' height={'31em'} width={'30em'} /> */}
              <img className='header-icon' src={MessageIcon} />
              <img className='header-icon' src={Notification} />
              
              {/* <img src={MessageIcon} className='message' />
              <img src={Notification} /> */}
            </div>
            

            <div className="profile-view">
              <div className='profile-text'>
                <p>{profile.title}</p> 
                <p>{profile.name}</p>
              </div>
              <div className="icon-container-2">
                <img src={Logo} alt='' className='profile-pic' />
                {/* <img src={Arrow} className='arrow-icon' /> */}
               
              </div>
              
             

            </div>

            
          </div>

      </div>
      
    </div>
  )
}

export default HeaderContent