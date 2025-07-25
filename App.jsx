/** @jsxImportSource react */
import React from "react";
import { createRoot } from "react-dom/client";
import { styled, css } from "@linaria/react";

const global = css`
  :global() {
    *,
    *::after,
    *::before {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
        'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue';
    }

    a {
      -webkit-tap-highlight-color: transparent;
    }

    html {
      scroll-behavior: smooth;
      scrollbar-width: thin;
      scrollbar-color: transparent transparent;
    }

    body {
      height: 100vh;
      width: 100%;
      overflow: hidden;
    }

    @keyframes movement {
      0%, 100% {
        left: -150px;
        top: -50px;
      }
      25% {
        left: 150px;
      }
      50% {
        top: 100px;
      }
      75% {
        left: -150px;
      }
    }

    @keyframes movementMobile {
      0%, 100% {
        left: -100px;
        top: -50px;
      }
      25% {
        left: 100px;
      }
      50% {
        top: 100px;
      }
      75% {
        left: -100px;
      }
    }
  }
`;

const Container = styled.article`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Title = styled.h2`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 5.3vw;
  color: #fff;
  -webkit-text-stroke: 0.1vmax #000;
  animation: movement 2s ease-in-out alternate infinite both;
  animation-delay: calc(var(--d) * -0.04s);

  @media (width <= 1111px) {
    animation: movementMobile 2s ease-in-out alternate infinite both;
    animation-delay: calc(var(--d) * -0.04s);
  }

  &:last-child {
    color: mediumorchid;
  }
`;

function App() {
  return (
    <Container>
      {Array.from({ length: 12 }, (_, i) => (
        <Title key={i} style={{ "--d": i + 1 }}>MONAD SINGLETON</Title>
      ))}
    </Container>
  );
}

const rootEl = document.createElement("div");
document.body.appendChild(rootEl);

createRoot(rootEl).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default App;
