//* ==========================
//* Callback hell:
//* ==========================

//? Callback hell, also known as the Pyramid of Doom, refers to a situations in asynchronous JavaScript programming where multiple nested callback are used to handle asynchronous operations. This often results in code that is difficult to read, undertand, and maintain due to its deeply nested structure.

const getStudentData = () => {
  setTimeout(() => {
    console.log("Hi,  Rahul1");
    setTimeout(() => {
      console.log("Hi, Sourabh2");
      setTimeout(() => {
        console.log("Hi,  Vaibhav3");
        setTimeout(() => {
          console.log("Hi, Arun4");
          setTimeout(() => {
            console.log("Hi, Amar5");
            setTimeout(() => {
              console.log("Hi, Ashwat6");
              setTimeout(() => {
                console.log("Hi, Pratik7");
                setTimeout(() => {
                  console.log("Hi, Pravin8");
                  setTimeout(() => {
                    console.log("Hi, Akash9");
                    setTimeout(() => {
                      console.log("Hi, Vinit10");
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
};

getStudentData();
