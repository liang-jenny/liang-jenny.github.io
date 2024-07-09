import PapersContent from '../components/PapersContent';
import PageTemplate from '../components/PageTemplate';

const Home = () => (
    <PageTemplate element={<PapersContent/>} page={"papers"} />
);

export default Home;