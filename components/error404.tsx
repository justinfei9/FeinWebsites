import React from 'react';
import { Link } from 'react-router-dom';

const Error404: React.FC = () => {
    return (
        <div className="construction-container" style={{
            margin: 0, padding: 0, width: '100vw', height: '100vh', backgroundColor: '#FFF', overflow: 'hidden', position: 'relative'
        }}>
            <style>{`
                .scrolling-bar {
                    position: absolute;
                    width: 200%;
                    height: 40px;
                    background-image: url('/404content/construction-bar2.gif');
                    background-repeat: repeat-x;
                    background-size: auto 100%;
                    z-index: 30;
                }

                .top-bar {
                    top: 0;
                    animation: scroll-left 8s linear infinite;
                }

                .bottom-bar {
                    bottom: 0;
                    animation: scroll-right 8s linear infinite;
                }

                .top-right-skull {
                    position: absolute;
                    top: 45px;
                    right: 20px;
                    height: 100px;
                    z-index: 25;
                }

                .worker-row {
                    position: absolute;
                    bottom: 40px;
                    width: 100%;
                    display: flex;
                    align-items: flex-end;
                    justify-content: space-between;
                    padding: 0 50px;
                    box-sizing: border-box;
                    z-index: 5;
                }

                .worker-row img {
                    height: 30vh;
                    width: auto;
                }

                .digger {
                    margin-left: -70px;
                }

                .y2k-text {
                    position: absolute;
                    width: 100%;
                    top: 25%;
                    left: 50%;
                    transform: translateX(-50%);
                    text-align: center;
                    color: #F96302;
                    font-family: "Courier New", Courier, monospace;
                    font-size: 5vw;
                    font-weight: bold;
                    text-shadow: 4px 4px #000000;
                    z-index: 15;
                    letter-spacing: 5px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 20px;
                }

                .word-wrapper {
                    position: relative;
                    display: inline-flex;
                    align-items: center;
                }

                .fish {
                    position: absolute;
                    bottom: 75%;
                    left: 50%;
                    transform: translateX(-50%);
                    height: 2.2em;
                    z-index: 20;
                    pointer-events: none;
                }

                .firecracker {
                    position: absolute;
                    bottom: 80%;
                    left: 50%;
                    transform: translateX(-50%);
                    height: 2em;
                    z-index: 20;
                }

                .skull-flame {
                    height: 1.5em;
                    margin-right: 15px;
                    z-index: 20;
                    filter: drop-shadow(2px 2px 0px #F96302);
                }

                .crazy-bat {
                    position: absolute;
                    top: 40%;
                    width: 160px;
                    z-index: 25;
                    left: -200px;
                    animation: fly-linear 16s linear infinite, fly-crazy 4s ease-in-out infinite;
                }

                @keyframes fly-linear {
                    0% {
                        left: -200px;
                    }

                    100% {
                        left: 100vw;
                    }
                }

                @keyframes fly-crazy {

                    0%,
                    100% {
                        top: 40%;
                        transform: rotate(-5deg);
                    }

                    25% {
                        top: 55%;
                        transform: rotate(10deg);
                    }

                    50% {
                        top: 35%;
                        transform: rotate(-10deg);
                    }

                    75% {
                        top: 50%;
                        transform: rotate(15deg);
                    }
                }

                .flying-dragon {
                    position: absolute;
                    top: 30%;
                    left: 75%;
                    width: 35vw;
                    transform: translate(-50%, -100%);
                    z-index: 10;
                }

                @keyframes scroll-left {
                    from {
                        transform: translateX(0);
                    }

                    to {
                        transform: translateX(-50%);
                    }
                }

                @keyframes scroll-right {
                    from {
                        transform: translateX(-50%);
                    }

                    to {
                        transform: translateX(0);
                    }
                }
                
                .return-home-btn {
                    position: absolute;
                    top: 45%;
                    left: 50%;
                    transform: translateX(-50%);
                    background-color: #000;
                    color: #F96302;
                    border: 4px solid #F96302;
                    padding: 15px 30px;
                    font-family: inherit;
                    font-size: clamp(16px, 2vw, 24px);
                    font-weight: bold;
                    text-decoration: none;
                    text-transform: uppercase;
                    cursor: pointer;
                    z-index: 40;
                    pointer-events: auto;
                }
                .return-home-btn:hover {
                    background-color: #F96302;
                    color: #000;
                }
            `}</style>

            <div className="scrolling-bar top-bar"></div>

            <img src="/404content/smoking-skull.gif" className="top-right-skull" alt="Smoking Skull" />

            <img src="/404content/flyingDragonWithFire.gif" className="flying-dragon" alt="Epic Flying Dragon Breathing Fire" />

            <img src="/404content/flyingbat.gif" className="crazy-bat" alt="Crazy Flipped Bat" />

            <div className="y2k-text">
                <span className="word-wrapper">
                    <img src="/404content/skullflame.gif" className="skull-flame" alt="Skull Flame" />
                    <img src="/404content/fishjump.gif" className="fish" alt="fish jumping" />
                    Page
                </span>
                <span className="word-wrapper">
                    <img src="/404content/bouncingfirecracker.gif" className="firecracker" alt="Firecracker" />
                    Not
                </span>
                <span className="word-wrapper">
                    Found
                    <img src="/404content/skullflame.gif" className="skull-flame" alt="Skull Flame" />
                </span>
            </div>

            <Link to="/" className="return-home-btn">
                [ RETURN HOME ]
            </Link>

            <div className="worker-row">
                <img src="/404content/diggingDirt.gif" className="digger" alt="Digger" />
                <img src="/404content/walkingmadbear.gif" alt="Mad Bear" />
                <img src="/404content/jackhammering.gif" alt="Jackhammer" />
                <img src="/404content/cootiewalking.gif" alt="walking cootie" />
                <img src="/404content/jackhammer2.gif" alt="Jackhammer" />

            </div>

            <div className="scrolling-bar bottom-bar"></div>
        </div>
    );
};

export default Error404;