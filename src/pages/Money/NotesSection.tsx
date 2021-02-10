import styled from "styled-components";

const NotesSection = styled.section`
    background-color:#fff;
    padding: 0px 16px;
    font-size:14px;
    >label{
      display:flex;
      align-items:center;
       >span{margin-right:16px;white-space:nowrap}
       >input{
         display:block;
         width:100%;
         height:72px;
         background:none;
         border:none;
         font-size:14px;
         color:#333;
        }
    }
`

const NoteSection = () =>{
    return(
        <NotesSection>
        <label>
        <span>备注</span>
        <input type="text" placeholder='在这里添加备注' />
        </label>
        </NotesSection>
    )
}

export default NoteSection

