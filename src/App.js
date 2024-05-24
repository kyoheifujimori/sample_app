import './App.css';
import logo from './my_picture.svg';

function App() {
  return (
    <div className="App">
      <section>
        <h1 id="introduction">Introduction</h1>
        <div>
          <img src={logo} alt="logo" />
          <div>
            <p>出身地：長野県</p>
            <p>好きなこと：バイク、お酒、料理</p>
            <p>好きな言語：python</p>
            <p>ひと言：大学一年生から言語を触り始めた新卒社会人です。
              プログラミングを深く学びたいためSE（システムエンジニア）職
              を選びました。これからもりもり成長していく予定なのでよろしく
              おねがいします！！！
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
