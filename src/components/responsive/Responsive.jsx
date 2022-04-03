import styled from "styled-components";

import device from '../../responsive/breakpoints';

const Responsive = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    justify-items: center;
    .container {
        grid-column: 1;
        width: 100%;
    }

    .stepper {
            margin-right: 0;
    }

    ${device.tablet`
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        .container {
            grid-column: 1;
        }

        .stepper {
            margin-right: calc(100px - 1rem);
        }
    `}

    ${device.laptop`
        grid-template-columns: 1fr 860px 1fr;
        grid-template-rows: 1fr;
        .container {
            grid-column: 2;
            width: 100%;
        }

        .stepper {
            margin-right: calc(100px - 1rem);
        }
    `}

    ${device.desktop`
    `}
`

export default Responsive;