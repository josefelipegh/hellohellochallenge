import styled from 'styled-components';

// Components
import Button from '../button/Button';

const CardAticle = styled.article`
    position: relative;
    width: 100%;
    max-width: 370px;
    background-color: ${({theme}) =>  theme.sixtyColor};
    box-shadow: 0px 8px 16px rgba(86, 80, 76, 0.04), 
                0px 2px 16px rgba(86, 80, 76, 0.04), 
                0px 1px 4px rgba(86, 80, 76, 0.04);
`

const Header = styled.header`
    position: relative;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
`

const Figure = styled.figure`
    position: relative;
    display: block;
    width: 100%;
    max-width: 100%;
    height: 200px;
    background-image: url('/assets/images/image.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    border-top-left-radius: .3rem;
    border-top-right-radius: .3rem;
`

const Icon = styled.span`
    position: absolute;
    display: flex;
    width: 45px;
    height: 45px;
    top: 85%;
    left: 5%;
    background-color: ${({theme}) =>  theme.sixtyColor};
    border-radius: 100%;
`

const Img = styled.img`
    width: 25px;
    height: 25px;
    margin: auto;
`

const Content = styled.section`
    display: block;
    padding: 1rem .9rem;
`

const Title = styled.h3`
    margin-bottom: 0;
    margin-top: 1rem;
    font-size: 20px;
    font-weight: 700;
`

const Description = styled.p`
    margin-top: 0.5rem;
    font-weight: 400;
`

const List = styled.ul`
    padding: 0;

    & li {
        display: flex;
        list-style: none;

        & i {
            margin: .5rem;
        }

        & p {
            font-size: .8rem;
            font-weight: 100;
            color: ${({theme}) => theme.fiftyColor};
        }
    }
`

const Card = () => {
    return (
        <CardAticle>
            <Header>
                <Figure/>
                <Icon>
                    <Img src='/assets/svg/icon-home.svg' alt='home'/>
                </Icon>
            </Header>
            <Content>
                <Title>lorem ipsum dolor</Title>
                <Description>Quis mollis nisl nunc et massa vestibulum sed metus in lorem tristique</Description>
                <List>
                    <li>
                        <i><img src="/assets/svg/icon-card.svg" alt="" /></i>
                        <p>Lorem ipsum dolo sit ultrice</p>
                    </li>
                    <li>
                        <i><img src="/assets/svg/icon-card.svg" alt="" /></i>
                        <p>Lorem ipsum dolo sit ultrice</p>
                    </li>
                </List>
                <Button primary ghost>lo quiero ya</Button>
            </Content>
        </CardAticle>
    )
}

export default Card;