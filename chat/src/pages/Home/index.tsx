import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import * as S from './styles'
import socket from '../../services/api'

type User = {
  name: string; 
  age: number;
}

type message = {
  user: string
  message: string;
}

type msg = {
  msg: string
}

const Home = () => {
  const { register, handleSubmit, reset } = useForm<msg>()
  const [messages, setMessages] = useState<message[]>([])
  const [name, setName] = useState("")
  const [modal, setModal] = useState(true)
  
  useEffect(() => {
    socket.on('messages', (data) => {
      setMessages(data)
    })
  }, [])  
    
  const onSubmit = async (data: msg) => {
    const messageObj = {
      user: name,
      message: data.msg
    }

    socket.emit('sendMessage', messageObj)

    reset()
  }
  
  return (
    <>
    <S.WrapperModal display={modal}>
      <S.Modal>
        <p>Digite seu nome</p>
        <S.Field type="text" onChange={(e) => setName(e.target.value)} placeholder="Type your name" name="msg" ref={register}  />
        <button onClick={() => {setModal(false)}}>salvar</button>
      </S.Modal>
    </S.WrapperModal>
    <S.Body>
      <S.Header>
        <S.Photo />
        <S.NameUser>Beibi Xarqui 🦈</S.NameUser>
      </S.Header>
      <S.BodyChat>
          {messages.map((message) => (
          <S.WrapperMessage className={message.user === name ? 'msg-right' : ''}>
            <S.Message  className={message.user === name ? 'right' : ''}>
              {message.user !== name && <S.User>
                {message.user}
              </S.User>}
              <S.Text>
                {message.message}
              </S.Text>
            </S.Message>
          </S.WrapperMessage>
          ))}
      </S.BodyChat>
      <S.Footer>
        <form onSubmit={handleSubmit(onSubmit)}>
          <S.Field type="text" placeholder="Type a message" name="msg" ref={register}  />
          <S.Button type="submit" className="btn"> <S.SendIcon /> </S.Button>
        </form>
      </S.Footer>
    </S.Body>
    </>
  );
}

export default Home;