import React from 'react';
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <img
            className="home__image" 
            src="https://images-na.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220.jpg"/>
        
        <div className="home__row">
            <Product 
                id="1"
                title="Xbox One X Cyberpunk 2077 Limited Edition Bundle (1TB) PEGI Rating: Ages 18 and Over"
                image="https://images-na.ssl-images-amazon.com/images/I/71RW-dl0szL._SL1500_.jpg"
                rating={3}
                price={40999}
            />

            <Product 
                id="2"
                title="(10th Gen Core i3-10110U/4GB/512GB SSD/Window 10 + MS Office/Nvidia 2GB MX230 Graphics)"
                image="https://images-na.ssl-images-amazon.com/images/I/61Qhi1Y2yzL._SL1280_.jpg"
                rating={4}
                price={40999}
            />  
        </div>

        <div className="home__row">
            <Product 
                id="3"
                title="Apple iPhone 11 (128GB) - White - FREE Delivery by Amazon"
                image="https://images-na.ssl-images-amazon.com/images/I/51o5RmQtroL._SL1024_.jpg"
                rating={3}
                price={40999}
                />
            <Product 
                id="4"
                title="ASUS VivoBook Dual Core Athlon Compact & Light Laptop"
                image="https://images-na.ssl-images-amazon.com/images/I/81Bq3kCc6AL._SL1500_.jpg"
                rating={4}
                price={40999}
            />
            <Product 
                id="5"
                title="Tenda AC10 1200Mbps Wireless WiFi Router (Black)"
                image="https://images-na.ssl-images-amazon.com/images/I/51Qq5tFiBLL._SL1000_.jpg"
                rating={5}
                price={40999}
            />
        </div>
        <div className="home__row">
            <Product 
                id="6"
                title="Samsung C34H890WJN - 34 Inch (3440 x 1440) WQHD UltraWide Professional LED Curved Monitor"
                image="https://images-na.ssl-images-amazon.com/images/I/91pi34PiUPL._SL1500_.jpg"
                rating={5}
                price={40999}
            />
        </div>
        
        </div>
    )
}

export default Home;
