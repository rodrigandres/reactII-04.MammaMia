import Container from "react-bootstrap/Container";
import '../style/common-section.css'
const CommonSection = ({title}) => {
	return (
		<section className="common__section">
			<Container className="text-center text-capitalize">
				<h1>Pizza  {title}</h1>
			</Container>
		</section>
	)
};

export default CommonSection;