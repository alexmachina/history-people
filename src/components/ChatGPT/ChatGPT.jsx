import React from "react";
import "./ChatGPT.css";

const ChatGPT = ({ personName, systemPrompt, profilePic }) => {
  const [promptValue, setPromptValue] = React.useState("");
  const [respostaGpt, setRespostaGpt] = React.useState("");

  async function onSendButtonClick() {
    // chamar a API do openAI com o prompt e obter o resultado.
    const url = "https://api.openai.com/v1/chat/completions";
    const method = "POST";
    const headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer",
    };

    const body = {
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: systemPrompt,
        },
        {
          role: "user",
          content: promptValue,
        },
      ],
    };

    const response = await fetch(url, {
      method,
      headers,
      body: JSON.stringify(body),
    });

    const json = await response.json();
    const respostaGptApi = json.choices[0].message.content;
    setRespostaGpt(respostaGptApi);
  }

  const onPromptChange = (event) => {
    setPromptValue(event.target.value);
  };

  return (
    <div className="chatgpt">
      <h1>{personName}</h1>
      <img src={profilePic} className="profile-pic" alt="profilePic" />
      <div className="prompt-box">
        <textarea id="prompt" onChange={onPromptChange} value={promptValue}>
          {" "}
        </textarea>
        <p id="resposta">{respostaGpt}</p>
      </div>
      <button
        id="send-button"
        className="send-prompt"
        onClick={onSendButtonClick}
      >
        Mandar
      </button>
    </div>
  );
};

export default ChatGPT;
