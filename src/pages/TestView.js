import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Radio, Row, Space, Statistic, Input, Button } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { addCertificate } from "../redux/actions/certificate.action";

const { Countdown } = Statistic;
const deadline = Date.now() + 1 * 60 * 60 * 1000;

const questions = [
  {
    id: "q1",
    text: "Ques 1: What is the name of the first page you encounter after logging into your web page?",
    options: [
      "Dashboard",
      "Security question page",
      "WP upgrade option",
      "WPAdmin",
    ],
    correctAnswer: 1,
  },
  {
    id: "q2",
    text: "Ques 2: What is WordPress?",
    type: "textarea",
    correctAnswer: null,
  },
  {
    id: "q3",
    text: "Ques 3: How can you get involved with WordPress?",
    options: [
      "Attend Word Camp",
      "Edit the CodeX (documentation)",
      "Help in the forum",
      "All of these",
    ],
    correctAnswer: 4,
  },
  {
    id: "q4",
    text: "Ques 4: What ways to use WordPress?",
    options: [
      "Arcade",
      "Blog",
      "Content Management System (CMS)",
      "All of the above",
    ],
    correctAnswer: 4,
  },
  {
    id: "q5",
    text: "Ques 5: What case we cannot recommend WordPress to our client?",
    options: [
      "If client is working on non-CMS base project",
      "If site want complex or innovation e-commerce",
      "In case of enterprise intranet solution",
      "All of the above",
    ],
    correctAnswer: 4,
  },
  {
    id: "q6",
    text: "Ques 6: Which relational database does WordPress use?",
    options: ["MySQL", "Oracle", "PostgreSQL", "MS SQLServer"],
    correctAnswer: 1,
  },
  {
    id: "q7",
    text: "Ques 7: What are the rules that you have to follow for WordPress plugin development?",
    options: [
      "Attend Word Camp",
      "Edit the CodeX (documentation)",
      "Help in the forum",
      "All of these",
    ],
    correctAnswer: 4,
  },
  {
    id: "q8",
    text: "Ques 8: What are the steps you can take if your WordPress file is hacked?",
    options: [
      "Attend Word Camp",
      "Edit the CodeX (documentation)",
      "Help in the forum",
      "All of these",
    ],
    correctAnswer: 4,
  },
  {
    id: "q9",
    text: "Ques 9: What is a WordPress taxonomy?",
    options: [
      "Attend Word Camp",
      "Edit the CodeX (documentation)",
      "Help in the forum",
      "All of these",
    ],
    correctAnswer: 4,
  },
  {
    id: "q10",
    text: "Ques 10: In WordPress, what is the user role with the highest privilege level?",
    options: ["Administrator", "Author", "Editor", "Contributor"],
    correctAnswer: 1,
  },
  {
    id: "q11",
    text: "Ques 11: What case we cannot recommend WordPress to our client?",
    options: [
      "If client is working on non-CMS base project",
      "If site want complex or innovation e-commerce",
      "In case of enterprise intranet solution",
      "All of the above",
    ],
    correctAnswer: 4,
  },
  {
    id: "q12",
    text: "Ques 12: What is Gravatar?",
    options: ["A Plugin", "Global Recognized Image or Photo", "CMS"],
    correctAnswer: 2,
  },
  {
    id: "q13",
    text: "Ques 13: Types of post format available in WordPress.",
    options: ["10", "11", "9", "6"],
    correctAnswer: 3,
  },
  {
    id: "q14",
    text: "Ques 14: How many number of tables in WordPress database available?",
    options: ["18", "9", "6", "12"],
    correctAnswer: 1,
  },
  {
    id: "q15",
    text: "Ques 15: How many free plugins are available for self-hosted WordPress?",
    options: ["2,000", "30,000", "10,000"],
    correctAnswer: 2,
  },
  {
    id: "q16",
    text: "Ques 16: Are multilingual sites allowed in WordPress?",
    options: ["Yes", "No"],
    correctAnswer: 1,
  },
  {
    id: "q17",
    text: "Ques 17: What is the name of the configuration file in WordPress?",
    options: ["header.php", "wp-settings.php", "wp-config.php", "page.php"],
    correctAnswer: 3,
  },
  {
    id: "q18",
    text: "Ques 18: What case we cannot recommend WordPress to our client?",
    options: [
      "If client is working on non-CMS base project",
      "If site want complex or innovation e-commerce",
      "In case of enterprise intranet solution",
      "All of the above",
    ],
    correctAnswer: 4,
  },
  {
    id: "q19",
    text: "Ques 19: How many templates can one theme contain?",
    options: ["One", "Max Ten", "Max 20", "Unlimited"],
    correctAnswer: 4,
  },
  {
    id: "q20",
    text: "Ques 20: In which programming language is WordPress written?",
    options: ["Java", "Node", "PHP", "JavaScript"],
    correctAnswer: 3,
  },
];

const TestView = () => {
  const location = useLocation();
  const testTitle = location.state?.testTitle || "WordPress Test View";
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState({ right: 0, wrong: 0 });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { certificates } = useSelector((state) => state.certificates);
  const userId = useSelector((state) => state.auth.id);
  const uploadDate = new Date()
    .toISOString()
    .slice(0, 10)
    .split("-")
    .reverse()
    .join("-");
  const [nextItemNo, setNextItemNo] = useState(1);

  const generateUniqueItemNo = (existingItemNos) => {
    let newItemNo;
    do {
      newItemNo = Math.floor(Math.random() * 50) + 1; // Generate a random number from 1 to 100
    } while (existingItemNos.includes(newItemNo));
    return newItemNo;
  };

  useEffect(() => {
    if (certificates && certificates.length > 0) {
      const maxItemNo = Math.max(...certificates.map((cert) => cert.itemNo));
      setNextItemNo(maxItemNo + 1);
    } else {
      setNextItemNo(1);
    }
  }, [certificates]);

  const onChange = (questionId, e) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: e.target.value,
    }));
  };

  const onFinish = async () => {
    const right = questions.filter((q) => {
      const answer = answers[q.id];
      return answer && parseInt(answer, 10) === q.correctAnswer;
    }).length;
    const wrong = questions.length - right;
    setScore({ right, wrong });

    const existingItemNos = certificates.map((cert) => cert.itemNo);
    const newItemNo = generateUniqueItemNo(existingItemNos);

    const newCertificate = {
      itemNo: newItemNo,
      title: testTitle,
      marks: right * 5,
      outOf: 100,
      uploadDate: uploadDate,
    };

    dispatch(addCertificate(userId, newCertificate));
    navigate("/testresult", {
      state: { right, wrong, total: questions.length },
    });
  };

  const handleCertificationCenter = () => {
    navigate("/certificationcenter");
  };

  const handleHome = () => {
    navigate("/home");
  };

  const renderQuestion = (questionId, questionText, options) => {
    if (!options) {
      return (
        <div className="mt-4 text-black" key={questionId}>
          <h1>{questionText}</h1>
          <Input.TextArea
            rows={4}
            value={answers[questionId] || ""}
            onChange={(e) => onChange(questionId, e)}
          />
        </div>
      );
    }

    return (
      <div className="mt-4 text-black" key={questionId}>
        <h1>{questionText}</h1>
        <Radio.Group
          className="radio-button"
          onChange={(e) => onChange(questionId, e)}
          value={answers[questionId]}
        >
          <Space direction="vertical">
            {options.map((option, index) => (
              <Radio className="radio-button" value={index + 1} key={index}>
                {option}
              </Radio>
            ))}
          </Space>
        </Radio.Group>
      </div>
    );
  };

  return (
    <div>
      <div className="text-black bg-white">
        <div className="flex justify-between">
          <div className="text-black pt-[80px] pl-[11%] flex gap-3 text-[14px] cursor-pointer">
            <p onClick={handleHome}>Home /</p>
            <p onClick={handleCertificationCenter}>Certification Center /</p>
            <p className="text-[#787878]">{testTitle}</p>
          </div>
          <div
            className="text-black pt-[80px] pr-[12%] text-[14px] flex items-center text-center cursor-pointer"
            onClick={handleCertificationCenter}
          >
            <FontAwesomeIcon className="text-[7px] pb-3" icon={faChevronLeft} />
            <FontAwesomeIcon className="text-[7px] pb-3" icon={faChevronLeft} />
            <p className="pl-2">Back to Certification Center</p>
          </div>
        </div>
        <div className="pt-5 pb-3 pl-[11%] text-2xl">
          <h1>{testTitle}</h1>
        </div>
      </div>
      <div className="mt-[50px]">
        <div className="grid grid-cols-3 ml-[150px] mt-[50px]">
          <div className="flex h-[200px] fixed border">
            <div className="bg-white w-[200px] h-[200px] flex justify-center items-center flex-col gap-2">
              <div className="w-[130px] h-[130px] rounded-full bg-white border-2 border-black">
                <h1 className="text-[30px] text-black ml-[45px] mt-[45px]">
                  {questions.length}
                </h1>
              </div>
              <div className="mb-0">
                <span className="text-black font-medium">Questions</span>
              </div>
            </div>
            <div className="bg-white w-[170px] h-[200px] flex justify-center items-center flex-col gap-2">
              <div className="w-[130px] h-[130px] rounded-full bg-white border-2 border-black">
                <Row gutter={-20} className="ml-[20px] mt-[45px] font-semibold">
                  <Countdown value={deadline} onFinish={onFinish} />
                </Row>
              </div>
              <div>
                <span className="text-black font-medium">Minutes</span>
              </div>
            </div>
          </div>
          <div className="bg-[#F7F7F7] w-[700px] ml-[430px] space-y-[40px] text-[#333333]">
            {questions.map((q) => renderQuestion(q.id, q.text, q.options))}
            <div>
              <button
                onClick={onFinish}
                className="bg-red-600 hover:bg-[#333333] text-white px-6 py-[10px] text-[14px] font-medium rounded-sm"
              >
                Submit Test
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestView;
