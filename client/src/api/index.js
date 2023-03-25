import axios from "axios";

const API = axios.create({
  baseURL: "https://stackoverflow-5hye.onrender.com",
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    } `;
  }
  return req;
});

// export const fetchResponse = async (chat) => {
//   try {
//     const response = await fetch("http://localhost:5000", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         message: chat.map((message) => message.message).join(" \n "),
//       }),
//     });

//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };

export const fetchResponse = async (chat) => {
  try {
    const response = await API.post("/api/chatbot", {
      message: chat.map((message) => message.message).join(" \n "),
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const logIn = (authData) => API.post("/user/login/", authData);
export const signUp = (authData) => API.post("/user/signup/", authData);

export const postQuestion = (questionData) =>
  API.post("/questions/Ask", questionData);
export const getAllQuestions = () => API.get("/questions/get");
export const deleteQuestion = (id) => API.delete(`/questions/delete/${id}`);
export const voteQuestion = (id, value, userId) =>
  API.patch(`/questions/vote/${id}`, { value, userId });

export const postAnswer = (id, noOfAnswers, answerBody, userAnswered, userId) =>
  API.patch(`/answer/post/${id}`, {
    noOfAnswers,
    answerBody,
    userAnswered,
    userId,
  });
export const deleteAnswer = (id, answerId, noOfAnswers) =>
  API.patch(`/answer/delete/${id}`, { answerId, noOfAnswers });

export const fetchAllUsers = () => API.get("/user/getAllUsers");
export const updateProfile = (id, updateData) =>
  API.patch(`/user/update/${id}`, updateData);
