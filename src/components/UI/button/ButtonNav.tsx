import React, {FC, ReactElement} from 'react';
import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';

interface NavButtonPropsType {
    url: any,
    icon?: ReactElement,
    title: string,
    className?: string
}

const ButtonNav: FC<NavButtonPropsType> = ({url, icon, title, className}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(url);
    }

    return (
        <Button onClick={handleClick} className={`${className} button button-nav`}>
            {icon} {title}
        </Button>
    );
};

export default ButtonNav;

const Button = styled.button`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  padding: 4px 18px;
  border: none;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.16) 1px 1px 8px 2px;
`