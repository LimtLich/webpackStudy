// Greeter.js
import config from './config.json';
import styles from './Greeter.css';//导入

module.exports = function() {
    var greet = document.createElement('div');
    greet.className = styles.root;
    greet.textContent = config.greetText;
    return greet;
};