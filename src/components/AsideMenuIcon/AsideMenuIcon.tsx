import styled from 'styled-components';

const AsideMenuIconContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    height: 100%;
    width: 100%;
    &:hover {
        background: red;
        border: 1px solid white;
        color: white;
        fill: white;
        width: 105%;
        height: 105%;
        transition: all 0.2s;
    };
`;

const AsideMenuIconImgContainer = styled.div`
    width: 25px;
    height: 25px;
`;

const AsideMenuIconText = styled.span`
    font-size: 12px;
    height: 10px;
    margin-top: 5px;
    padding-top: 0;
`;

interface IAsideMenuIcon {
    SVGComponent: React.FunctionComponent<React.SVGAttributes<SVGElement>>,
    text: string
}

const AsideMenuIcon: React.FC<IAsideMenuIcon> = ({SVGComponent, text}) => {
    return <AsideMenuIconContainer>
        <AsideMenuIconImgContainer>
            <SVGComponent />
        </AsideMenuIconImgContainer>
        <AsideMenuIconText>{text}</AsideMenuIconText>
    </AsideMenuIconContainer>;
};

export {AsideMenuIcon};