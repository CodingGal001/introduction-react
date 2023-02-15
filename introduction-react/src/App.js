import react from 'react'; 
import logo from './logo.svg';
import './App.css';
import profile from './image/a.png';
import email from './image/email.png';
import pass from './image/pass.png';

function App() {
  return (
    <div className='main'>
      <div className='sub-main'>
        <div>
          <div className='imgs'>
            <div className='container-image'>
              <img src='profile' alt='profile' className='profile'/>
    

            </div>

          </div>
          <div>
            <h1>login page</h1>
            <div>
              <img src='email' alt='email' className='email'/>
              <input type={Text} placeholder='user name' className='name'/>
            </div>
          
            <div className='second-input'>
              <img src='pass' alt='pass' className='email'/>
              <input type={Text} placeholder='password' className='name'/>
            </div>
            <div className='login-button'>
            <button>login</button>
            </div>
            
              <p className='link'>
                <a href='a'>forgot password ?</a> or <a href='a'>sign up</a>
              </p>
            
     
          </div>
        </div>

      </div>
      
      
    </div>
  );
}

export default App;
