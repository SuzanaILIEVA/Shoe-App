// fiyat ve indirim oranini alacak 
//indirim varsa asil fiyattan indirim oranini cikartacak 
//indirim yoksa asil fiyati dondurecek 

export default (price:number, discount:number = 0) => {
    if(discount){
        return price - (price * discount /100)
    }else{
        return price
    }
    
}