import styled from 'styled-components';

const MovieListBlock = styled.div`
    box-sizing: border-box;
    padding-top: 3rem;
    padding-bottom: 3rem;
    width: 768px;
    margin: 0 auto;
    margin-top: 2rem;

    @media screen and (max-width: 768px) {
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
    }
`;

export default MovieListBlock;