import React from 'react'
import Allmenu from '../../components/Allmenu'
import Contact from "./Contact"
import Dishes from "./Dishes"
import HomeHeader from "./HomeHeader"
import Suggestion from "./Suggestion"
import Footer from "../../components/Footer"
import ComingSoon from "./ComingSoon"
import Articles from '../../components/Articles'
import Navbar from '../../components/Navbar'
import Dish1 from "../../images/dishes1.png";
import Dish2 from "../../images/dishes2.png";
import Dish3 from "../../images/dishes3.png";

const Home = () => {
    const dishes = [
        {
            img: Dish3,
            title: "Weddings",
            desc: "Different types of Local delicacies, specially prepared just for you"
        },
        {
            img: Dish2,
            title: "Birthday Parties",
            desc: "Different types of intercontinental delicacies, specially prepared just for you"
        },
        {
            img: Dish1,
            title: "Family Gatherings",
            desc: "Different types of fingerfoods and snacks, specially prepared just for you"
        }
    ]
    return (
        <div>
            <Navbar/>
            <section className=''>
                <HomeHeader />
                <div className='w-9/10 mx-auto'>
                <div className='md:w-2/3'>
                    <h1 className='subtitle'>Services we Offer</h1>
                    <p className="text-xl text-gray-700 my-5 mb-12">
                    MM Catering offers the best catering services. 
                    we make our meals from carefully selected ingredients with rich taste. You can proceed to make bulk orders.
                    </p>
                </div>
                
                <div className='mb-5 grid md:grid-cols-3 gap-4'>
                    { dishes.map((dish) => (
                        <Dishes dish={dish}/>
                    ))}
                    
                </div>
                </div>
                <Allmenu />
                <Suggestion />
                <Articles/>
                <ComingSoon/>
                <Contact />
            </section>
            <Footer />
        </div>
    )
}

export default Home
