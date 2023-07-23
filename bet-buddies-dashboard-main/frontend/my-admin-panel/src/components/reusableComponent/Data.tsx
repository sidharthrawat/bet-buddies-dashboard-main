
import './data.css'

type Props = {}

interface DataProps{
    graphHeading: String,
    image: any,
    heading: String,
    total: Number | any,
    extra: string
}

function Data(props: DataProps) {
    const {graphHeading, image, heading, total, extra} = props;
  return (
        <>
        
        <div className='pool-graph'>
            
            <div className='graph'>
                <img src={image}  />
                <div className='graph-data'>
                    <h5 className='graph-data-heading'>{heading}</h5>
                    <h3 className='graph-data-total'>{total}</h3>
                    <div className='extra'>
                        <p className='graph-data-extra'>{extra}</p>

                    </div>
                </div>
            </div>
                

        </div>
        </>
  )
}

export default Data