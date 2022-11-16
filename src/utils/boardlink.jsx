import React from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";

const Boardlink = ({ path, icon, title }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const Line = styled.div`
    height: 60px;
    width: calc(100% - 20px);
    border-radius: 10px;
    display: flex;
    align-items: center;
    margin: 5px 0;
    cursor: pointer;
    transition: background 0.3s;
    &.active {
      &::before {
        content: "";
        position: absolute;
        height: 0%;
        width: 3px;
        background: #2e45f399;
        /* color: ; */
        transform: translate(-10px);
        transition: 0.3s;
        animation: long 0.3s forwards linear;
        @keyframes long {
          100% {
            height: 100%;
          }
        }
      }
    }
    i {
      margin: 10px;
      color: grey;
      font-size: 30px;
    }
    p {
      color: grey;
      font-family: sans-serif;
      margin: 0;
      font-size: 18px;
    }
  `;

  return (
    <Line
      className={location.pathname === path ? "active" : ""}
      onClick={() => navigate(path)}
    >
      <i className={`bi bi-${icon}`} />
      <p>{title}</p>
    </Line>
  );
};

export default Boardlink;
