// import logo from './logo.svg';
import './App.css';
import ClickCount from './components/ClickCount';
import HoverCount from './components/HoverCount';
import Fun from './components/Render'
// import EbHero from './components/EbHero';
// import ErrorBoundary from './components/ErrorBoundary';
// import PortalDemo from './components/PortalDemo';
// import ForwardParRef from './components/ForwardParRef';
// import React, { Fragment } from 'react';
// import Greet from './components/greet';
// import Welcome from './components/welcome';
// import Message from "./components/Message"
// import Counter from "./components/Counter"
// import ClickFunction from './components/clickFunction';
// import ClickClass from './components/clickClass';
// import BindEvent from './components/BindEvent';
// import ParentComp from './components/ParentComp';
// import ConditionalRend from './components/ConditionalRend';
// import ListRend from './components/ListRend';
// import StyleSheet from './components/StyleSheet';
// import Form from './components/Form';
// import Fragments from './components/Fragments';
// import RefsDemo from './components/RefsDemo';
function App() {
  return (
    <div className="App">
      {/* <ClickCount/>
      <HoverCount/> */}
      <Fun
        render={(count,handler)=>(
          <ClickCount count={count} handler={handler}/>
        )}
      />
      <Fun
        render={(count,handler)=>(
          <HoverCount count={count} handler={handler}/>
        )}
      />
      {/* /* <Greet/>
      <Welcome/> */}
      {/* <Message/> */}
      {/* <Counter/> */}
      {/* <ClickFunction/> */}
      {/* <ClickClass/> */}
      {/* <BindEvent/> */}
      {/* <ParentComp/> */}
      {/* <ConditionalRend/> */}
      {/* <ListRend/> */}
      {/* <StyleSheet/> */}
      {/* <Fragments/> */}
      {/* <RefsDemo/> */}
      {/* <ForwardParRef/> */}
      {/* <PortalDemo/> */}
      {/* <ErrorBoundary>
      <EbHero heroName='superman'/>
      </ErrorBoundary>
      <ErrorBoundary>
      <EbHero heroName='batman'/>
      </ErrorBoundary>
      <ErrorBoundary>
      <EbHero heroName='joker'/>
      </ErrorBoundary> */}
    </div>
  );
}

export default App;
