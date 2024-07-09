import HomeContent from '../components/HomeContent';
import PageTemplate from '../components/PageTemplate';

const Home = () => (
    <PageTemplate element={<HomeContent/>} page={"home"} />
);

export default Home;