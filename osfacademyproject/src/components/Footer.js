import React from 'react';
import Contact from './Contact';
import Category from './Category';
import About from './About';
import Facebook from './Facebook';
import Instagram from './Instagram';
import { Container, Row, Col } from 'reactstrap';

function Footer() {
	return (
		<div>
			<Container>
				<Row>
					<Col xs="2">
						{/* Footer function */}
						<Contact />
					</Col>
					<Col xs="6">
						<Category />
					</Col>
					<Col xs="2">
						<About />
					</Col>
					<Col xs="1">
						<Facebook />
					</Col>
					<Col xs="1">
						<Instagram />
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default Footer;
