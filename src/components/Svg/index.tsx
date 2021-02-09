let importAll = (requereContext: __WebpackModuleApi.RequireContext) => requereContext.keys().forEach(requereContext);
try {  importAll(require.context( './../../assets/svg', true, /\.svg$/ )) } catch (error) { console.error(error)}

type Props = {
    name: string
}

const Icon = (props: Props) => { 
    return (
        <svg className='icon'>
            <use xlinkHref={"#"+ props.name}></use>
        </svg>
    )
}
export default Icon