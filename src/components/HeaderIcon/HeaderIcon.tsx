import styled from 'styled-components';

const HeaderIconImg = styled.img`
    width: 40px;
    height: 34px;
    cursor: pointer;
`;

interface IHeaderIcon {
    img: string,
    back: string,
}

const HeaderIcon: React.FC<IHeaderIcon> = ({img, back}) => {
    return (
        <HeaderIconImg
            src={img}
            style={{
                background: back
            }}
        />
    );
};

export {HeaderIcon};