const NavList = ({item,index,category}) => {
    // const check =(item)=>{
    //     console.log(item)
    // }
    return ( 
        <div >
        {/* {check(index )} */}
          <p>
            {item.headings[index]}
          </p>
            <ul className="td">
                   <li>{category[0]}</li>
                    <li>{category[1]}</li>
                    <li>{category[2]}</li>
                    <li>{category[3]}</li>
                </ul>
        </div> 
     );
}
 
export default NavList;