import styled from 'styled-components'
import flora from '../../fundo.jpeg'
import Bg from '../../bg.jpg';

import {FiSend} from 'react-icons/fi'

export const Body = styled.main`
  width: 100%;
  height: 100vh;
`

export const Header = styled.header`
  width: 100%;
  height: 70px;
  border-bottom: 1px solid rgba(0,0,0,0.1);
  display: flex;
  align-items: center;
  padding: 20px;
  padding-left: 100px;
  background:#2A2F32;
  font-family: 'Poppins', sans-serif;
`

export const WrapperMessage = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 20px;

  &.msg-right {
    justify-content: flex-end;
  }
` 

export const Message = styled.div`
  padding: 5px 12px;
  border-radius: 5px;
  background: #272D31;
  max-width: 60%;
  color: white;
  font-size: 14px;
  font-family: 'Poppins', sans-serif;

  &.right {
  background-color: #056162;
}
`

export const Photo = styled.div`
  width: 50px;
  height: 50px;
  background: red;
  border-radius: 50%;
  flex-shrink: 0;
  background-image: url(${flora});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`

export const NameUser = styled.div`
  width: 500px;
  font-weight: bold;
  font-size: 20px;
  margin-left: 40px;
  color: white;
`; 

export const Field = styled.input`
  width: 70%;
  height: 50px;
  outline: none;
  border: 1px solid rgba(0,0,0,0.2);
  border-radius: 20px;
  padding: 10px;
  font-size: 20px;
  background: #60686d;
  color: white;

  ::placeholder { 
    color: white;
    opacity: 1; 
  }

  @media (max-width: 1000px) {
    width: calc(100% - 100px);
  }
`

export const BodyChat = styled.div`
  width: 100%;
  height: calc(100% - 140px);
  background-image: url(${Bg});
  background-repeat: repeat;
  background-size: contain;
  padding: 20px;

  overflow: hidden scroll;

  ::-webkit-scrollbar-thumb {
    background: transparent;
  }

  &:hover {
    ::-webkit-scrollbar-thumb {
      background: #888;
    }
  }

  ::-webkit-scrollbar {
    width: 7px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`

export const Footer = styled.footer`
  width: 100%;
  height: 70px;
  background:#2A2F32;

  form {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
` 

export const SendIcon = styled(FiSend)`
  width: 20px;
  height: 20px;
  color: white;
`

export const Button = styled.button`
  height: 50px;
  width: 50px;
  margin-left: 10px;
  border: none;
  outline: none;
  background: transparent;
  border-radius: 7px;
  cursor: pointer;
  transition: 1s;
`

const colors: string[] = ['#ff4747', '#d95ed7', '#3ee46c', '#64c4d1', '#b7b83b', '#a8db4d']

export const User = styled.div`
  width: 100%;
  margin-bottom: 5px;
  color: ${colors[Math.round(Math.random() * 6)]};
  font-weight: 600;
`

export const Text = styled.div`
  width: 100%;
`
export const WrapperModal = styled.div<{ display: boolean }>`
  width: 100%;
  height: 100vh;
  position: fixed;

  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0,0,0,0.4);
  display: ${({ display }) => display ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
`

export const Modal = styled.div`
  width: 400px;
  height: 200px; 
  background: white;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  p {
      font-size: 20px;
      margin-bottom: 20px;
    }
`