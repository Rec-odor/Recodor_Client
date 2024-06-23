import React from 'react'
import styled from 'styled-components'
import { getAllProducts } from '../../apis/productlists';

const BrandFilterButton = ({brand,setBrandProducts}) => {
  const handleClickButton = async () => {
    // type에 따라 어떤 api를 호출할 건지 결정해주는 함수
    if(brand) {
      //page api 호출 및 response
      const response = await getAllProducts();
      const rawData = response.data.result;
      const result = rawData.filter(data => (data.Brand)===brand);
      
      setBrandProducts(result);
  };
}

  return (
    <Button onClick={handleClickButton}>{brand}</Button>
  )
}

export default BrandFilterButton

const Button = styled.button`
    background: white;
    border-radius: 10px;
    display: flex;
    flex-basis: 20%;
    justify-content: center;
    align-items: center;
    border: 0;
`;