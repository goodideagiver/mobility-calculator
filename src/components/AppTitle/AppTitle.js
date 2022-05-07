import styled from 'styled-components';

const StyledHeading = styled.h1`
	text-align: center;
`;

const TitleContainer = styled.div`
	display: grid;
	place-items: center;
`;

const AppTitle = (props) => {
	return (
		<TitleContainer className='inner-panel'>
			<StyledHeading>App title</StyledHeading>
		</TitleContainer>
	);
};

export default AppTitle;
