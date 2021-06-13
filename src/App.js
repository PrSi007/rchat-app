import './App.css'
import { ChatEngine } from 'react-chat-engine'
import  ChatFeed  from './components/ChatFeed'

const App = () => {
  return (
    <div>
      <ChatEngine 
      height="100vh" 
      projectID="63d9ea97-3816-4ac5-9d30-eb6c1ff63100" 
      userName="Butcher" 
      userSecret="Pr@khar7"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>} 
      />

    </div>
  );
}

export default App;
