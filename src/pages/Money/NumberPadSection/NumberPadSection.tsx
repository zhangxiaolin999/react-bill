
import React, {useState} from 'react';
import Wrapper from "./Wrapper";
import { generateOption } from './generateOutput';
import _ from 'lodash';

type Props = {
    value:number,
    onChange:(value:number) => void,
    onOk?:()=>void
}

const NumbersPadSection:React.FC<Props> = (props) =>{
    const output = props.value.toString();
    const  setOutput = (output:string) =>{
       let value;
       if(output.length > 16) value = parseFloat(output.slice(0,16));
       else if(output.length === 0 )  value = 0;
       else  value = parseFloat(output);
       props.onChange(value)
    };
    const onClickNumber = (e:React.MouseEvent) =>{
        const text = (e.target as HTMLButtonElement).textContent;
        if (!text) return;
        if (text  === 'OK'){
            // TODO
            if(props.onOk)  props.onOk();
        }
        if (_.split('0123456789.','').concat(['删除','清空']).indexOf(text) >= 0){
            setOutput(generateOption(text,output))
        }
    };
    return(
    <Wrapper>
        <div className='output'>{output}</div>
        <div className='pad clearfix' onClick={onClickNumber}>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>删除</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>清空</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button className='ok'>OK</button>
        <button className='zero'>0</button>
        <button>.</button>
        </div>
    </Wrapper>
    )
};

export default NumbersPadSection
