import styled from 'styled-components';

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

const IconImg = styled.img`
    width: 25px;
    height: 25px;
    margin: auto;
`

const Card = () => {


    return (
        <CardAticle>
            <Header>
                <Figure>
                </Figure>
                <Icon><IconImg src='/assets/svg/icon-home.svg' alt='home'/></Icon>
            </Header>
            <section>
                <h3>lorem ipsum dolor</h3>
                <p>Quis mollis nisl nunc et massa vestibulum sed metus in lorem tristique</p>
                <ul>
                    <li>
                        <i>icon</i>
                        <p>Lorem ipsum dolo sit ultrice</p>
                    </li>
                    <li>
                        <i>icon</i>
                        <p>Lorem ipsum dolo sit ultrice</p>
                    </li>
                </ul>
                <button>lo quiero ya</button>
            </section>
        </CardAticle>
    )
}

export default Card;