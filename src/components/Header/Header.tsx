import {useState} from 'react';

import styled from 'styled-components';

import MenuHeader from '../../assets/images/menuHeader.svg';
import MytubeLogo from '../../assets/images/MytubeLogo.svg';
import Search from '../../assets/images/Search.svg';
import Create from '../../assets/images/Create.svg';
import Apps from '../../assets/images/Apps.svg';
import Notification from '../../assets/images/Notification.svg';
import Ava from '../../assets/images/ava.jpg';
import {HeaderIcon} from '../HeaderIcon/HeaderIcon';


const HeaderContainer = styled.div`
    background: #61dafb;
    height: 50px;
    display: flex;
    align-items: center;
`;

const MenuImgContainer = styled.div`
    width: 80px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    span {
        font-size: 24px;
        font-weight: bold;
    }
`;

const SearchInputContainer = styled.div`
    width: 1000px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const SearchInput = styled.input`
    width: 50%;
    background: transparent;
    outline: none;
    border: none;
    border-bottom: 2px solid black;
    font-size: 18px;
`;

const AddedContainer = styled.div`
    width: 400px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    
`;

const AvatarImg = styled.img`
    width: 50px;
    height: 30px;
    border-radius: 40%;
    cursor: pointer;
`;


const Header: React.FC = () => {
    const [ searchValue, setSearchValue ] = useState('');

    const changeSearch: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setSearchValue(e.target.value);
    };

    const search = () => {
        setSearchValue('');
    };

    return <HeaderContainer >
        <MenuImgContainer>
            <HeaderIcon img={MenuHeader} />
        </MenuImgContainer>
        <LogoContainer>
            <HeaderIcon img={MytubeLogo} />
            <span>MYTUBE</span>
        </LogoContainer>
        <SearchInputContainer>
            <SearchInput
                type="text"
                value={searchValue}
                placeholder="Search..."
                onChange={changeSearch}
            />
            <div onClick={search}>
                <HeaderIcon img={Search} />
            </div>
        </SearchInputContainer>
        <AddedContainer>
            <HeaderIcon img={Create} />
            <HeaderIcon img={Apps} />
            <HeaderIcon img={Notification} />
            <AvatarImg src={Ava}/>
        </AddedContainer>
    </HeaderContainer>;
};

export {Header};