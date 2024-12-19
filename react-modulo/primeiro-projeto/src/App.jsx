import React, { useEffect, useState } from "react";
import "./styles/App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Article } from "./components/Article/Article";
import axios from "axios";
import { Audio, ThreeDots } from 'react-loader-spinner'

function App() {
  const [news, setNews] = useState([]); // Estado para armazenar as notícias
  const [loading, setLoading] = useState(true); // Estado para controlar o carregamento
  const [error, setError] = useState(null); // Estado para capturar erros

  useEffect(() => {
    async function loadNews() {
      try {
        const response = await axios.get("https://api.spaceflightnewsapi.net/v4/articles");
        setNews(response.data.results || response.data); // Corrigido para lidar com resultados da API
        setLoading(false); // Finaliza o carregamento
      } catch (err) {
        setError("Erro ao carregar as notícias."); // Define o erro
        setLoading(false); // Finaliza o carregamento mesmo com erro
      }
    }

    loadNews();
  }, []);

  return (
    <>
      <Navbar />
      <section id="articles">
        {loading ? (
         <div style={{height:'400px', width:'100%', display:'flex', justifyContent:'center', alignItems:'center'}}> <ThreeDots
         height="80"
         width="80"
         radius="9"
         color="white"
         ariaLabel="loading"     
         
       /></div>// Exibe mensagem enquanto carrega
        ) : error ? (
          <p>{error}</p> // Exibe mensagem de erro, se houver
        ) : (
          news.map((article) => (
            <Article
              key={article.id} // Identificador único para o React
              title={article.title}
              provider={article.news_site}
              description={article.summary}
              thumbnail={article.image_url}
            />
          ))
        )}
      </section>
    </>
  );
}

export default App;
