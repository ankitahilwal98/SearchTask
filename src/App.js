import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BiArrowBack, BiX } from "react-icons/bi";
import "./App.css";

const App = () => {
  const [searchedData, setSearchedData] = useState([]);
  const [allData, setAllData] = useState([]);
  const url = "https://run.mocky.io/v3/128675fd-afe3-43fd-9b9a-cf7a0ee511ef";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setAllData(data);
        setSearchedData(data);
      });
  }, []);

  const onInputChange = (e) => {
    if (e) {
      const Searched = allData.filter((element) => element.name.includes(e));
      setSearchedData(Searched);
    } else {
      setSearchedData(allData);
    }
  };

  return (
    <Wrapper>
      <Boxdiv>
        <SearchDiv>
          <BiArrowBack />
          <SearchInput
            placeholder="Search"
            onChange={(e) => onInputChange(e.target.value)}
          />
          <BiX />
        </SearchDiv>
        <ProductTitle>Veg</ProductTitle>
        {searchedData && searchedData.length > 0 ? (
          <>
            {searchedData.map((element) => (
              <ProductWapper>
                <ProductBox>
                  <ProductName>
                    {element.name}
                    <ProductPrice>$ {element.price}</ProductPrice>
                    <Dics>{element.description}</Dics>
                  </ProductName>
                  <ImgDiv>
                    <ProductImg src={element.cloudinaryImageId} />
                    <AddBtn
                      onClick={() => console.log("Clicked here", element.name)}
                    >
                      ADD
                    </AddBtn>
                  </ImgDiv>
                </ProductBox>
              </ProductWapper>
            ))}
          </>
        ) : null}
      </Boxdiv>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  margin: 0 25%;
`;
const Boxdiv = styled.div`
  width: 100%;
`;
const SearchDiv = styled.div`
  border-bottom: 1px solid gray;
  padding: 25px 0;
  display: flex;
  justify-content: space-between;
`;
const SearchInput = styled.input`
  border: none;
  margin: 0 15px;
`;

const ProductWapper = styled.div`
  padding: 15px 0;
`;
const ProductTitle = styled.div`
  font-size: 26px;
  font-weight: 700;
`;
const ProductBox = styled.div`
  padding: 20px 10px;
  display: flex;
  justify-content: space-between;
  border: 2px solid grey;
`;
const ProductName = styled.div`
  font-size: 20px;
  font-weight: 600;
`;
const Dics = styled.div`
  padding: 10px 0;
  font-size: 14px;
  color: grey;
`;
const ProductPrice = styled.div`
  font-size: 18px;
  font-weight: 400;
  padding: 5px 0;
`;
const ImgDiv = styled.div`
  position: relative;
`;
const ProductImg = styled.img``;
const AddBtn = styled.button`
  border: 1px solid grey;
  padding:8px 12px;
  color:green;
  border-radius: 12px;
  width: 30%;
  text-align: center;
  position: absolute;
  top: 65%;
  left: 28%;
  background-color:#ffff
  cursor: pointer;
`;
export default App;
