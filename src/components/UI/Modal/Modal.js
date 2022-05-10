import styled from 'styled-components';

import ReactDOM from 'react-dom';

const BackdropStyle = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: hsla(0, 0%, 0%, 0.8);
`;

const ContentStyle = styled.div`
	position: fixed;
	top: 50%;
	left: 50%;
	width: 40rem;
	transform: translate(-50%, -50%);
	background: var(--bg-panel);
	padding: var(--panel-gap);
	border-radius: var(--panel-radius);

	max-width: 90vw;
	max-height: 90vh;
`;

const StyledModalHeader = styled.header`
	display: flex;
	gap: 1rem;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 2rem;
`;

const CloseButton = styled.button`
	background: var(--color-hl);
	color: white;
	border-radius: 1rem;
	border: 0;
	padding: 1rem;
	opacity: 0.8;
	cursor: pointer;

	&:hover {
		background: var(--color-hl-hov);
	}
`;

const Backdrop = ({ onConfirm }) => {
	return <BackdropStyle onClick={onConfirm} />;
};

const Content = ({ title, children, onConfirm }) => {
	return (
		<ContentStyle>
			<StyledModalHeader>
				<h2>{title}</h2>
				<CloseButton onClick={onConfirm}>Close</CloseButton>
			</StyledModalHeader>
			<main>{children}</main>
		</ContentStyle>
	);
};

const Modal = ({ onConfirm, ...props }) => {
	return ReactDOM.createPortal(
		<>
			<Backdrop onConfirm={onConfirm} />
			<Content onConfirm={onConfirm} {...props} />
		</>,
		document.getElementById('overlay')
	);
};

export default Modal;
