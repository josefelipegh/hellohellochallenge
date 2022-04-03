import styled from 'styled-components';

const Card = styled.div`
    background-color: ${({theme})=> theme.sixtyColor};
    box-shadow: 0px 8px 16px rgba(86, 80, 76, 0.04), 
                0px 2px 16px rgba(86, 80, 76, 0.04), 
                0px 1px 4px rgba(86, 80, 76, 0.04);
    width: 100%;
    border-radius: .5rem;
    margin-bottom: 1rem;
`

const Input = styled.input`
    display: none;
`

const Label = styled.label`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 2rem;
    width: 100%;
    cursor: pointer;
`

const Option = styled.span`
`

const Img = styled.img`
    width: 50px;
    height: 35px;
    border-radius: .4rem;
`

const Paragraph = styled.p`
    flex-grow: 1;
    margin-left: 1rem;
    font-weight: 600;
`

const Radio = ({options}) => {

    const buildRadioButton = () => {
        return options.map(opt => {
            return (
            <Card key={opt.value}>
                <Input type="radio" name="a" id="a" value={opt.value} />
                <Label htmlFor="a">
                    <Option>
                        <Img src={opt.image} alt={opt.value} />
                    </Option>
                    <Paragraph>{opt.label}</Paragraph>
                    <i>
                        <img src="/assets/svg/icon-chevron-right.svg" alt="chevronRight" />
                    </i>
                </Label>
            </Card>);
        })
    }

    return (
        <>
            {buildRadioButton()}
        </>
    )
}

export default Radio;