import { RotatingLines } from 'react-loader-spinner';
import { LoaderStyle } from './Loader.styled';

export const Loader = () => {
    return (
        <LoaderStyle>
            <RotatingLines
                strokeColor="grey"
                strokeWidth="5"
                animationDuration="0.75"
                width="35"
                visible={true}
            />
        </LoaderStyle>
    );
};