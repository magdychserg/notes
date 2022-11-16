import styled from 'styled-components';

export const Box = styled.div`

background: grey;
position: absolute;
bottom: 0;
width: 100%;

`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin: 0 auto;

`

export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: left;
margin-left: 60px;
`;

export const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,
						minmax(185px, 1fr));
grid-gap: 20px;
`;

export const FooterLink = styled.a`
color: #fff;
margin-bottom: 20px;
font-size: 18px;
text-decoration: none;
`;

export const Heading = styled.p`
font-size: 24px;
color: #fff;
margin-bottom: 40px;
font-weight: bold;
`;
