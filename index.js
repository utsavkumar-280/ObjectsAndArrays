// //example1
// const movie = {
// 	name: "Man of Steel",
// 	rating: 7,
// 	release: 2013,
// }

// const updateRating=( mov,update )=> (update===true) ? {...mov, rating: mov.rating+1 } :{...mov, rating: mov.rating-1 } ;

// updateRating(movie,true);

// //example2
// const addSequal=(mov)=>({...mov, sequal: true});
// addSequal(movie)

//example3
// const movie = {
// 	name: "Man of Steel",
// 	rating: 7,
// 	release: 2013,
// 	lead: {
// 		name: "Henry Cavill",
// 		age: 36,
// 	},
// 	director: {
// 		name: "Zack Snyder",
// 		otherMovies: ["300", "Batman v Superman"]
// }
// }

// function updateAge(mov){
// return {...mov, lead:{...mov.lead,age: mov.lead.age+1}}
// }

// updateAge(movie);

 //example4
// const fruits = ['banana', 'orange', 'mango'];

// const addFruit=(inpF,name)=>{
// return [name,...inpF]
// }


// addFruit(fruits,'watermelon');

function conv(num){
    if (num !== 0 && !num) {
    return "hello";
  }else

  {
return "bello";
  }
    
  
}

conv()