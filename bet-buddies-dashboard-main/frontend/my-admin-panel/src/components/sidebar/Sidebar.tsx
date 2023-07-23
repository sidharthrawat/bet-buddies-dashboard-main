
import {Menu} from 'antd'
import Logo from '../../images/logo.png'
import {useNavigate} from 'react-router-dom'
import type { MenuProps, MenuTheme } from 'antd/es/menu';
import {
    MoneyCollectFilled,
    CreditCardFilled,
    HomeFilled,
    DribbbleCircleFilled,
    ControlFilled,
    AlipayCircleFilled,
    SettingFilled,
    DollarCircleFilled,
    UserOutlined
} from '@ant-design/icons'
import './sidebar.css'

type Props = {}

type MenuItem = Required<MenuProps>['items'][number]

function getItem(
    label: React.ReactNode,
    key?: React.Key | null,
    icon?: React.ReactNode,
    children?: MenuItem[],
  ): MenuItem {
    return {
      label,
      key,
      icon,
      children,
      
    } as MenuItem;
  }

  const items: MenuItem[] = [
    getItem('Dashboard', '1', <HomeFilled />),
    getItem('Transactions', '2', <DollarCircleFilled />), 
    getItem('Liquidity Pool', '3', <MoneyCollectFilled />,),
    getItem('Sports', '4', <DribbbleCircleFilled />,),
    getItem('Casino', '5', <ControlFilled />),
    getItem('Add Crypto Platform', '6', <AlipayCircleFilled />),
    getItem('Add Crypto Currency', '7', <CreditCardFilled />), 
    getItem('Users', 8, <UserOutlined />),
    getItem('Settings', '9', <SettingFilled />,)
   
    
  ];


function Sidebar({}: Props) {
    const navigate= useNavigate();

   
      
    const handleClick = (item:any) => {

        var switchKey:any = item.key;
        console.log("Switch key is " + switchKey);
        


        switch(switchKey){
            case '1': 
            {
                navigate('/dashboard');
                break;
            }

            case '2':
            {
                navigate('/transactions/all-transactions');
                break;
            }
            case '3': 
            {
                navigate('/liquidity-pool');
                break;
            }
            case '4': 
            {
                navigate('/sports');
                break;
            }
            case '5': 
            {
                navigate('');
                break;
            }
            case '6': 
            {
                navigate('/add-platform');
                break;
            }
            case '7': 
            {
                navigate('/add-currency');
                break;
            }
            case '8':
            {
                navigate('/users');
                break;
            }
            case '9.1': 
            {
                navigate('');
                break;
            }
            case '9.2': 
            {
                navigate('');
                break;
            }
            case '9.3': 
            {
                navigate('');
                break;
            }
            case '9.4': 
            {
                navigate('');
                break;
            }



            


        }
    }
    

  return (
    <div>
        <div className='sidebar-header'>
            <img src={Logo} alt="header" className='image-header' />
            <h3 className='heading-sidebar'>BET BUDDIES</h3>
        </div>
        
        <Menu
        className='menu-sidebar'
        mode='inline'
        theme='dark'
        items={items}
        onClick={handleClick}
        // items={[
        //     {
        //         label: "Home",
        //         key: "home",
        //         icon: (<HomeOutlined />),
        //         onClick: handleClick2
        //     },
        //     {
        //         label: "Transactions",
        //         key: "transactions",
        //         icon: (<DollarOutlined />),
        //         children: [
        //             {
        //                 label: "All Transactions",
        //                 key : "all-transactions",
        //                 onClick: handleClick
        //             },
        //             {
        //                 label: "Withdrawls",
        //                 key: "withdrawls",
        //                 onClick: ()=>{navigate('/withdrawls')}
        //             },
        //             {
        //                 label: "Deposited",
        //                 key: "deposited"
        //             }
        //         ]
        //     },
        //     {
        //         label: "Liquidity Pool",
        //         key: "liquidity-pool",
        //         icon: (<TransactionOutlined />)
                
        //     },
        //     {
        //         label: "View matches",
        //         key: "view-matches",
        //         icon: (<PlaySquareOutlined />),
        //         children: [
        //         {
        //             label: "All matches",
        //             key: "all-matches",
        //             onClick: handleAllMatches
        //         },
        //         {
        //             label: "Live matches",
        //             key: "live-matches",
        //             onClick: handleLiveMatches
        //         },
        //         {
        //             label: "Top matches",
        //             key: "top-matches"
        //         }
        //     ]
        //     },
        //     {
        //         label: "Add Crypto Platform",
        //         key: "add-crypto-platform",
        //         icon: (<AlipayCircleOutlined />),
        //         onClick: handleCLick3
        //     },  
        //     {
        //         label: "Add Crypto Currency",
        //         key: "add-currency",
        //         icon: (<CreditCardFilled />),
        //         // icon: (),
        //         onClick: handleClick4

        //     },
        //     {
        //         label: "Users",
        //         key: "users",
        //         icon: (<UserOutlined />),
        //         onClick: handleClick5
        //     },
        //     {
        //         label: "Settings",
        //         key: "settings",
        //         icon: (<SettingOutlined />),
        //         children: [
        //             {
        //                 label: "General",
        //                 key: "general"
        //             },
        //             {
        //                 label: "Overview",
        //                 key: "overview"
        //             }
        //         ]
        //     }
            

        // ]}
        />
        
    </div>
  )
}

export default Sidebar