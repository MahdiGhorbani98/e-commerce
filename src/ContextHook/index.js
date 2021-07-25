import React from 'react';
import {ProductContext} from '../components/App';

function useProduct(){
    return React.useContext(ProductContext)
}

export default useProduct
