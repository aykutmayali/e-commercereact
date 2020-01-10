import React from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
import Language from './Language';
import Currency from './Currency';
import Card from './Card';
import Wishlist from './Wishlist';
import { Container, Row, Col } from 'reactstrap';

function Header() {
	return (
		<div>
			<Container>
				<Row>
					<Col xs="2">
						{/* <p>Header function</p> */}
						<Logo />
					</Col>
					<Col xs="6">
						<Navigation />
					</Col>
					<Col xs="1">
						<Language />
					</Col>
					<Col xs="1">
						<Currency />
					</Col>
					<Col xs="1">
						<Wishlist />
					</Col>
					<Col xs="1">
						<Card />
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default Header;
