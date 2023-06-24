import styled from 'styled-components';

export const P = styled.div`
    font-size: 14px;
    color: ${({color}) => color};
`
export const H1 = styled.div`
    margin: ${({margin}) => margin};

    font-size: 36px;
    color: ${({color}) => color};
`
export const HomBannersButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 85px;
    height: 31px;
    border-radius: 5px;
    margin: ${({margin}) => margin};

    background: ${({background}) => background};
    color: ${({color}) => color};
    font-size: 12px;

    cursor: pointer;
`