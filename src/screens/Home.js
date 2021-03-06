import React from 'react'
import GlassCard from '../components/Glasscard'
import Index from '../components/Index'
import background from '../Assets/Images/1.jpg'
import { Container, Row, Col } from 'react-bootstrap'
import { useSpring, animated, config } from 'react-spring';

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

export default function Home() {
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: config.default }))

    return (
        <div>
            <div className="app">
                <div className="container"  >

                    <div className="row">
                        <div className="col-lg-3">
                            <div className="app__sidebar" >
                                <animated.div >
                                    side
                                </animated.div>
                            </div>
                        </div>
                        <div className="col-lg-9 ">
                            <div className="app__main-content">
                                main
                                </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}


