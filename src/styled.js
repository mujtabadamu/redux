import styled from "styled-components";
import { GrSquare } from "react-icons/gr";

export const AsideCard = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  border-bottom: 1px solid lightgray;
  /* padding: 8px; */
  /* height: 70px; */
  padding: 10px;
  
  position: relative;
  div:nth-child(1) {
    padding: 5px;
    width: 30%;
  }
  div:nth-child(2) {
    width: 60%;
  }
  img {
    width: 90%;
  }
  table {
    background: #f4f9fb;
    border-collapse: collapse;
    width: 60%;
    text-align: center;
    margin-bottom: 10px;
    font-size: 15px;
    /* border: 1px solid #111; */
  }
  table tr td {
    border: 1px solid #2f91bb;
    color: #2f91bb;
    font-weight: 400;
    padding: 3px;
    cursor: pointer;
  }
  .item_name {
    margin-bottom: 5px;
  }
  .price {
    margin-bottom: 10px;
  }
`;

export const ListIcon = styled(GrSquare)`
  color: #00b934;
  margin-right: 5px;
`;

export const GridBox = styled.div`
  display:grid;
  grid-template-columns: 5% 65% 30%;
  grid-template-rows: 60px 300px;
  /* width: 100vw; */
  height: 100vh;

`
export const HeaderBox = styled.div`
 border-bottom:1px solid lightgray ;
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
  padding:20px;

  display:flex;
  align-items:center;
  justify-content:space-between ;

  .menuIcon{
    cursor: pointer;
  }
`

export const CartBox = styled.div`
border-left:1px solid lightgray ;
  grid-column-start: 3;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
  display:flex ;
  justify-content:center ;
  align-items:center ;

  .total_icon {
  background: #029FC6;
  padding: 10px;
  color: #fff;
  border-radius: 100%;
  height: 10px;
  width: 10px;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 8px;
}


`
export const SideBarBox  =styled.div`
grid-row-start:2;
grid-row-end:4;
grid-column-start: 1;
grid-column-end: 2;
border-right:1px solid lightgray ;

  ul{  
   list-style:none;
   display:flex;
   flex-direction:column;
   justify-content:center;
  
    }
 ul a{
  display:block;
  width:100% ;
  text-align:center;
  padding:10px;
  color:#FF9380;
  text-decoration:none;
 }

`

export const MainBox  =styled.div`
grid-row-start:2;
grid-row-end:4;
grid-column-start: 2;
grid-column-end: 3;
padding:20px;
background:#F5F6F8 ;

display:flex;
flex-wrap:wrap;
align-items:center ;

  .items{
    width:265px;
    margin:5px 10px;
    cursor:pointer;
    max-height:265px;
    display:flex;
    flex-direction:column ;
    justify-content:space-between ;
    
    /* border:1px solid grey ; */
    /* border:1px solid #333 ; */

  }
  div:nth-child(1){
    /* background:red; */
  img{
    border-radius:6px;
    width:94% ;
  }
  }
  div:nth-child(2){
    /* background:coral; */
    padding:10px 0px ;
    .price{
      font-weight:bolder ;
      line-height:1.7rem ;
    }
  }
 



`

export const CartItemBox  =styled.div`
grid-row-start:2;
grid-row-end:4;
grid-column-start: 3;
grid-column-end: 4;
border-left:1px solid lightgrey ;
border-top:1px solid lightgrey ;
padding:20px ;


.total{
  background:#EAF5F9 ;
  display: flex;
  justify-content:space-between;
  padding: 15px;
  margin:10px 0px;
}

.checkout p {
  background: #008D5B;
  text-align: center;
  padding: 7px;
  color: #fff;
  width: 100%;
  margin-bottom: 15px;
  box-sizing: border-box;
}
.checkout div{
  display:flex ;
  justify-content:space-between ;
}

.checkout button {
  background: none;
  width: 40%;
  padding: 6px;
}

.hold {
  border: 2px solid #2E9CC5;
  color: #029FC6;
}

.cancel {
  color: #FF4B4B;
  border: 2px solid #FF4B4B;
  cursor: pointer;
}
`

export const EmptyStateBox = styled.div`
    display:flex;
    flex-direction:column ;
    align-items:center ;
    margin-top:50px;

    p:nth-child(3){
      color:#B0B3B7;
    }

`