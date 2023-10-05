import React from 'react'
import './mineralprocessing.css'
import mineralProcessingImg from '../../assets/asset 7.jpeg'
const MineralProcessing = () => {
  return (
    <section className='section-mineral-processing container grid'>
        <div>
            <h1>
            Mineral Processing
            </h1>

            <p>
            NTWIST offers a number of solutions for mills, concentrators, and leach plants. Our solutions help operations to reduce the effect of feed variability, avoid downtime and increase peak throughput while decreasing energy and reagent consumption.
            </p>

            <button className="secondary-btn">
                Read More
            </button>
        </div>
        <div>
            <img className='customImg' src={mineralProcessingImg} alt="" />
        </div>

    </section>
  )
}

export default MineralProcessing