import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 8px;
    border-radius: 4px;
    border: none;
`

export const List = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`

export const ListItem = styled.div`
    padding: 4px 8px;
    &:hover {
        transform: scale(1.05);
    }
`

export const MenuItemText = styled.div`
    font-family: "Saira Stencil One", sans-serif;
    font-size: 30px;
    transition: all 0.2s ease-in-out;
    color: white;
    font-wweight: bold;
    &:hover {
        text-decoration: underline;
        transform: scale(1.05);
    }
`