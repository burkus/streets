import { Html } from "@react-three/drei";
import { type FC, type JSX } from "react";
import styled from "styled-components";

const Container = styled.div`
    transform: translate3d(calc(100% + 60px), calc(-50% - 30px), 0);   
    background: rgba(0, 0, 0, 0.3);
    padding: 4px;
    border-radius: 4px;
    color: white;

    &:before {
        content: '';
        position: absolute;
        right: 42px;
        top: 50%;
        width: 38px;
        height: 2px;
        background: white;
        transform: translateY(-50%);
    }
`

interface Props {
    children?: React.ReactNode;
}

const Label: FC<Props | JSX.IntrinsicElements['group']> = ({ children, ...props }) => {
    return (
        <Html {...props} transform>
            <Container>
                {children}
            </Container>
        </Html>
    )
}

export default Label