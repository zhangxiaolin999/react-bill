import React from "react";
import { useParams } from "react-router-dom";
import useTags from "../../hooks/useTags";


type Params = {
    id:string
}

const TagEdit: React.FC = ()=>{
    const { id } =  useParams<Params>();
    const { findTag } = useTags();
    const tag = findTag(parseInt(id));
    return(
        <div>{tag.value}</div>
    )
};

export default TagEdit