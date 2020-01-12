import React from 'react';
import './App.css';
import './assets/scss/style.sass';
import { Button } from 'antd-mobile';
(function(){
    //  响应式代码
    /*
      sass里面设置转换函数$px为设计图里面的尺寸
      @function p2r($px)
      @return $px/100 + rem
      //  const pixelRatio = window.devicePixelRatio ? window.devicePixelRatio : 1; 设置完initial后好像不需要考虑pixelRatio的值
    */
    window.addEventListener('resize', function(){
        setHtmlFontSize();
    }, false);
    function setHtmlFontSize(){
        const psdWidth = 750 //  设计图尺寸
        const maxWidth = 375 //  最大尺寸
        const minWidth = 320 //  最小尺寸
        let clientWidth = document.documentElement.clientWidth || window.innerWidth;
        clientWidth = clientWidth > maxWidth ? maxWidth : (clientWidth < minWidth ? minWidth: clientWidth);
        document.querySelector('html').style.fontSize =  clientWidth / psdWidth * 100 + 'px'// 样式里面的rem单位设置需要除以100是因为chrome字体不能小于6px，为了兼容这个。
    }
    setHtmlFontSize();
}());
function App() {
  return (
    <div className="App">
      <Button>我是按钮</Button>
    </div>
  );
}

export default App;
