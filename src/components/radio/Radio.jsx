import styled from 'styled-components';

const Card = styled.div`
    background-color: ${({theme})=> theme.sixtyColor};
    box-shadow: 0px 8px 16px rgba(86, 80, 76, 0.04), 
                0px 2px 16px rgba(86, 80, 76, 0.04), 
                0px 1px 4px rgba(86, 80, 76, 0.04);
    width: 100%;
    padding: 1rem;
`

const Input = styled.input`
    display: none;
`

const Label = styled.label`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
`

const Option = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({theme})=> theme.sixtyColor};
    background-color: ${({theme})=> theme.secundaryColor};
    width: 50px;
    height: 35px;
    border-radius: .4rem;
`

const Paragraph = styled.p`
    flex-grow: 1;
    margin-left: 1rem;
`

const Radio = ({options}) => {

    const buildRadioButton = () => {
        return (
        <Card>
            <Input type="radio" name="a" id="a" />
            <Label htmlFor="a">
                <Option>
                    A
                </Option>
                <Paragraph>Lorem ipsum</Paragraph>
                <i>
                    <img src="/assets/svg/icon-chevron-right.svg" alt="chevronRight" />
                </i>
            </Label>
        </Card>);
    }

    return (
        <>
            {buildRadioButton()}
        </>
    )
}

export default Radio;