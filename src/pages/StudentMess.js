import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Input, Button, Dropdown, List, Avatar } from 'antd';
import {
  DeleteOutlined,
  EllipsisOutlined,
  FlagOutlined,
  MessageOutlined,
  MutedOutlined,
  RightOutlined,
  StopOutlined,
  SearchOutlined,
} from '@ant-design/icons';
import { initializeSocket, sendMessage } from '../redux/actions/messageActions';
import io from 'socket.io-client';

const socket = io('https://signaling-server-r4dq.onrender.com/');

const getRoomId = (userId1, userId2) => {
  return [userId1, userId2].sort().join('_');
};

const StudentMess = () => {
  const dispatch = useDispatch();
  const allMessages = useSelector((state) => state.messages.messages) || {};
  const currentUserId = useSelector((state) => state.auth.id);
  const [message, setMessage] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);
  const [users, setUsers] = useState([]);
  const hasSetupListener = useRef(false);

  useEffect(() => {
    dispatch(initializeSocket(currentUserId));

    fetch('https://667e5671297972455f67ee82.mockapi.io/projectojt/api/v1/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, [dispatch, currentUserId]);

  useEffect(() => {
    if (selectedUser) {
      const roomId = getRoomId(currentUserId, selectedUser.id);
      socket.emit('join_room', roomId);

      const handleReceiveMessage = (roomId, message) => {
        dispatch({ type: 'RECEIVE_MESSAGE', payload: { roomId, message } });
      };

      if (!hasSetupListener.current) {
        socket.on('receive_message', handleReceiveMessage);
        hasSetupListener.current = true;
      }

      return () => {
        socket.off('receive_message', handleReceiveMessage);
      };
    }
  }, [selectedUser, dispatch, currentUserId]);

  const handleSend = () => {
    if (message.trim() && selectedUser) {
      const roomId = getRoomId(currentUserId, selectedUser.id);
      dispatch(sendMessage(currentUserId, selectedUser.id, message));
      setMessage('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSend();
    }
  };

  const items = [
    {
      key: '1',
      label: (
        <a href="#">
          <DeleteOutlined /> Delete
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a href="#">
          <StopOutlined /> Block
        </a>
      ),
    },
    {
      key: '3',
      label: (
        <a href="#">
          <FlagOutlined /> Report
        </a>
      ),
    },
    {
      key: '4',
      label: (
        <a href="#">
          <MutedOutlined /> Mute
        </a>
      ),
    },
  ];

  const getLastMessage = (userId) => {
    const roomId = getRoomId(currentUserId, userId);
    const messages = allMessages[roomId] || [];
    if (messages.length === 0) return '';
    const lastMessage = messages[messages.length - 1].content.toString();
    return lastMessage.length > 20 ? `${lastMessage.slice(0, 20)}...` : lastMessage;
  };

  const messages = selectedUser ? allMessages[getRoomId(currentUserId, selectedUser.id)] || [] : [];

  return (
    <div className="mt-20 ml-5 bg-[#F7F7F7]">
      <div className="flex gap-5 items-center">
        <MessageOutlined className="text-3xl" />
        <h3 className="text-2xl mt-2">Messages</h3>
      </div>
      <div className="mt-10 bg-white w-[1600px] flex border border-solid">
        <div className="w-[550px]">
          <div className="mt-5 ml-5">
            <SearchOutlined className="p-3 border border-solid rounded-sm" />
            <input
              placeholder="Search Messages..."
              className="p-3 border border-solid w-[450px] rounded-sm"
            />
          </div>
          <div className="flex flex-col mt-5 gap-4">
            <List
              itemLayout="horizontal"
              dataSource={users.filter(user => user.id !== currentUserId)}
              renderItem={user => (
                <List.Item onClick={() => setSelectedUser(user)}>
                  <List.Item.Meta
                    avatar={<Avatar src={user.avatar} />}
                    title={user.username}
                    description={<span className="whitespace-nowrap overflow-hidden text-ellipsis">{getLastMessage(user.id)}</span>}
                  />
                </List.Item>
              )}
            />
          </div>
        </div>
        <div className="flex-1">
          {selectedUser ? (
            <>
              <div className="flex gap-4 py-7 px-3 border border-solid">
                <img
                  src={selectedUser.avatar}
                  className="w-[50px] rounded-3xl ml-2"
                  alt="User"
                />
                <div className="flex flex-col">
                  <div className="flex justify-between items-center w-[940px]">
                    <h3>{selectedUser.username}</h3>
                    <Dropdown menu={{ items }} placement="bottomLeft" arrow>
                      <EllipsisOutlined className="text-3xl cursor-pointer" />
                    </Dropdown>
                  </div>
                  <div className="bg-[#40D04F] w-[65px] text-white font-semibold px-2 py-[2px] rounded-sm">
                    Online
                  </div>
                </div>
              </div>
              <div className="flex flex-col h-[500px] border border-solid">
                <div className="border border-solid flex-1 overflow-y-auto">
                  {messages.map((msg, index) => {
                    const senderId = msg.senderId.toString();
                    const content = msg.content.toString();
                    const timestamp = msg.timestamp.toString();

                    return (
                      <div key={index} className={`flex ${senderId === currentUserId ? 'justify-end' : 'justify-start'} py-2`}>
                        <div className={`max-w-[550px] p-3 rounded-md ${senderId === currentUserId ? 'bg-[#ED2A26] text-white' : 'bg-[#FFECEC]'}`}>
                          <div className="break-words">{content}</div>
                          <div className="mt-2 text-sm font-extralight text-right">
                            {timestamp}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="flex gap-5 p-4 border border-solid">
                  <Input
                    placeholder="Write a message..."
                    className="p-2 border border-solid flex-1"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={handleKeyDown}
                  />
                  <Button
                    type="primary"
                    onClick={handleSend}
                    className="p-2 w-12 bg-[#ED2A26] hover:bg-black rounded-sm text-white"
                  >
                    <RightOutlined />
                  </Button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex justify-center items-center h-full">
              <h3>Select a user to start chatting</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentMess;
