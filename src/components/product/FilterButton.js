import React from 'react'
import styled from 'styled-components'
import { getProductList } from '../../apis/productlists';

const FilterButton = ({title,type,setProductData}) => {
  const handleClickButton = async () => {
    // type에 따라 어떤 api를 호출할 건지 결정해주는 함수
    if(type === "hits") {
      //page api 호출 및 response
      const response = await getProductList(type);
      // console.log(response.data);
      // console.log(response.data.result);
      setProductData(response.data.result);
    }
    else if(type === "abc") {
      //page api 호출 및 response
      const response = await getProductList(type);
      setProductData(response.data.result);
    }
    else if(type === "like") {
      //page api 호출 및 response
      const response = await getProductList(type);
      setProductData(response.data.result);
    }
    else if(type === "highprice") {
      //page api 호출 및 response
      const response = await getProductList(type);
      setProductData(response.data.result);
    }
  };

  return (
    <Button onClick={handleClickButton}>{title}</Button>
  )
}

export default FilterButton

const Button = styled.button`
    background: transparent;
    display: flex;
    flex-basis: 20%;
    justify-content: center;
    align-items: center;
    border: 0;
`;