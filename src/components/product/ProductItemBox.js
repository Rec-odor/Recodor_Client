import React, { useState, useEffect } from 'react'
import { styled } from 'styled-components'
import { getProductDetails } from '../../apis/productlists';
import { useNavigate } from 'react-router-dom';


const ProductItemBox = ({product}) => {
  const navigate = useNavigate();
  const imgLink = `/img/productImg/${product.ImageURL}`;

  const productID = product.ProductID;

  const goDetailPage = () => {
    // console.log(detailDataInfo);
    navigate(`/products/${productID}`, {
      state: {
        key: `${productID}`
      }
    });
  };

  return (
    <Box onClick={() => {
      // handleClickButton();
      goDetailPage();
      }}>
      <img src={imgLink} alt="제품 사진" />
      <div>{product.Brand}</div>
      <h3>{product.Name}</h3>
      <div>{product.Price}</div>
    </Box>
  )
}

export default ProductItemBox;

const Box = styled.button`
  display: flex;
  background-color: transparent;
  flex-direction: column;
  align-items: center;
  width: 200px;
  height: 250px;
  border: 0;
  outline: 0;
  img{
    width: 80%;
    margin: 5px;
  }
  h3{
    margin:5px;
  }
`;