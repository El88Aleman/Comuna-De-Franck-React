import { IoIosPerson } from "react-icons/io";
import { LuConstruction } from "react-icons/lu";
import { FaHouseChimney } from "react-icons/fa6";
import { MdOutlineRecycling } from "react-icons/md";
import CountUp from "react-countup";
import { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
import "./CountAnimate.css";
const CountAnimate = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
    >
      <div className="countAnimate">
        <div className="personas">
          <span>
            <IoIosPerson size={40} />
          </span>
          <span>
            <h3>
              +
              {counterOn && (
                <CountUp start={0} end={10000} duration={4} delay={0} />
              )}
            </h3>
            <span>
              <h4>HABITANTES</h4>
            </span>
          </span>
        </div>
        <div className="construccion">
          <span>
            <LuConstruction size={40} />
          </span>
          <span>
            <h3>
              +
              {counterOn && (
                <CountUp start={0} end={2300} duration={4} delay={0} />
              )}
            </h3>
            <span>
              <h4>OBRAS TERMINADAS</h4>
            </span>
          </span>
        </div>
        <div className="casas">
          <span>
            <FaHouseChimney size={40} />
          </span>
          <span>
            <h3>
              +
              {counterOn && (
                <CountUp start={0} end={163} duration={4} delay={0} />
              )}
            </h3>
            <span>
              <h4>VIVIENDAS OTORGADAS</h4>
            </span>
          </span>
        </div>
        <div className="desechosReciclados">
          <span>
            <MdOutlineRecycling size={40} />
          </span>
          <span></span>
          <span>
            <h3>
              +
              {counterOn && (
                <CountUp start={0} end={2000} duration={4} delay={0} />
              )}
            </h3>
            <h4>TONELADAS RECICLADAS</h4>
          </span>
        </div>
      </div>
    </ScrollTrigger>
  );
};

export default CountAnimate;
