import { BoxComponents } from "../../components/BoxComponents"
import { FunFact } from "../../components/FunFact";
import { MainVisits } from "../../components/HomeVisits/MainVisits";
import HomeAbout from "../../components/HomeAbout"
import DynamicCarousel from "../../components/dynamicCarousel"
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PeopleIcon from '@mui/icons-material/People';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import FeedIcon from '@mui/icons-material/Feed';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import ChatIcon from '@mui/icons-material/Chat';
const HomePage = () => {
    const FeaturesArr = [
        {
            icon: <MenuBookIcon style={{ color: '#0463FA', fontSize: '35px' }} />,
            heading: "Professional Courses",
            text: "We have foundation institutes of technology having special focus on technical education. We offer professional courses to enhance technical skills of students."
        },
        {
            icon: <PeopleIcon style={{ color: '#0463FA', fontSize: '35px' }} />,
            heading: "Expert Teachers",
            text: "We have qualified and trained teachers having complete grip on teaching mythologies. We have prime focus to groom our students as best citizens of Pakistan."
        },

        {
            icon: <EmojiEventsIcon style={{ color: '#0463FA', fontSize: '35px' }} />,
            heading: "Extra-Curricular",
            text: "Our Education System ensures holistic personality development of children by holding a wealth of extra-curricular activities to groom them in the “Art of living and Working together."
        },
        {
            icon: <FeedIcon style={{ color: '#0463FA', fontSize: '35px' }} />,
            heading: "Newsletter",
            text: "We organize information of our education system and release newsletter having highlights of all activities of our schools, colleges and FITs."
        },
        {
            icon: <LocalLibraryIcon style={{ color: '#0463FA', fontSize: '35px' }} />,
            heading: "Study Abroad",
            text: "We provide opportunities to our students to study abroad. So far 143 Fauji Foundation students have availed the scholarship including 4 students presently studying in USA."
        },
        {
            icon: <ChatIcon style={{ color: '#0463FA', fontSize: '35px' }} />,
            heading: "Ask Us",
            text: "Chat box is important feature for feedback mechanism. It will help in understanding the response from grass root level to address the challenges."
        },
    ]
    return (
        <>
            <DynamicCarousel />
            <HomeAbout />

            <div className="features">
                <div className="flex justify-center">
                    <div style={{ border: '1px solid #ccc', padding: '6px 0', width: '120px', textAlign: 'center', borderRadius: '50rem', fontSize: '17px' }} className="box">Features</div>
                </div>
                <h1 style={{ fontSize: '28px', fontFamily: 'sans-serif', fontWeight: 'bold', textAlign: 'center', margin: '20px 0 40px 0' }}>Prominent Features</h1>
                <div className="flex justify-center flex-wrap">
                    <BoxComponents FeaturesArr={FeaturesArr} />
                </div>
            </div>
            <FunFact/>
            <MainVisits/>
        </>
    )
}

export default HomePage
