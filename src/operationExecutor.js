'use strict';

class OperationExecutor {
  constructor() {
    this.state = {
      0: this.firstTaskExecute.bind(this),
      1: this.secondTaskExecute.bind(this),
      2: this.thirdTaskExecute.bind(this),
      3: this.fourthTaskExecute.bind(this),
      4: this.fifthTaskExecute.bind(this),
      5: this.sixthTaskExecute.bind(this),
      6: this.seventhTaskExecute.bind(this),
      7: this.eighthTaskExecute.bind(this),
      8: this.ninthTaskExecute.bind(this),
      9: this.tenthTaskExecute.bind(this),
    };
  }

  /**
   * Execute some transformation of incoming arg
   * @param actionType – type of transformation
   * @param arg – incoming arg
   * @returns object with result
   */
  execute(actionType, arg) {
    return this.state[actionType](arg);
  }

  /**
   * First task of homework
   * @param arg – object with value that you should clone
   * arg = { obj1: { ... } }
   * @returns object that contains source object and his modified clone
   */
  firstTaskExecute(arg) {


      var object = arg.obj1;
      var copy = JSON.parse(JSON.stringify(object));


      copy.relatives[0].firstName = "ffff";
      return {object, copy} ;

  }

  /**
   * Second task of homework
   * @param arg – object with values that you should combine
   * arg = { obj1: { ... }, obj2: { ... } }
   * @returns object that contains source objects and their combined and modified clone
   */
  secondTaskExecute(arg) {

    var result = { ...arg.obj1, ...arg.obj2};
    result.a="1111";
      result.b="2222";
      console.log(arg);

    return result;
  }

  /**
   * Third task of homework
   * @param arg – object with value that you should modify
   * arg = { obj1: { ... } }
   * @returns object that contains modified source object
   */
  thirdTaskExecute(arg) {
      arg.obj1.relatives.forEach(x => {
        if( x.lastname != "Ivanova"){
            x.gender = "female";
        } else {
            x.gender = "male";
        }
      });
    return arg ;
  }

  /**
   * Fourth task of homework
   * @param arg – object with value that contains relatives
   * arg = { obj1: { ... relatives: [ ... ] ... } }
   * @returns object that contains array of string with female relatives
   */
  fourthTaskExecute(arg) {
      var greeting="";
  arg.obj1.relatives.forEach((relative) => {
    if (relative.gender =="female") {

      greeting+=(`Hello,${relative.firstName} ${relative.lastName}`);
       greeting+=("!");
    }
  })
    return greeting;
  }

  /**
   * Fifth task of homework
   * @param arg – object which contains new color of the button and the class of it
   * arg = { color: '...', className: '...' }
   * @returns string which contains the class of the button and current color
   */
  fifthTaskExecute(arg) {
    document.getElementsByClassName(arg.className)[0].style.background = arg.color;
    return  `${arg.className} ${document.getElementsByClassName(arg.className)[0].style.background}`;

  }

  /**
   * Sixth task of homework
   * @param arg – object with values that you should handle
   * arg = { obj1: { ... } }
   * @returns object that contains array of items that match the hostname on which the application is running
   */
  sixthTaskExecute(arg) {
    /**
     * Place your code here
     */
    return   arg.hostNames.filter((x) => x === location.hostname);
  }

  /**
   * Seventh task of homework
   * @param arg – object which contains simple key-value pairs
   * arg = { obj1: { key: value } }
   * @returns obj that contains swap pairs ('value: key')
   */
  seventhTaskExecute(arg) {
    var reverse = {};
    for(var i in arg){
      reverse[arg[i]]= i;
    }
    console.log(arg);
    return reverse;
  }

  /**
   * Eighth task of homework
   * @param arg – object which contains two array
   * arg = { obj1: { ... } }
   * @returns obj that built using array's values
   */
  eighthTaskExecute(arg) {
    //var arr = {...arg.arr1, ...arg.arr2};
      var arr = arg.arr1.concat(arg.arr2);
      var obj = {};
      for (var i = 0; i<arr.length; i+=2) {
        obj[arr[i]]= (arr[i+1] == undefined) ? null: arr[i+1];

      }


      return obj;
  }

  /**
   * Ninth task of homework
   * @param arg – object which contains array of users
   * arg = { obj1: { users: [...] } }
   * @returns obj that contains pairs id: obj with this id
   */
  ninthTaskExecute(arg) {
      var result = {};
      for (var i = 0; i < arg.users.length; i++) {
          result[arg.users[i].id] = arg.users[i];
      }

    return result;
  }

  /**
   * Tenth task of homework
   * @param arg – object which contains class of item and empty array
   * arg = { obj1: { ... } }
   * @returns obj that contains the array with info about children of the node
   */
  tenthTaskExecute(arg) {
      var children = document.getElementsByClassName(arg.className)[0].childNodes;

      for (let i = 0; i < children.length; i++) {
          if (children[i].tagName != undefined) {
              arg.childrenInfo.push (`${children[i].tagName}: ${children[i].className}`);
          }
      }
    return arg;
  }

}

export default OperationExecutor;
