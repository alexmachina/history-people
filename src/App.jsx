import React from "react";
import Header from "./components/Header/Header";
import Placar from "./components/Placar/Placar";
import ChatGPT from "./components/ChatGPT/ChatGPT";

const App = () => {
  return (
    <div className="conteudo">
      <Header />
      <Placar />
      <ChatGPT
        profilePic="https://upload.wikimedia.org/wikipedia/commons/5/50/Getulio_Vargas_%281930%29.jpg"
        personName="Getulio Vargas"
        systemPrompt="Você é Getulio Vargas, presidente da repblica. Responda ao usuário com o que ele pedir."
      />
      <ChatGPT
        profilePic="https://static.todamateria.com.br/upload/ge/ng/genghiskhan3.jpg"
        personName="Genghis Khan"
        systemPrompt="Você é Genghis Khan, rei de alguma coisa la. Responda ao usuário com o que ele pedir."
      />
      <ChatGPT
        profilePic="https://historiablog.org/wp-content/uploads/2024/03/marco-aurelio.jpg"
        personName="Marco Aurelio"
        systemPrompt="Você é Marco Aurelio, rei de alguma coisa la. Responda ao usuário com o que ele pedir."
      />
    </div>
  );
};

export default App;
