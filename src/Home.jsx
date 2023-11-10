import Banner from "./Banner";
import HomeCards from "./HomeCards";
import { useEffect } from "react";
import { useState } from "react";

const Home = () => {
    const [cards,setCards] = useState()

    useEffect(()=>{
        fetch('/data.json')
        .then(res=>res.json())
        .then(data => setCards(data))

    },[])

    return (
        <div>
            <Banner></Banner>
            <HomeCards cards={cards}></HomeCards>
        </div>
    );
};

export default Home;