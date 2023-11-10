/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

const Home = () => {
    const [cards,setCards] = useState();

    const [name, setName] = useState('');

    let search=[];

    const handleSearch = e =>{
        e.preventDefault();
        setName(e.target.name.value);
 //       console.log(e.target.name.value);
    }

    useEffect(()=>{
        fetch('/data.json')
        .then(res=>res.json())
        .then(data => setCards(data))
       // console.log("fetch");
    },[name])

    if(name === 'Education'|| name === 'Health' || name === `Food`|| name === "Clothing"){
  //      console.log(name);
        search = cards.filter((card) => card.category === name);
    }
    else{
        search = cards;
    }

 //   console.log(search);

    return (
        <div>
            <div className="mb-10">
                <div className="hero h-96" style={{backgroundImage: 'url(https://i.ibb.co/whqmC5Z/Clothing.png)'}}>
                    <div className="hero-overlay bg-white bg-opacity-95"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="">
                            <h1 className="mb-10 text-5xl font-bold text-black">I Grow By Helping People In Need</h1>
                            <div>
                                <form onSubmit={handleSearch}>
                                    <input type="text" name="name" placeholder="Search here...." className="input input-bordered input-error w-full max-w-xs mr-2 mb-2 text-black"/>
                                    
                                    <input type="submit" value="Search" className="btn btn-error text-white"/>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="w-11/12 mx-auto">

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-10'>
                    {
                        search?.map(search=><div key={search.id}>
                            <Link to={`/homecards/${search.id}`}>
                                <div className={`card card-compact shadow-xl ${search.Color_for_card_bg} ${search.Color_for_text_and_button}`}>
                                    <figure><img src={search.image} alt={search.title} /></figure>
                                    <div className="card-body">
                                        <div className="w-20">
                                            <p className={`${search.Color_for_category_bg} text-center text-sm font-normal`}>{search.category}</p>
                                        </div>
                                        <h2 className="card-title text-xl font-semibold">{search.title}</h2>
                                    </div>
                                </div>
                            </Link>
                            
                        </div> )
                    }
                </div>

                {/* <div className="w-11/12 bg-blue-200">
                    <h1 className="text-blue-800 text-sm font-normal bg-blue-400 w-20">Color</h1>
                    <h1 className="text-blue-800 text-xl font-semibold">Card Section</h1>
                </div>

                <div className="w-11/12 bg-red-200">
                    <h1 className="text-red-800 text-sm font-normal bg-red-400 w-20">Color</h1>
                    <h1 className="text-red-800 text-xl font-semibold">Card Section</h1>
                </div>

                <div className="w-11/12 bg-orange-200">
                    <h1 className="text-orange-800 text-sm font-normal bg-orange-400 w-20">Color</h1>
                    <h1 className="text-orange-800 text-xl font-semibold">Card Section</h1>
                </div>

                <div className="w-11/12 bg-green-200">
                    <h1 className="text-green-800 text-sm font-normal bg-green-400 w-20">Color</h1>
                    <h1 className="text-green-800 text-xl font-semibold">Card Section</h1>
                </div> */}

            </div>
        </div>
    );
};

export default Home;