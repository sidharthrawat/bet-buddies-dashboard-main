
import './content.css'
import LiquidityGraph from '../graphs/liquidityPool/LiquidityGraph'

type Props = {}

interface StatCardProps {
    heading: string,
    icon: string,
    statNumber: any
    footer: {
        title: string,
        statNumber: number | string
    }
}


const MainContent = (props: StatCardProps) => {
    const { heading, icon, statNumber, footer } = props;
    return (
        <>
        
             <div className='stat-card'>
            
            <div className="stat-card__header">
                <p className="header__heading">{heading}</p>
            </div>

            <div className="stat-card__info">
                <p className="info__number">
                    {statNumber} 
                </p>
                <div className="stat-card__icon">
                    <img src={icon} alt="" />
                </div>
            </div>


            <div className="stat-card__footer">
                <span className="footer__title">
                    {footer.title}
                </span>
                <span className="footer__number">
                    {footer.statNumber}
                </span>
            </div>
            
            
        </div>
        {/* <LiquidityGraph /> */}
        <br/>
        
        

        </>
           
       
        

       

        

    )
}



export default MainContent

