import styled from 'styled-components';

const HeaderIconImg = styled.img`
    width: 40px;
    height: 30px;
    cursor: pointer;
`;

interface IHeaderIcon {
    img: string
}

const HeaderIcon: React.FC<IHeaderIcon> = ({img}) => {
    return (
        <HeaderIconImg src={img}/>
    );
};

export {HeaderIcon};