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

    ${device.tablet`
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        .container {
            grid-column: 1;
        }
    `}

    ${device.laptop`
        grid-template-columns: 1fr 860px 1fr;
        grid-template-rows: 1fr;
        .container {
            grid-column: 2;
            width: 100%;
        }
    `}

    ${device.desktop`
    `}
`

export default Responsive;