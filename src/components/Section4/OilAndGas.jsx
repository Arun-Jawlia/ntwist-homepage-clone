import React from 'react'
import './oilandgas.css'
import oilAndGasImg from '../../assets/asset 8.png'
const OilAndGas = () => {
  return (
    <section className='section-oil-and-gas container grid'>
        <div>
            <img className='customImg' src={oilAndGasImg} alt="" />
        </div>
        <div>
            <h1>
            Oil & Gas
            </h1>

            <p>
            Oil and Gas plants require a high level of control and robustness in their operation due to the high risks to people and environment. 
            </p>

            <p>
            NTWIST helps Oil & Gas customers to analyze historical data, identify opportunities for process control improvements, and reduce variability in any part of the process, thus providing enhanced reliability and safety.
            </p>

            <button className="secondary-btn">
                Read More
            </button>
        </div>

    </section>
  )
}

export default OilAndGas