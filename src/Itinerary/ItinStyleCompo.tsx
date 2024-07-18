import styled from "styled-components";

export const getRandomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgba(${r}, ${g}, ${b})`;
};

export const ItineraryStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 20px 0;
  font-family: "Arial", sans-serif;

  .month {
    width: calc(100 / 3 - 20px);
    flex-direction: space-around;
    padding: 2rem 2rem;
    flex: 1 1 calc(100 / 2 - 20px);
    min-width: 200px;
    max-width: 200px;
    // max-width: calc(100 / 3 - 20px);
  }

  .month div:first-child {
    color: ${getRandomColor()};
    text-align: center;
  }
`;
