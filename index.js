function bumpCounter(){
  var counter = 0
  function addBump(){counter++}
  function getBumps(){return counter}
  return {addBump, getBumps}
}

function createAnimal(animalType){
  return (deadlyDevice)=>{
    return {animalType,deadlyDevice} //
  }
}

var sharkCreator = createAnimal('Shark')
var sharkWithFrickinLaserbeam = sharkCreator('Laserbeam')
var sharkWithFrickinCannon = sharkCreator('Cannon')
