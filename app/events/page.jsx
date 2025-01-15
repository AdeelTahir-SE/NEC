import Header from "../../components/header";
import Footer from "../../components/footer";
import EventsHeroSection from "../../components/eventsherosection";
import FeaturedEvents from "../../components/featuredevents";
import EventsCardSection from "../../components/evnetscardsection";

export default function Event(){
    return(
        <div>
            <Header />
            <EventsHeroSection/>
            <FeaturedEvents/>
            <EventsCardSection title="Upcoming Events"/>
            <EventsCardSection title="Past Events"/>
            <Footer />
        </div>
    )
}