import { HiArrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  margin-top: 30px;
  margin-bottom: 30px;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 8px 0;
  color: white;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;
  transition: background-color 0.3s ease, color 0.3s ease;
  &:hover {
    color: #bd1e2c;
  }
`;

export const BackLink = ({ to, children }) => {
  return (
    <StyledLink to={to}>
      <HiArrowLeft size="24" />
      {children}
    </StyledLink>
  );
};
