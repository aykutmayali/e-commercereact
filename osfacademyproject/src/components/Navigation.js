import React from 'react';
import Category from './Category';
import Image from './Image';
import { Container, Row, Col } from 'reactstrap';

function Navigation() {
	return (
		<div>
			<Container>
				<Row>
					<Col xs="9">
						{/* Navigation function */}
						<Category />
					</Col>
					<Col xs="3">
						<Image />
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default Navigation;
