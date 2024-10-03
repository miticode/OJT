import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getInstructorById } from "../redux/actions/instructor.action";
import {
  setMessages,
  addMessage,
  resetMessages,
} from "../redux/actions/chat.action";
import { useWebSocket } from "../WebSocketProvider";
import { Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faThumbsDown,
  faThumbsUp,
} from "@fortawesome/free-regular-svg-icons";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";
import Cookies from "js-cookie";
import Webcam from "react-webcam";

const LivestreamDetail = ({ sidebar }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { instructor } = useSelector((state) => state.instructors);
  const messages = useSelector((state) => state.chat[id] || []);
  const [inputMessage, setInputMessage] = useState("");
  const [username, setUsername] = useState("");
  const { sendMessage, socket } = useWebSocket();
  const webcamRef = useRef(null);
    const endOfMessagesRef = useRef(null);
    const chatContainerRef = useRef(null);

  useEffect(() => {
    dispatch(getInstructorById(id));
    return () => {
      dispatch(resetMessages(id));
    };
  }, [dispatch, id]);

  useEffect(() => {
    const name = Cookies.get("username");
    setUsername(name);

    if (socket) {
      socket.on("loadMessages", (loadedMessages) => {
        dispatch(setMessages(id, loadedMessages));
      });

      socket.emit("startLivestream", id);
    }

    return () => {
      if (socket) {
        socket.off("loadMessages");
      }
    };
  }, [dispatch, id, socket]);

  useEffect(() => {
    if (id === instructor?.id) {
      sendMessage({ type: "startLivestream", userId: id });
    }

    if (socket) {
      socket.on("receiveMessage", (message) => {
        dispatch(addMessage(id, message));
      });
    }

    return () => {
      if (socket) {
        socket.off("receiveMessage");
      }
    };
  }, [id, instructor, sendMessage, socket, dispatch]);

  const handleSendMessage = () => {
    if (inputMessage.trim() !== "") {
      const message = {
        username,
        content: inputMessage,
        instructorId: id,
        timestamp: new Date().toLocaleTimeString(),
      };
      sendMessage(message);
      setInputMessage("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };
  useEffect(() => {
    chatContainerRef.current?.scrollTo({
      top: chatContainerRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);


  return (
    <div className="mt-[100px] ml-10">
      <div className={`flex ${sidebar ? "w-[1200px]" : "w-[1640px]"}`}>
        <div>
          <div>
            {id === instructor?.id ? (
              <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                width={808}
                height={435}
                className={sidebar ? "w-[800px]" : "w-[1000px]"}
              />
            ) : (
              <div>
                <Image
                  className="w-[800px] h-[450px]"
                  src={instructor?.liveStream}
                  alt="Live stream preview"
                />
              </div>
            )}
          </div>
          <div className="mt-7 flex justify-between">
            <div className="flex">
              <Image
                className="w-[50px] h-[50px] rounded-full"
                src={instructor?.avatar}
              />
              <div>
                <div className=" px-5 font-semibold ">
                  {instructor?.username}
                </div>
                <div>
                  <button className="mt-2 px-5 py-[7px] bg-red-600 text-white text-center ml-[10px]">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div className="flex">
                <div className="px-4 bg-white text-[#A9A9A9] hover:text-black">
                  <FontAwesomeIcon
                    icon={faEye}
                    className="py-2 text-center pl-2"
                  />
                  <p>1452</p>
                </div>
                <div className="px-4 mx-[7px] bg-white text-[#A9A9A9] hover:text-black">
                  <FontAwesomeIcon
                    icon={faThumbsUp}
                    className="py-2 text-center pl-2"
                  />
                  <p>1452</p>
                </div>
                <div className="px-4 bg-white text-[#A9A9A9] hover:text-black">
                  <FontAwesomeIcon
                    icon={faThumbsDown}
                    className="py-2 text-center pl-2"
                  />
                  <p>1452</p>
                </div>
                <div className="px-4 mx-[7px] bg-white text-[#A9A9A9] hover:text-black">
                  <FontAwesomeIcon
                    icon={faShareNodes}
                    className="py-2 text-center pl-2"
                  />
                  <p>1452</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white px-5 py-5 w-[1000px] ml-10">
          <p className="font-semibold">Live Chat</p>
          <div
            className="h-96 overflow-y-scroll relative no-scrollbar"
            ref={chatContainerRef}
          >
            {messages.map((message, index) => (
              <div key={index} className="mb-4">
                <strong>{message.username}:</strong> {message.content}
                <span className="text-gray-400 text-[15px] absolute right-10">
                  {message.timestamp}
                </span>
              </div>
            ))}
            <div ref={endOfMessagesRef} />
          </div>
          <div className="flex mt-4">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              className="w-full border rounded px-3 py-2"
              placeholder="Say Something..."
            />
            <button
              onClick={handleSendMessage}
              className="mt-2 bg-red-600 text-white px-4 py-2 rounded"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LivestreamDetail;
