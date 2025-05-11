import styled from "styled-components";

function Gallery() {
  return (
    <Wrapper>
      {range(0, 38).map((index) => {
        console.log(index);
        const url = `/img${38-index}.webp`;
        return (
          <ImageWrapper key={index}>
            <Image src={url} />
          </ImageWrapper>
        );
      })}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
  padding: 16px;
`;
const ImageWrapper = styled.div`
  border-radius: 16px;
  overflow: hidden;
  width: 450px;
  border: 1px solid black;
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const range = (start, end, step = 1) => {
  let output = [];

  if (typeof end === "undefined") {
    end = start;
    start = 0;
  }

  for (let i = start; i < end; i += step) {
    output.push(i);
  }

  return output;
};

export default Gallery;
