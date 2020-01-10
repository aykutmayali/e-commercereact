import React from 'react';
import Slider from './Slider';
import Discount from './Discount';
import PopularItems from './PopularItems';
import Banner from './Banner';
import FeaturedProducts from './FeaturedProducts';
import { Container, Row, Col } from 'reactstrap';

function Body() {
	return (
		<div>
			<Container>
				<Row>
					<Col xs="10">
						{/* Body function */}
						<Slider />
					</Col>
					<Col xs="2">
						<Discount />
					</Col>
				</Row>
				<Row>
					<Col xs="12">
						<PopularItems />
					</Col>
				</Row>
				<Row>
					<Col xs="12">
						<Banner />
					</Col>
				</Row>
				<Row>
					<Col xs="12">
						<FeaturedProducts />
					</Col>
				</Row>
				<Row>
					<Col xs="12">
						<PopularItems />
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default Body;
