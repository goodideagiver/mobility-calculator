import styled from 'styled-components';

import ReactDOM from 'react-dom';

const BackdropStyle = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: #000000;
`;

const ContentStyle = styled.div`
	position: fixed;
	top: 50%;
	left: 50%;
	width: 40rem;
	transform: translate(-50%, -50%);

	max-width: 90vw;
	max-height: 90vh;
`;

const StyledModalHeader = styled.header`
	display: flex;
	gap: 1rem;
`;

const Backdrop = ({ onConfirm }) => {
	return <BackdropStyle onClick={onConfirm} />;
};

const Content = ({ title, children, onConfirm }) => {
	return (
		<ContentStyle>
			<StyledModalHeader>
				<h2>{title}</h2>
				<button onClick={onConfirm}>Close</button>
			</StyledModalHeader>
			<main>{children}</main>
		</ContentStyle>
	);
};

const Modal = ({ onConfirm, ...props }) => {
	return ReactDOM.createPortal(
		<>
			<Backdrop onConfirm={onConfirm} />
			<Content {...props} />
		</>,
		document.getElementById('overlay')
	);
};

export default Modal;
