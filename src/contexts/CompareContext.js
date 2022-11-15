import { createContext, useState } from 'react';

const CompareContext = createContext();

export function CompareProvider({children}){

    const [comparisons, setComparisons] = useState([]);

    const toggleComparisons = (event, product) => {

        if(event.currentTarget.dataset.compare === "false"){
            setComparisons( arr => [...arr, product]); // add to comparison array
            event.currentTarget.className = "btn primaryCTA";
            event.currentTarget.textContent = "Remove from comparison";
            event.currentTarget.dataset.compare = "true";
        } else {
            setComparisons(arr => arr.filter(p => p.productCode !== product.productCode)) // remove the product from the state array
            event.currentTarget.className = "btn tertiaryCTA";
            event.currentTarget.textContent = "Add to comparison";
            event.currentTarget.dataset.compare = "false";
        }
    }

    return (
        <CompareContext.Provider value={{comparisons, toggleComparisons}}>
            {children}
        </CompareContext.Provider>
    )
}

export default CompareContext;