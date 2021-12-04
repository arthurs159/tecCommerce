import './styles.css';
const Comments = () => {
  return (
    <div className="comments-container">
      <div className="comments-users">
        <h3>Bob Brown</h3>
        <p>Ótimo produto, chegou como esperado!!!</p>
      </div>
      <div className="comments-users">
        <h3>Bruce Wayne</h3>
        <p>Chegou certinho aqui na batca... digo, aqui em casa</p>
      </div>
      <div className="comments-users">
        <h3>Hong</h3>
        <p>Pronto, agora posso aproveitar</p>
      </div>
      <div className="comments-users">
        <h3>Yona</h3>
        <p>Ótimo produto, atrasou um pouco, mas chegou certinho</p>
      </div>
    </div>
  );
};

export default Comments;
