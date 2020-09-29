import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import colors from '../helpers/colors'
import Logo from '../components/logo.js'

const Header = ({ siteTitle, color }) => (
	<HeaderWrapper>
		<LinkContainer>
			<Link to='/about'>About</Link>
		</LinkContainer>
		<LinkContainer>
			<Link to='/services'>Services</Link>
		</LinkContainer>
		<LogoWrapper to='/'>
			<Logo color={color} />
		</LogoWrapper>
		<LinkContainer>
			<Link to='/edit'>Edit</Link>
		</LinkContainer>
		<LinkContainer>
			<Link to='/contact'>Contact</Link>
		</LinkContainer>
	</HeaderWrapper>
)

const HeaderWrapper = styled.header`
	justify-self: flex-start;
	display: grid;
	grid-template-columns: repeat(5, fit-content(25ch));
	grid-gap: 5vw;
	justify-content: center;
	width: 80%;
	color: ${colors.white};
	text-align: center;
	margin: 0 auto;
	@media only screen and (max-width: 768px) {
		width: 100%;
		grid-gap: 2vw;
	}
`

const LogoWrapper = styled(Link)`
	background: ${colors.white};
	width: 5rem;
	height: 5rem;
	margin: 0 auto;
	display: flex;
	justify-content: center;
	align-items: center;
	box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.25);
	@media only screen and (max-width: 768px) {
		width: 4rem;
		height: 4rem;
	}
	@media only screen and (max-width: 600px) {
		width: 3rem;
		height: 3rem;
	}
`

const LinkContainer = styled.div`
	margin-top: 0.75rem;
	& * {
		position: relative;
		text-decoration: none;
		font-size: 1.5rem;
		overflow: hidden;
		@media only screen and (max-width: 600px) {
			font-size: 1.25rem;
		}
		@media only screen and (max-width: 350px) {
			font-size: 1.1rem;
		}
		&::after {
			position: absolute;
			bottom: -2px;
			left: 0;
			content: '';
			height: 2px;
			width: 100%;
			transform: scale(0);
			transition: transform 350ms;
			background: ${colors.white};
		}
		&:hover {
			&::after {
				transform: scale(1);
			}
		}
	}
`

Header.propTypes = {
	siteTitle: PropTypes.string,
}

Header.defaultProps = {
	siteTitle: ``,
}

export default Header
