'use strict';var _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a};!function(require,directRequire){const a=require('redux'),b=require('./c8be823f3c236cbdb22db2db2325564d.js'),c=require('./ba23d8b47b1f4ea08b9fd49939b9443f.js'),d=require('./d3976cc01aeebc5b09e11c4135b6bd8d.js'),{connect:e}=require('react-redux');module.exports=e((a)=>{let b=a.simulator.currentWebviewID,c=a.simulator.modalInfo,d=c.show&&b==c.showOnWebviewID;return _extends({},c,{show:d})},(a)=>{return{hideModal:d.bindActionCreators(c.hideModal,a)}})(b)}(require('lazyload'),require);