import styled from 'styled-components';

import {ReactComponent as Main} from '../../assets/images/Main.svg';
import {ReactComponent as Compass} from '../../assets/images/Compass.svg';
import {ReactComponent as Short} from '../../assets/images/Short.svg';
import {ReactComponent as Album} from '../../assets/images/Album.svg';
import {ReactComponent as Originals} from '../../assets/images/Originals.svg';
import {ReactComponent as Music} from '../../assets/images/Music.svg';
import {ReactComponent as Library} from '../../assets/images/Library.svg';
import {ReactComponent as Download} from '../../assets/images/Download.svg';

import {AsideMenuIcon} from '../AsideMenuIcon/AsideMenuIcon';

const AsideMenuContainer = styled.div`
    background: #61dafb;
    border-radius: 0 10px 10px 0;
    width: 70px;
    height: calc(100% - 50px);
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    span {
        font-size: 12px;
    }
`;

const AsideMenu: React.FC = () => {
    return <AsideMenuContainer>
        <AsideMenuIcon SVGComponent={Main} text={'Головна'}/>
        <AsideMenuIcon SVGComponent={Compass} text={'Навігатор'}/>
        <AsideMenuIcon SVGComponent={Short} text={'Shorts'}/>
        <AsideMenuIcon SVGComponent={Album} text={'Підписки'}/>
        <AsideMenuIcon SVGComponent={Originals} text={'Originals'}/>
        <AsideMenuIcon SVGComponent={Music} text={'Mytube music'}/>
        <AsideMenuIcon SVGComponent={Library} text={'Бібліотека'}/>
        <AsideMenuIcon SVGComponent={Download} text={'Скачані'}/>
    </AsideMenuContainer>;
};

export {AsideMenu};