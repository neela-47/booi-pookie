const getStoredReadList = () =>{
    const storedListStr = localStorage.getItem('read-list');
    if(storedListStr)
    {
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }
    else{
        return [];
    }
}

const addStoreReadList = (id) =>{
    const storedList = getStoredReadList();
    if(storedList.includes(id)){
       alert('already exist')
    }
    else{
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList)
        localStorage.setItem('read-list', storedListStr);
    }

}
const getWishList = () =>{
    const wishListStr = localStorage.getItem('wish-list');
    if(wishListStr)
    {
        const wishList = JSON.parse(wishListStr);
        return wishList;
    }else{
        return [];
    }
}

const addWishList = (id) =>{
  const wishList = getWishList();
 
  if(wishList.includes(id))
  {
    alert('already exist');
  }else{
    wishList.push(id);
    const wishListStr = JSON.stringify(wishList);
    localStorage.setItem('wish-list', wishListStr);
  }
}

export {addStoreReadList, getStoredReadList};
export {addWishList, getWishList};