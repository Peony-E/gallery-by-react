require('normalize.css/normalize.css');
require('styles/App.scss');

var imageDatas=require('../data/imageDatas.json');
imageDatas=(function genImageURL(imageDatasArr){
  for(var i=0,j=imageDatasArr.length;i<j;i++){
    var singleImageData=imageDatasArr[i];

    singleImageData.imageURL=require('../images/'+singleImageData.fileName);//这个为图片真实路径信息

    imageDatasArr[i]=singleImageData;//把singleImageData赋值回imageDatasArr
  }

  return imageDatasArr;//return imageDatasArr
})(imageDatas);

import React from 'react';

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
      <section className="stage">
        <section className="img-sec"></section>
        <nav className="controller-nav"></nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
