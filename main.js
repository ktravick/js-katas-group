const parentelement = document.querySelector('#katalist')

// Kata1
const Kata1heading = document.createElement('h3')
Kata1heading.append('kata 1')
parentelement.append(Kata1heading)

for (let Kata1counter = 1; Kata1counter <= 20; Kata1counter += 1) {
    let Kata1answer = Kata1counter
    const kata1output = document.createElement('li')
    kata1output.append(Kata1answer)
    parentelement.append(kata1output)
}
// Kata 2
const Kata2heading = document.createElement('h3')
Kata2heading.append('Kata 2')
parentelement.append(Kata2heading)

for (let kata2counter = 1; kata2counter <= 20; kata2counter += 1) {
    if (kata2counter % 2 === 0) {

        let kata2answer = kata2counter
        const kata2output = document.createElement('li')
        kata2output.append(kata2answer)
        parentelement.append(kata2output)

    }


}
//Kata 3
const Kata3heading = document.createElement('h3')
Kata3heading.append('Kata 3')
parentelement.append(Kata3heading)

for (let kata3counter = 1; kata3counter <= 20; kata3counter += 2) {
    let kata3answer = kata3counter
    const kata3output = document.createElement('li')
    kata3output.append(kata3answer)
    parentelement.append(kata3output)
}
//Kata 4
const Kata4heading = document.createElement('h3')
Kata4heading.append('Kata 4')
parentelement.append(Kata4heading)

for (let kata4counter = 5; kata4counter <= 100; kata4counter += 5) {
    let Kata4answer = kata4counter
    const kata4output = document.createElement('li')
    kata4output.append(Kata4answer)
    parentelement.append(kata4output)
}
//Kata 5

const Kata5heading = document.createElement('h3')
Kata5heading.append('Kata 5')
parentelement.append(Kata5heading)

for (let kata5counter = 1; kata5counter <= 10; kata5counter += 1) {
    let Kata5answer = kata5counter * kata5counter
    const kata5output = document.createElement('li')
    kata5output.append(Kata5answer)
    parentelement.append(kata5output)
}

//Kata 6
const Kata6heading = document.createElement('h3')
Kata6heading.append('Kata 6')
parentelement.append(Kata6heading)

for (let kata6counter = 20; kata6counter >= 1; kata6counter -= 1) {
    let Kata6answer = kata6counter
    const kata6output = document.createElement('li')
    kata6output.append(Kata6answer)
    parentelement.append(kata6output)
}

//Kata 7 
const Kata7heading = document.createElement('h3')
Kata7heading.append('Kata 7')
parentelement.append(Kata7heading)

for (let kata7counter = 20; kata7counter >= 1; kata7counter -= 1) {
    if (kata7counter % 2 === 0) {
        let kata7answer = kata7counter
        const kata7output = document.createElement('li')
        kata7output.append(kata7answer)
        parentelement.append(kata7output)

    }

}
//Kata8 
const Kata8heading = document.createElement('h3')
Kata8heading.append(' Kata 8')
parentelement.append(Kata8heading)

for (let kata8counter = 1; kata8counter <= 20; kata8counter += 2) {
    let kata8answer = kata8counter
    const kata8output = document.createElement('li')
    kata8output.append(kata8answer)
    parentelement.append(kata8output)
}

//kata 9
const Kata9heading = document.createElement('h3')
Kata9heading.append('Kata 9')
parentelement.append(Kata9heading)

for (let kata9counter = 100; kata9counter >= 5; kata9counter -= 5) {
    let kata9answer = kata9counter
    const kata9output = document.createElement('li')
    kata9output.append(kata9answer)
    parentelement.append(kata9output)
}

//Kata 10
const Kata10heading = document.createElement('h3')
Kata10heading.append('Kata 10')
parentelement.append(Kata10heading)


for (let kata10counter = 10; kata10counter >= 1; kata10counter -= 1) {
    let kata10answer = kata10counter * kata10counter
    const kata10output = document.createElement('li')
    kata10output.append(kata10answer)
    parentelement.append(kata10output)
}
// Kata 11
const samplearray = [
    469, 755, 244, 245, 758, 450, 302, 20, 712, 71,
    456, 21, 398, 339, 882, 848, 179, 535, 940, 472,
];

const Kata11heading = document.createElement('h3')
Kata11heading.append('Kata 11')
parentelement.append(Kata11heading)

for (let kata11counter = 0; kata11counter < samplearray.length; kata11counter += 1) {
    let kata11answer = samplearray[kata11counter]
    const kata11output = document.createElement('li')
    kata11output.append(kata11answer)
    parentelement.append(kata11output)
}


//Kata 12
const kata12heading = document.createElement('h3')
kata12heading.append('Kata 12')
parentelement.append(kata12heading)

for (let kata12counter = 0; kata12counter < samplearray.length; kata12counter += 1) {
    let kata12answer = samplearray[kata12counter]
    if (kata12answer % 2 === 0) {

        const kata12output = document.createElement('li')
        kata12output.append(kata12answer)
        parentelement.append(kata12output)
    }
}
//kata 13
const kata13heading = document.createElement('h3')
kata13heading.append('kata 13')
parentelement.append(kata13heading)

for (let kata13counter = 0; kata13counter < samplearray.length; kata13counter += 2) {
    let kata13answer = samplearray[kata13counter]
    {
        const kata13output = document.createElement('li')
        kata13output.append(kata13answer)
        parentelement.append(kata13output)
    }
}
//Kata 14
const kata14heading = document.createElement('h3')
kata14heading.append('kata 14')
parentelement.append(kata14heading)

for (let kata14counter = 0; kata14counter < samplearray.length; kata14counter += 1) {
    let kata14answer = samplearray[kata14counter]
    if (kata14answer % 2 === 0) {
        const kata14output = document.createElement('li')
        kata14output.append(kata14answer)
        parentelement.append(kata14output)
    }

}

//Kata 15
  const kata15heading= document.createElement ('h3')
  kata15heading.append ('kata  15')
parentelement.append(kata15heading)
let sum15 = 0
for (let kata15counter = 0; kata15counter <= samplearray.length; kata15counter +=1) {
    sum15 += kata15counter 
    }
    const kata15output =document.createElement ('li')
    kata15output.append(sum15)
    parentelement.append(kata15output)
    
    //Kata16 
     const kata16heading =document.createElement (' h3')
     kata16heading.append ('kata 16')
      parentelement.append( kata16heading)
    
   
       for ( let kata16counter =0; kata16counter <samplearray.length; kata16counter += 1) 
       let min =samplearray  if (min<samplearray) {
           
       }

       }
        
       
       const kata16output= document.createElement ('li')
       kata16output.append(sum16)
       parentelement.append(kata16output)

