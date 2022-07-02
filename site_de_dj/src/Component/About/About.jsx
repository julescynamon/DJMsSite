import React from 'react';
import './about.css';
import { useMediaQuery } from 'react-responsive';


export default function About() {

	const isDesktop = useMediaQuery({ query: '(min-width: 900px)' });
	const isTabletOrMobile = useMediaQuery({ query: '(max-width: 900px)' });


	return (
		<div>
			{isDesktop && <section className='about'>
				<div className="card-img"></div>
				<div className="card-text">
					<h2>DJ - MS</h2>
					<p>
						Véritable créateur d'ambiance, sa maitrise technique et sa créativité, lui insufle le don de mettre en scène votre imagination et de créer l'athmosphère qui vous correspond.
						Aprés plusieurs années, à travailler en tant que serveur lors de mariage oriental, et à force de faire de l'ombre aux djs du mariage, il décide enfin de se lancer à son compte, pour votre plus grand bohneur. Son sens du relationel et sa qualité d'écoute sauront vous charmer et rendre votre mariage unique !
					</p>
				</div>
			</section>}
			{isTabletOrMobile && <section className='about'>
				<figure>
					<h1 className="title-img">DJ - MS</h1>
					<img src="/img/about.jpg" alt="" />
					<figcaption>
						<h3 className="title-infos">
							Touch Me - Plus d'info
						</h3>
						<p className="txt">
							Véritable créateur d'ambiance, sa maitrise technique et sa créativité, lui insufle le don de mettre en scène votre imagination et de créer l'athmosphère qui vous correspond.
							Aprés plusieurs années, à travailler en tant que serveur lors de mariage oriental, et à force de faire de l'ombre aux djs du mariage, il décide enfin de se lancer à son compte, pour votre plus grand bohneur. Son sens du relationel et sa qualité d'écoute sauront vous charmer et rendre votre mariage unique !
						</p>
					</figcaption>
				</figure>
			</section>}
			
		</div>
		
	)
}
