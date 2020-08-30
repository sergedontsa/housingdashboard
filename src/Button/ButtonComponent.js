import React from 'react';
import Button from "@material-ui/core/Button";


const ButtonComponent= ({name, color, handleClick}) => {
        return (
            <div>
                <Button variant={'outlined'} color={color} onClick={handleClick}>{name}</Button>
            </div>
        );
}

export default ButtonComponent;