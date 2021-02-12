import React from "react";

let importAll = (requereContext: __WebpackModuleApi.RequireContext) => requereContext.keys().forEach(requereContext);
try {  importAll(require.context( './../../assets/svg', true, /\.svg$/ )) } catch (error) { console.error(error)}

type Props = {
    name?: string
}

const Icon = (props: Props) => { 
    return (
        <svg className='icon'>
            {props.name && <use xlinkHref={"#" + props.name}/>}
        </svg>
    )
};
export default Icon