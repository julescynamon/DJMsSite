import Header from './Component/Header/Header';
import Nav from './Component/Nav/Nav';
import About from './Component/About/About';
import Gallery from './Component/Gallery/Gallery';
import Engagement from './Component/Engagement/Engagement';
import Contact from './Component/Contact/Contact';
import Footer from './Component/Footer/Footer';
import Trending from './Component/Trending/Trending';


function App() {
	return (
		<div className='App'>
			<>
				<Header />
				<Nav />
				<About />
				<Gallery />
				<Engagement />
				<Trending />
				<Contact />
				<Footer />
			</>
		</div>
	);
}

export default App;
