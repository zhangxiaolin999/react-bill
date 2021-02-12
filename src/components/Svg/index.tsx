import React from "react";
import CS from "classnames";


let importAll = (requereContext: __WebpackModuleApi.RequireContext) => requereContext.keys().forEach(requereContext);
try {  importAll(require.context( './../../assets/svg', true, /\.svg$/ )) } catch (error) { console.error(error)}

type Props = {
    name?: string
} & React.SVGAttributes<SVGElement>

const Icon = (props: Props) => {
    const {name,children,className, ...rest} = props;
    return (
        <svg className={CS('icon',className) }  {...rest}>
            {props.name && <use xlinkHref={"#" + props.name}/>}
        </svg>
    )
};
export default Icon