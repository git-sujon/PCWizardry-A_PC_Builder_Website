
const RatingStar = ({rating}) => {

    let renderedItem =[]


    if(!(Number.isInteger(rating))){
        rating=Math.floor(rating)
        
    }
   
 
    for (let i = 0 ; i <rating; i++){
        renderedItem.push(<input  type="radio" name="rating-2" className="mask mask-star-2  bg-orange-400" checked/>)
    }

   

    return (
        <div className="rating">
       {
        renderedItem
       }
      </div>
    );
};

export default RatingStar;