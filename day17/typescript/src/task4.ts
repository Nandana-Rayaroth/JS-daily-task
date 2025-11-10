function Once(fn: Function){
  return fn;
}

const initialize = Once(() => console.log("Initialized"))
initialize()
initialize()