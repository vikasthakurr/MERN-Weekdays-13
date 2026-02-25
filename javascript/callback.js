// callback->call+later

function makeMagii(rawmagii, cb) {
  // setTimeout(() => {
  //   console.log(`magii made with ${rawmagii}`);
  //   cb();
  // }, 5000);
  console.log(`magii made with ${rawmagii}`);
  cb();
}

function waterBoil(cb) {
  console.log("water boiled");
  cb();
}

function addMasala(cb) {
  console.log("masala added");
  cb();
}

function serve(cb) {
  console.log("magii served");
  cb();
}

// makeMagii();
// waterBoil();
// addMasala();
// serve();

makeMagii("atamagi", () => {
  waterBoil(() => {
    addMasala(() => {
      serve(() => {
        console.log("magii wala task is done");
      });
    });
  });
});

//todo
//make a process of sandwich with 6 step
