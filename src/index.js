module.exports = function check(line, config) {
  let brackets = getBrackets(config);
  for (var i = 0; i < brackets.length;) {
    if (line.indexOf(brackets[i]) !== -1) {
      line = line.replace(brackets[i], '');
      i = 0;
    }
    else i++;
  }
  return !line;
}




function check1(line, config) {
  let brackets = getBrackets(config);
  for (var i = 0; i < brackets.length;) {
   // log(brackets[i] + "  " + line);
    if (line.indexOf(brackets[i]) !== -1) {
      line = line.replace(brackets[i], '');
      i = 0;
    }
    else i++;
  }
 // log(line);
  return !line;
}
const getBrackets = config => config.map(item => item.join(''));
//const log = str => console.log(str);
/*const config1 = [['(', ')']];
const config2 = [['(', ')'], ['[', ']']];
const config3 = [['(', ')'], ['[', ']'], ['{', '}']];
const config4 = [['|', '|']];
const config5 = [['(', ')'], ['|', '|']];
const config6 = [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']];
const config7 = [['(', ')'], ['[', ']'], ['{', '}'], ['|', '|']];

var getBrackets1 = function (config) {
  return config.map(function (item) {
    log(item);
    //log(item + " => " + item.join(''));
    return item.join('');
  });
}

*/
//log(check('([{}])', config3));
//log(check('[(])', config2));
//log(check('|()|', config5));
//log(check('|()|(||)||', config5));
//log(check());
//log(check());
//log(check());



