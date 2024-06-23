import React, { useState } from 'react';
import styled from 'styled-components';
import NavBar from '../components/NavBar.js';
import ProductItems from '../components/product/ProductItems.js';
import BrandFilterButton from '../components/brand/BrandFilterButton.js';

export default function BrandList(){
    const brandList = ["SW19", "겐조", "겔랑", "구찌", "돌체앤가바나", 
    "디올", "딥디크", "랑방", "로이비", "끌로에", "마녀공장", "마크제이콥스", "바이레도", "버버리", 
    "베르사체", "불가리", "샤넬", "안나수이", "조말론", "필로소피"];
    
    const [brandProducts,setBrandProducts] = useState([]);

    return(
        <Dom>
            <NavBar />
            <Article>
                <Wrapper>
                    <h2>Brand</h2>
                    <ButtonWrapper>
                    {
                        brandList.map((brand,i) => (
                            <BrandFilterButton 
                            key={i}
                            brand={brand}
                            setBrandProducts={setBrandProducts} />
                        ))
                     }
                    </ButtonWrapper>
                 </Wrapper>
                <ProductItems productData={brandProducts}/>
            </Article>
        </Dom>
    );
}

const Wrapper = styled.div`
    background: transparent;
    display: flex;
    flex-direction : column;
    align-items: center;
    width: 80%;
    height: 40%;
    border-bottom: solid #A1E0F3 3px;

    h2{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 20px;
    }
`;

const Dom = styled.div`
    display: flex;
    justify-content: center;
    width: 99vw;
    height: 97vh;
    background: white;
`;

const Article = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 75%;
    height: 100%;
    background-color: white;
    border-radius: 20px;
    border-style: solid;
    border-color: #A1E0F3;
    border-width: 5px;
`;

const ButtonWrapper = styled.div`
    height: 60%;
    width: 70%;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
`;