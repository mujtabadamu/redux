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
