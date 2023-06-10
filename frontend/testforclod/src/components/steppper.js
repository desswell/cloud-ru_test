import styled from "styled-components"

export default function Stepper({ step = 0 }) {
    const currentPath = window.location.pathname.replace("/", "")
    const steps = ["1", "2", "3"]
    return (
        <Container>
            {steps.map((curStep, i) => (
                <>
                    <Dot left={50 * i} done={i < step} active={i == step}>
                        {i < step && (
                            <CheckIcon />
                        )}
                    </Dot>
                    <StepNumber left={50 * i} active={i <= step}>
                        {i + 1}
                    </StepNumber>
                    {i < 2 && <Line left={50 * i} active={i < step}></Line>}
                </>
            ))}
        </Container>
    )
}

const Container = styled.div`
  position: relative;
  height: 48px;
`

const Dot = styled.div`
  position: absolute;
  left: ${(p) => p.left}%;
  width: 16px;
  height: 16px;
  background: #a6a6a6;
  border-radius: 50%;
  transform: translateX(-50%) translateY(-25%);
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 10px;
    height: 10px;

    path {
        stroke-width: 260px;
        stroke: white;
    }
  }

  background: ${(p) => (p.done ? "#5558FA" : "#a6a6a6")};

  ${(p) =>
    p.active &&
    `
    background: #5558FA;

    &::before {
        position: absolute;
        content: '';
        width: 3px;
        height: 3px;
        background: white;
        left: 50%;
        top: 50%;
        transform: translateX(-50%) translateY(-50%);
        border-radius: 50%;
    }
  `}
`

const Line = styled.div`
  position: absolute;
  height: 8px;
  background: ${(p) => (p.active ? "#5558FA" : "rgba(0, 0, 0, 0.08)")};
  border-radius: 8px;
  left: ${(p) => p.left}%;
  width: 50%;
`

const StepNumber = styled.div`
  color: ${(p) => (p.active ? "#5558FA" : "#666")};
  position: absolute;
  left: ${(p) => p.left}%;
  bottom: 0px;
  transform: translateX(-50%);
`

const CheckIcon = () => {
    return (
        <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="512.000000pt"
            height="512.000000pt"
            viewBox="0 0 512.000000 512.000000"
            preserveAspectRatio="xMidYMid meet"
        >
            <g
                transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                fill="white"
                stroke="none"
            >
                <path
                    d="M4760 4415 c-47 -22 -270 -241 -1600 -1570 l-1545 -1545 -605 604
c-333 332 -621 612 -640 622 -49 26 -171 26 -223 0 -54 -27 -96 -72 -125 -135
-30 -65 -27 -142 8 -212 31 -62 1407 -1438 1469 -1469 25 -12 70 -25 102 -27
47 -5 66 -1 115 21 53 24 214 181 1706 1674 1493 1492 1650 1653 1674 1706 22
49 26 68 21 116 -12 132 -109 228 -242 237 -49 3 -70 0 -115 -22z"
                />
            </g>
        </svg>
    )
}
