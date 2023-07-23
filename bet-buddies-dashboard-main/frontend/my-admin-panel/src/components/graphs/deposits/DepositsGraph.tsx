import './depositsGraph.css'

type Props = {}


function DepositsGraph({}: Props) {
  return (
    <>
      <div className='deposit-graph-container'>
        <div deposit-graph-header>
          <h3>Total deposits</h3>
          <h2>$443.5</h2>
        </div>
      </div>
    </>
  )
}

export default DepositsGraph