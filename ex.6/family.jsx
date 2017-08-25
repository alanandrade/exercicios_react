import React from 'react'
 
export default props => (
    <div>
        { props.children.map((children, key) => React.cloneElement(children, {...props, key})) }
        {/* Pega a propriedades do elemento filho, realize o map de cada um dos filhos e atribua uma id - clona o elemento filho com as props do elemento pai */}
    </div>
)