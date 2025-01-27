import Header from "../../components/header";
import Footer from "../../components/footer";
import EventsHeroSection from "../../components/eventsherosection";
import PastEvents from "@/components/pastEvents";
import FeaturedEvents from "@/components/featuredEvent";
import UpComingEvents from "@/components/upcomingEvents";

export default function Event(){
    return(
        <div>
            <Header />
            <EventsHeroSection/>
            <FeaturedEvents/>
            <UpComingEvents/>
            <PastEvents/>
            <Footer />
        </div>
    )
}