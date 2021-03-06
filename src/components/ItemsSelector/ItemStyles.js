import styled from 'styled-components';

export const StyledItem = styled.button`
	background: var(--color-hl);
	color: white;
	cursor: pointer;
	border: 0;
	border-radius: 1rem;
	font-size: 1.2rem;
	font-weight: bold;
	padding: 1rem;
	word-break: break-all;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	animation: reveal 0.3s forwards;

	&:hover {
		background: var(--color-hl-hov);
	}

	&:active {
		transform: translate(0, 2px);
	}

	@keyframes reveal {
		from {
			filter: brightness(1.5);
		}
		to {
		}
	}
`;
