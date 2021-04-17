import slk19 from "../../../slike/slike19.png";
export const Obj1 = {
    svijetlaPozadina: false,
    svijetliTekst: true,
    svijetliTekstDeskripcija: true,
    gornji: 'Objects',
    glavni_naslov: 'JavaScript Objects',
    tekst1:'JavaScript factors are holders for information esteems. Articles are factors as well, yet they can contain numerous qualities. ',
    tekst2:'Consider an item a rundown of qualities that are composed as name:value sets, with the names and the qualities isolated by colons. ',
    tekst3:'Example:',
    tekst4:'',
    tekst5:'var person = {',
    slika1:"",
    tekst6:' name: "John", age: 31,',
    slika2:"",
    tekst7:' favColor: "green", height: 183',
    slika3:"",
    tekst8:"};",
    slika4:slk19,
    tekst9:"", 
    slika5:"",
    tekst10:"",
    slika6:"",
    tekst11:"",
    slika7:"",
    tekst12:"",
    slika8:"",
    tekst13:"",
    slika9:'',
    tekst14:"Important to know!",
    slika10:'',
    tekst15:"These qualities are called properties. ",
    slika11:'',
  
    };
  
  export const Obj2 = {
   
    svijetlaPozadina: true,
    svijetliTekst: false,
    svijetliTekstDeskripcija: false,
    gornji: 'Objects',
    glavni_naslov: 'Object Properties',
    tekst1:'You can get to protest properties in two ways. ',
    tekst2:'objectName.propertyName',
    tekst3:'//or',
    tekst4:"objectName['propertyName']",
    tekst5:'This example demonstrates how to access the age of our person object.',
    tekst6:'',
    tekst7: 'var person={',
    tekst8:'name:"Rijad", age:22,',
    tekst9:'favFood:"pizza", height:182};',
    tekst10:'var a= person.age;',
    tekst11:"var b= person['age'];",
    tekst12: 'JavaScripts built-in length property is used to count the number of characters in a property or string.',
    tekst13:'var cour={name:"JavaScript", categories:4 };    document.write(cour.name.length);',
    tekst14:'Important to know!',
    tekst15: 'Objects are one of the center ideas in JavaScript.',
  };
  
  export const Obj3 = {
    svijetlaPozadina: false,
    svijetliTekst: true,
    svijetliTekstDeskripcija: true,
    gornji: 'Objects ',
    glavni_naslov: 'Object Methods ',
    tekst1:'An item technique is a property that contains a capacity definition.',
    tekst2:'Utilize the accompanying syntax structure to get to an article technique.',
    tekst3:'objectName.methodName()',
    tekst4:'As you already know, document.write() outputs data. The write() function is actually a method of the document object. ',
    tekst5:'document.write(" random text");',
    slika1:'',
    tekst6:'',
    tekst14:'Important to know!',
    slika10:'',
    tekst15: 'Techniques are capacities that are put away as item properties.',
    slika11:''
  
    ,};
  
  export const Obj4 = {
   
    svijetlaPozadina: true,
    svijetliTekst: false,
    svijetliTekstDeskripcija: false,
    gornji: 'Objects',
    glavni_naslov: 'The Object Constructor',
    tekst1:"We already made an article utilizing the item strict (or initializer) language structure. ",
    tekst2:'var person = {name: "Rijad", age: 22, favCol: "black"};    ',
    tekst3:"",
    tekst4: "This permits you to make just a single object",
    tekst5:" Now and then, we need to set an 'object type' that can be utilized to make various objects of a single sort.",
    slika1:"",
    tekst6:"The standard method to make an 'object type' is to utilize an article constructor work.  ",
    slika2:"",
    tekst7:'function person(name, age, col) {   this.name = name;   this.age = age;   this.favCol = col;}',
    slika3:"",
    tekst8:"",
    slika4:"",
    tekst9:"The above function (individual) is an object constructor, which takes parameters and appoints them to the object properties. ", 
    slika5:"",
    tekst10:"",
    slika6:"",
    tekst11:"",
    slika7:"",
    tekst12:"",
    slika8:"",
    tekst13:"",
    slika9:'',
    tekst14:"Important to know!",
    slika10:'',
    tekst15:"The this watchword alludes to the current object. Note that this is certifiably not a variable. It is a watchword, and its worth can't be changed.",
    slika11:'',
  };
  
  export const Obj5= {
    svijetlaPozadina: false,
    svijetliTekst: true,
    svijetliTekstDeskripcija: true,
    gornji: 'Object',
    glavni_naslov: 'Creating Objects',
    tekst1:"When you have an item constructor, you can utilize the new watchword to make new objects of a similar sort. ",
    tekst2:"",
    tekst3:'var person1 = new person("Rijad", 22, "blue"); ',
    tekst4:'var person2 = new person("Damir", 23, "orange");  ',
    tekst5:"",
    slika1:"",
    tekst6:"document.write(person1.age); // This outputs 22 ",
    slika2:"",
    tekst7:'document.write(person2.name); // Outputs "Damir"',
   
    tekst14:"Important to know!",
    slika10:'',
    tekst15:"person1 and person2 are presently objects of the person sort. Their properties are appointed to the comparing esteems. ",
    slika11:''
  ,};
  
    
  export const Obj6= {
    svijetlaPozadina:true ,
    svijetliTekst:  false,
    svijetliTekstDeskripcija:  false,
    gornji: 'Objects ',
    glavni_naslov: 'Creating Objects',
    tekst1:"We need to think about the accompanying example. ",
    tekst2:"",
    tekst3:"function person (name, height) { ",
    tekst4:'this.name = name;  ',
    tekst5:"this.height = height; } ",
    slika1:"",
    tekst6:'var Rijad = new person("Rijad", 182); ',
    slika2:"",
    tekst7:'var Samir = new person("Samir", 190); ',
    slika3:"",
    tekst8: "Access the objects's properties by utilizing the spot sentence structure, as we did previously."  ,
    slika4:"",
    tekst9:"Object Initialization",
    slika5:"",
    tekst10:"Utilize the article strict or initializer grammar to make single items. ",
    slika6:"",
    tekst11:'var Rijad = {name: "Rijad", height: 182}; ',
    slika7:"",
    tekst12:'var Samir = {name: "Samir", height: 190};',
    tekst14:"Important to know!",
    tekst15:"Understanding the making of objects is fundamental. Articles comprise of properties, which are utilized to portray an item. Estimations of item properties can either contain crude information types or different articles. ",
    
  
    };
  
  export const Obj7= {
    svijetlaPozadina: false,
    svijetliTekst: true,
    svijetliTekstDeskripcija: true,
    gornji: 'Objects',
    glavni_naslov: 'Using Object Initializers ',
    tekst1:" Spaces and line breaks are not significant. An article definition can traverse different lines. ",
    tekst2:"",
    tekst3:"var Rijad = { ",
    tekst4:'name: "Rijad",};  ',
    tekst5:"height: 182  ",
    slika1:"",
    tekst6:"var Samir = { ",
    slika2:"",
    tekst7:'name: "Samir", ',
    slika3:"",
    tekst8:'height: 190}; ' ,
    slika4:"",
    tekst9:"Regardless of how the object is made, the language structure for getting to the methodes and properties doesn't change. ",
    slika5:"",
    tekst10:"document.write(Rijad.height); ",
    tekst14:"Imperative to know!",
    tekst15:"Remember about the second getting to language structure: Rijad['height']."
  
    ,};

    export const Obj8 = {
     
      svijetlaPozadina: true,
      svijetliTekst: false,
      svijetliTekstDeskripcija: false,
      gornji: 'Adding Methods',
      glavni_naslov: 'Methods',
      tekst1:'Methods are simply type of functions that are put away as object properties.       ',
      tekst2:"Utilize the accompanying grammar to make an object technique and access an object strategy utilizing the accompanying language structure:  ",
      tekst3:'methodName = function() { code lines }',
      tekst4:'objectName.methodName() ',
      tekst5:"A method is a function, having a place with an article. It tends to be referred to utilizing the this watchword.",
      slika2:'',
      tekst7:'The this watchword is utilized as a source of perspective to the current object, implying that you can get to the object methodes and properities utilizing it.  ',
      tekst8:'Characterizing methods is done inside the constructor function.  ',
      slika4:'',
      tekst9:'Example:',
      slika5:'',
      tekst10:'function person(name, height) { this.name = name; this.age = height; this.changeName = function (name) { this.name = name; }} ',
      slika6:'',
      tekst11:'var person1 = new person("Rijad", 22);   person1.changeName("Samir");   //Now person1.name equals to "Samir"',
      slika7:'',
      tekst12:'In the example we have characterized a method named changeName for our person, where a function, that takes a parameter name and relegates it to the name property of the object.  ',
      slika8:'',
      tekst13:'',
      slika9:'',
      tekst14:'Important to know!',
      tekst15:'The changeName method changes the objects name property to its argument.',
     
    };
  
    export const Obj9 = {
      svijetlaPozadina: false,
      svijetliTekst: true,
      svijetliTekstDeskripcija: true,
      gornji: 'Adding Methods',
      glavni_naslov: 'Methods',
      tekst1:"You can likewise characterize the function outside of the constructor function and partner it with the object. ",
      tekst2:"",
      tekst3:"function person(name, age) { ",
      tekst4:"this.name= name; ",
      tekst5:"this.age = age; ",
      
      tekst6:"this.yrOfBrt = bornYr; }",
      
      tekst7:"function bornYr() {",
      
      tekst8:"return 1998 - this.age;} ",
      
      tekst9:"As should be obvious, we have doled out the item's yrOfBrt property to the bornYr function. ",
      
      tekst10:"The this watchword is utilized to get to the age property of the item, which will call the method. ",
      
      
      tekst14:"Important to know!",
      
      tekst15:'Note that it is not important to compose the functions brackets when allocating it to an object. ',
      
  
      };
    
    export const Obj10 = {
     
      svijetlaPozadina: true,
      svijetliTekst: false,
      svijetliTekstDeskripcija: false,
      gornji: 'Adding Methods',
      glavni_naslov: 'Methods',
      tekst1:'We need to call the method firstly.',
      tekst2:'',
      tekst3:'function person(name, age) { ',
      tekst4:"this.name= name; ",
      tekst5:"this.age = age; ",
      tekst6:"this.yrOfBrt = bornYr; }",
      tekst7:"function bornYr() {",
      tekst8:"return 1998 - this.age;} ",
      tekst9:'var person1 = new person("Amsal", 20);  ',
      tekst10:'document.write(person1.yrOfBrt());',
      tekst14:'Important to know!',
      slika10:'',
      tekst15: 'Call the method by the property name you determined in the constructor function, as opposed to the function name.',
      
    };
  